import React, {useState, useEffect, useContext} from 'react';
import movieService from '../services/movieService';
import MovieSearch from "./MovieSearch.jsx";
import MovieItem from "./MovieItem.jsx";
import UserProfile from "./UserProfile.jsx";
import {UserContext} from "../App.jsx";

const FavoriteMovieList = () => {
    const {user, setUser} = useContext(UserContext);
    const [filteredMovies, setFilteredMovies] = useState([]);


    useEffect(() => {
        setFilteredMovies(user?.favorites || []);
    }, [user]);

    const handleSearch = (query) => {
        const filteredMovies = movieService.searchMovies(query);
        setFilteredMovies(filteredMovies);
    };


    const handleRemoveFromFavorites = (movie) => {
        const favorites = user?.favorites || [];
        const updatedFavorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
        setUser({
            ...user,
            favorites: updatedFavorites
        });
        setFilteredMovies(filteredMovies.map((filteredMovie) => {
            if (filteredMovie.id === movie.id) {
                return {
                    ...filteredMovie,
                    isFavorite: false
                }
            }
            return filteredMovie;
        }))
    }


    const movieListEl = filteredMovies && filteredMovies.length > 0 ? <div className="grid grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} handleChange={handleRemoveFromFavorites}/>
        ))}
    </div> : <div className="text-center">No movies found</div>;


    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-bold">Favorite Movies</h1>
                <UserProfile user={user} setUser={setUser}/>
            </div>
            <MovieSearch onSearch={handleSearch}/>
            {movieListEl}
        </div>
    );
};

export default FavoriteMovieList;
