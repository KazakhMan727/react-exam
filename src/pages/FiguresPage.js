import React, { useState } from "react";
import PopUp from "../components/PopUp";
import storeArray from "../db"

function FiguresPage () {

    let [seen, setSeen] = useState(false);
    let [info, setInfo] = useState('');
    console.log(storeArray.figures);

    function togglePop () {
        setSeen(!seen);
    }

    return (
        <>
            {seen ? <PopUp toggle={togglePop} product={info} /> : null}
            <div className="figures-page container">

                {/* <div className="product-block" onClick={() => 
                    {setInfo('bruh')
                    togglePop()
                    }}>
                    <div className="sub-product-block">
                        <div className="product-img"></div>
                        <div className="product-text"><p>Demon Slayer - Iguro Palm size G.E.M. Series Figure with Gift</p></div>
                    </div>
                </div> */}

                {storeArray.figures.map(item => (
                    <div className="product-block" key={item.id} onClick={() => 
                        {setInfo(item)
                        togglePop()
                        }}>
                        <div className="sub-product-block">
                            <div className="product-img" style={{backgroundImage: `url(${item.img})`}}></div>
                            <div className="product-text"><p>{item.text} <br/> {item.price}$</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FiguresPage;