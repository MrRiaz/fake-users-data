import React from 'react';
import { useState } from 'react';
import fakeDatas from '../../fakeData/fakeDatas';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState(fakeDatas);
    const [cart, setCart] = useState([]);

    const handleDetailsId = (user) => {
        const newCart = [...cart, user];
        setCart(newCart);
    }
    return (
        <div className = 'users-container'>
            <div className="user-container">
                {
                    users.map(ur => <User
                         user = {ur} 
                         handleDetailsId = {handleDetailsId}
                         >
                        </User>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Users;