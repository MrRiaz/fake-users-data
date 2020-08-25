import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {name, username, email, phone, img} = props.user;
    
    return (
        <div className = 'user'>
            <div>
                <img src= {img} alt=""/>
            </div>
            <div className="user-name">
                <h3>Name: {name}</h3>
                <p> Uname: {username} </p>
                <p> Email: {email} </p>
                <p> Phone: {phone} </p>
                <button onClick = { () => props.handleDetailsId(props.user)}><FontAwesomeIcon icon={faPlus} /> more about</button>
            </div>
        </div>
    );
};

export default User;