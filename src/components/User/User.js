import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {name, username, email, phone, img, salary} = props.user;
    
    return (
        <div className = 'user'>
            <div>
                <img src= {img} alt=""/>
            </div>
            <div className="user-name">
                <h3>Name: {name}</h3>
                <p><small>Uname: {username}</small></p>
                <p><small>Email: {email}</small> </p>
                <p><small>Salary: {salary}</small></p>
                <p><small>Phone: {phone}</small> </p>
                <button onClick = { () => props.handleDetailsId(props.user)}><FontAwesomeIcon icon={faPlus} /> more about</button>
            </div>
        </div>
    );
};

export default User;