import React, {useState, useEffect} from 'react';

const MovieSearch = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        const delayDebounceFn = setTimeout(() => {
            onSearch(e.target.value); // Call onSearch only when query changes
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search movies"
                required
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
            >
                Search
            </button>
        </form>
    );
};

export default MovieSearch;
