import './App.css'
import RegisterForm from "./components/RegisterForm.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MovieList from "./components/MovieList.jsx";
import {createContext, useState} from "react";
import {ROUTES} from "./constants/routes.js";
import FavoriteMovieList from "./components/FavouriteList";

export const UserContext = createContext('user')

function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<RegisterForm/>}/>
                    <Route path={ROUTES.MOVIE_LIST} element={<MovieList/>}/>
                    <Route path={ROUTES.FAVORITE_MOVIES} element={<FavoriteMovieList/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App
