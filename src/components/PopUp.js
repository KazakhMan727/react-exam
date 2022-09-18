import React from "react";

function PopUp (props) {

    function handleClick () {
        props.toggle();
    }

    function addToCart () {
        let arr = JSON.parse(localStorage.getItem("cart")) || [];
        let newCartProduct = {
            id: props.product.id,
            name: props.product.text,
            price: props.product.price
        }

        arr.push(newCartProduct);
        localStorage.setItem("cart", JSON.stringify(arr));
        console.log(localStorage.getItem("cart"));
    }

    return (
        <div className="pop-up">
            <button onClick={handleClick}>&times;</button>
            <div className="sub-pop-up">
                {/* <p>{props.product.text}</p>
                <p>{props.product.price}</p>
                <button onClick={handleClick}>&times;</button> */}
                <div className="image-block">
                    <div className="popup-product-img"></div>
                </div>

                <div className="info-block">
                    <div className="sub-info-block">
                        <div className="text-block"> <p>{props.product.text}</p> </div>
                        <div className="buy-block">
                            <button onClick={addToCart}>Add to Cart</button> <p>${props.product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;