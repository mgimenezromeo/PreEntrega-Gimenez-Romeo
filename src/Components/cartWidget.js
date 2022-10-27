import cart from "../Assets/cart.png"
import React from "react";

function CartWidget() {
    return (
            <img className="h-9 mx-4 cursor-pointer" src={cart} alt="Carrito"></img>
            
    );
}

export default CartWidget;