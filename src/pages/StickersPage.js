import React, { useState } from "react";
import PopUp from "../components/PopUp";
import storeArray from "../db"

function StickersPage () {

    let [seen, setSeen] = useState(false);
    let [info, setInfo] = useState('');
    console.log(storeArray.stickers);

    function togglePop () {
        setSeen(!seen);
    }

    return (
        <>
            {seen ? <PopUp toggle={togglePop} product={info} /> : null}
            <div className="product-page container">
                {storeArray.stickers.map(item => (
                    <div className="product-block" key={item.id} onClick={() => 
                        {setInfo(item)
                        togglePop()
                        }}>
                        <div className="sub-product-block">
                            <div className="product-img"> <img src={item.img} alt="" /> </div>
                            <div className="product-text"><p>{item.text} <br/> <b>{item.price}$</b></p></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StickersPage;