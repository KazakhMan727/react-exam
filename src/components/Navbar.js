import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar () {

    let [seenMenu, setSeenMenu] = useState(false);
    let [seenUser, setSeenUser] = useState(false);
    let navigate = useNavigate();

    function handleMenu () {
        setSeenMenu(!seenMenu);
    }

    function routeChange (path) {
        navigate(path);
    }

    return (
        <>
            <div className="navbar">
                {/* <img src={require("../images/burger-menu.png")} alt="" /> */}
                <div className="burger-menu" onClick={handleMenu}></div>
                <p onClick={routeChange("/")}>Anime Shop</p>
                <div className="user-btn"></div>
            </div>

            {seenMenu ? <div className="hidden-menu">
                <Link to="/figures">Figures</Link>
                <Link to="/figures">Badges</Link>
                <Link to="/figures">Stickers</Link>
                <Link to="/figures">T-Shirts</Link>
                <Link to="/figures">Rucksacks</Link>
                <Link to="/cart">Cart</Link>
            </div> : null}
        </>
        
    );
}

export default Navbar;