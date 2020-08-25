import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = cart.reduce((sum, data) => sum + parseInt(data.salary), 0);
    return (
        <div>
            <h3>More data about Users</h3>
            <p>User Number: {cart.length}</p>
            <p>User salary: {total} </p>
        </div>
    );
};

export default Cart;