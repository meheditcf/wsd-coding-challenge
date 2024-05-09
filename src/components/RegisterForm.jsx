import React, {useContext, useState} from 'react';
import userService from "../services/userService.js";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App.jsx";


const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        userService.registerUser(email)
            .then((user) => {
                setUser(user);
                navigate("/movie-list");
            })
            .catch((error) => {
            });

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
