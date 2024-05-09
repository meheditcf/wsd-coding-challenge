import React from 'react';

const MovieItem = ({movie, handleAddToFavorites}) => {
    const {
        title,
        cast,
        category,
        releaseDate,
        budget,
        isFavorite = false
    } = movie || {}


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Cast:</span> {cast}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Release Date:</span> {releaseDate}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Budget:</span> {budget}
                </p>
            </div>
            <div className="px-6 py-4">
                <button
                    className={`${isFavorite ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleAddToFavorites(movie)}>
                    {
                        isFavorite ? 'Remove from favorites' : 'Add to favorites'
                    }
                </button>
            </div>
        </div>
    );
};

export default MovieItem;
