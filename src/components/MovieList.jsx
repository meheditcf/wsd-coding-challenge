import React, {useState, useEffect, useContext} from 'react';
import movieService from '../services/movieService';
import MovieSearch from "./MovieSearch.jsx";
import MovieItem from "./MovieItem.jsx";
import UserProfile from "./UserProfile.jsx";
import {UserContext} from "../App.jsx";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const {user, setUser} = useContext(UserContext);
    const [filteredMovies, setFilteredMovies] = useState([]);


    useEffect(() => {
        movieService.getAllMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    useEffect(() => {
        setFilteredMovies(movies)
    }, [movies]);

    const handleSearch = (query) => {
        const filteredMovies = movieService.searchMovies(query);
        setFilteredMovies(filteredMovies);
    };


    const handleAddToFavorites = (movie) => {
        const favorites = user?.favorites || [];
        const isAlreadyAdded = favorites.some((favMovie) => favMovie.id === movie.id);

        if (!isAlreadyAdded) {
            const updatedFavorites = [...favorites, {
                ...movie,
                isFavorite: true
            }];
            setFilteredMovies(filteredMovies.map((filteredMovie) => {
                    if (filteredMovie.id === movie.id) {
                        return {
                            ...filteredMovie,
                            isFavorite: true
                        }
                    }
                    return filteredMovie;
                }
            ))
            setUser({
                ...user,
                favorites: updatedFavorites
            });

        } else {
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
    }


    const movieListEl = filteredMovies && filteredMovies.length > 0 ? <div className="grid grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} handleAddToFavorites={handleAddToFavorites}/>
        ))}
    </div> : <div className="text-center">No movies found</div>;


    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-bold">Movie Listing Application</h1>
                <UserProfile user={user} setUser={setUser}/>
            </div>
            <MovieSearch onSearch={handleSearch}/>
            {movieListEl}
        </div>
    );
};

export default MovieList;
