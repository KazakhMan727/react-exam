import React, { useState } from "react";

function PopUp (props) {

    let [quantity, setQuantity] = useState(1);

    function handleClick () {
        props.toggle();
    }

    function addToCart () {
        let arr = JSON.parse(localStorage.getItem("cart")) || [];
        let newCartProduct = {
            id: props.product.id,
            name: props.product.text,
            price: props.product.price,
            quantity: quantity
        }

        arr.push(newCartProduct);
        localStorage.setItem("cart", JSON.stringify(arr));
        console.log(localStorage.getItem("cart"));
    }

    return (
        <div className="pop-up" onClick={handleClick}>
            <div className="sub-pop-up">
                
                <div className="image-block">
                    <div className="popup-product-img" style={{backgroundImage: `url(${props.product.img})`}}></div>
                </div>

                <div className="info-block">
                    <div className="sub-info-block">
                        <div className="text-block"> <p>{props.product.text}</p> </div>

                        <div className="price-block">
                            <p>${props.product.price}</p>
                        </div>

                        <div className="buy-block">
                            <select onSelect={e => setQuantity(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            
                            <button onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;