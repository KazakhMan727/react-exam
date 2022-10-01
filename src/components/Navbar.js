import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";

function Navbar () {

    let [seenMenu, setSeenMenu] = useState(false);
    let [seenUser, setSeenUser] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        
    }, []);

    function handleMenu () {
        if (seenUser == false) {
            setSeenMenu(!seenMenu);
        }
    }

    function handleUser () {
        if (seenMenu == false) {
            setSeenUser(!seenUser);
        }
    }

    function signin () {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        localStorage.setItem("isLogedIn", true);
    }

    function signout () {
        signOut(auth).then(() => {
            localStorage.setItem("isLogedIn", false);
        }).catch((error) => {

        })
    }

    return (
        <>
            <div className="navbar">
                <div className="sub-navbar">
                    <div className="burger-menu" onClick={handleMenu}></div>
                    <p onClick={() => navigate("/")}>Anime Shop</p>
                    <div className="user-btn" onClick={handleUser}></div>
                </div>
            </div>

            {seenMenu ? <div className="hidden-menu">
                <div className="sub-hidden-menu">
                    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} to="/figures">Figures</Link>
                    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} to="/badges">Badges</Link>
                    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} to="/stickers">Stickers</Link>
                    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} to="/t-shirts">T-Shirts</Link>
                    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} to="/rucksacks">Rucksacks</Link>
                    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} to="/cart">Cart</Link>
                </div>
            </div> : null}

            {seenUser ? <div className="hidden-menu hidden-user-menu">
                <div className="sub-hidden-menu">
                    <p style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} onClick={signin}>Sign in</p>
                    <p style={{color: 'white', textDecoration: 'none', fontFamily: 'Mulish-Regular'}} onClick={signout}>Sign out</p>
                </div>
            </div> : null}
        </>
        
    );
}

export default Navbar;