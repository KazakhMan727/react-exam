import React, { useEffect, useState } from "react";

function Cart () {

    let [cartArray, setCart] = useState("");
    
    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart !== []) {
            setCart(cart.map(product => (<p>{product.name}</p>)));
        }
    }, []);

    return (
        <div>
            {cartArray}
        </div>
    );
}

export default Cart;