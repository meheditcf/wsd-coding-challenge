import React, {useContext, useState} from 'react';
import userIcon from '../assets/userIcon.png';
import {UserContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
    const {user, setUser} = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const {
        email = null
    } = user || {};

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        setUser(null);
        navigate("/");
    }

    return user ? <div className="relative">
        <button onClick={toggleDropdown} className="focus:outline-none">
            <img
                src={userIcon}
                alt="Dropdown"
                className="w-12 h-12 cursor-pointer"
            />
        </button>
        {isOpen && (
            <div
                className="z-10 top-10 right-5 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="font-medium truncate">{email}</div>
                </div>
                <div className="py-1">
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Favorite
                        Movies</a>
                </div>
                <div className="py-1">
                    <p onClick={handleSignOut}
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign
                        out</p>
                </div>
            </div>
        )}
    </div> : null;
};

export default UserProfile;
