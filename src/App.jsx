import './App.css'
import RegisterForm from "./components/RegisterForm.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MovieList from "./components/MovieList.jsx";
import {createContext, useState} from "react";

export const UserContext = createContext('user')

function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegisterForm/>}/>
                    <Route path="/movie-list" element={<MovieList/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App
