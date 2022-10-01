import React from "react";
import { useNavigate } from "react-router-dom";
// figures, badges, stickers; t-shirts, rucksacks;

function MainPage () {

    let navigate = useNavigate();

    return (
        <div className="main container">
            <div className="categories">
                <div className="category-block small-block" onClick={() => navigate("/figures")}>
                    <div className="category-name">FIGURES</div>
                </div>

                <div className="category-block small-block" onClick={() => navigate("/badges")}>
                    <div className="category-name">BADGES</div>
                </div>

                <div className="category-block small-block" onClick={() => navigate("/stickers")}>
                    <div className="category-name">STICKERS</div>
                </div>
            </div>

            <div className="categories media-col-2">
                <div className="category-block big-block"  onClick={() => navigate("/t-shirts")}>
                    <div className="category-name">T-SHIRTS</div>
                </div>

                <div className="category-block big-block" onClick={() => navigate("/rucksacks")}>
                    <div className="category-name">RUCKSACKS</div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;