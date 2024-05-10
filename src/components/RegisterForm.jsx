import React, {useContext, useState} from 'react';
import userService from "../services/userService.js";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App.jsx";
import {isValidEmail} from "../utils/index.js";
import {ROUTES} from "../constants/routes.js";

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const {setUser} = useContext(UserContext);
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        const {value} = event.target;
        setEmail(value);
        setIsValid(isValidEmail(value));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        userService.registerUser(email)
            .then((user) => {
                setUser(user);
                navigate(ROUTES.MOVIE_LIST);
            })
            .catch((error) => {
            });

    };

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold">Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Enter your email"
                    required
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button type="submit"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 ${!isValid ? 'pointer-events-none opacity-50' : ''} `}
                >Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
