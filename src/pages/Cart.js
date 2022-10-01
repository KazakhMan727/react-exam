import React, { useEffect, useState } from "react";

function Cart () {

    let [cartArray, setCart] = useState("");
    let [totalPrice, setTotalPrice] = useState(null);
    
    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let summ = 0;

        if (cart !== []) {
            setCart(cart.map(product => (<p style={{fontFamily: 'Mulish-Regular'}} key={product.id}>{product.name} Quantity: {product.quantity} Price: {product.price * product.quantity}</p>)));
        
            for (let item of cart) {
                summ += item.price * item.quantity;
            }
    
            setTotalPrice(summ);
        }
    }, []);

    return (
        <div className="cart-page container">
            {cartArray}
            <div className="cart-buy-block">
                <div className="sub-cart-buy">
                    <p>Total price: {totalPrice}</p><button>Buy</button><button onClick={() => {localStorage.removeItem("cart"); setCart(null)}}>Clear cart</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;