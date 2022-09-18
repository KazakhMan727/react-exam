import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar () {

    let [seenMenu, setSeenMenu] = useState(false);
    let [seenUser, setSeenUser] = useState(false);

    function handleMenu () {
        setSeenMenu(!seenMenu);
    }

    return (
        <>
            <div className="navbar">
                {/* <img src={require("../images/burger-menu.png")} alt="" /> */}
                <div className="burger-menu" onClick={handleMenu}></div>
                <p>Anime Shop</p>
                <div className="user-btn"></div>
            </div>

            {seenMenu ? <div className="hidden-menu">
                <Link to="/figures">Figures</Link>
                <Link to="/cart">Cart</Link>
            </div> : null}
        </>
        
    );
}

export default Navbar;