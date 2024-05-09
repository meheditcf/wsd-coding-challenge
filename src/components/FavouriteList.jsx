import React from 'react';

const FavoriteList = ({ favorites, onRemoveFavorite }) => {
    return (
        <div>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((movie) => (
                    <li key={movie.id}>
                        {movie.title}{' '}
                        <button onClick={() => onRemoveFavorite(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
