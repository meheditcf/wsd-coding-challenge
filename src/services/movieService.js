// Movie service for movie-related operations
const movieList = [
    {
        id: 1,
        title: "Schindler's List",
        cast: "Liam Neeson, Ralph Fiennes",
        category: "Historical Drama",
        releaseDate: "1993-12-15",
        budget: "$22 million",
    },
    {
        id: 2,
        title: "12 Angry Men",
        cast: "Henry Fonda, Lee J. Cobb",
        category: "Drama",
        releaseDate: "1957-04-11",
        budget: "$350,000",
    },
    {
        id: 3,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        cast: "Elijah Wood, Ian McKellen",
        category: "Fantasy Adventure",
        releaseDate: "2001-12-19",
        budget: "$93 million",
    },
    {
        id: 4,
        title: "Forrest Gump",
        cast: "Tom Hanks, Robin Wright",
        category: "Comedy-Drama",
        releaseDate: "1994-06-06",
        budget: "$55 million",
    },
    {
        id: 5,
        title: "Whiplash",
        cast: "Miles Teller, J.K. Simmons",
        category: "Drama",
        releaseDate: "2014-01-17",
        budget: "$6.5 million",
    },
    {
        id: 6,
        title: "Inception",
        cast: "Leonardo DiCaprio, Elliot Page",
        category: "Sci-Fi Thriller",
        releaseDate: "2010-07-16",
        budget: "$160 million",
    },
    {
        id: 7,
        title: "The Good, the Bad and the Ugly",
        cast: "Clint Eastwood, Eli Wallach",
        category: "Western",
        releaseDate: "1966-12-16",
        budget: "$12 million",
    },
    {
        id: 8,
        title: "The Shining",
        cast: "Jack Nicholson, Shelley Duvall",
        category: "Psychological Horror",
        releaseDate: "1980-05-23",
        budget: "$15 million",
    },
    {
        id: 9,
        title: "Parasite",
        cast: "Song Kang-ho, Choi Woo-shik",
        category: "Dark Comedy Thriller",
        releaseDate: "2019-05-30",
        budget: "$11.4 million",
    },
    {
        id: 10,
        title: "Good Will Hunting",
        cast: "Matt Damon, Robin Williams",
        category: "Drama",
        releaseDate: "1997-12-19",
        budget: "$10 million",
    },
    {
        id: 11,
        title: "Seven Samurai",
        cast: "Toshirō Mifune, Takashi Shimura",
        category: "Samurai Drama",
        releaseDate: "1954-04-26",
        budget: "$350,000",
    },
    {
        id: 12,
        title: "Casablanca",
        cast: "Humphrey Bogart, Ingrid Bergman",
        category: "Romantic War Drama",
        releaseDate: "1942-01-23",
        budget: "$1 million",
    },
    {
        id: 13,
        title: "12 Years a Slave",
        cast: "Chiwetel Ejiofor, Lupita Nyong'o",
        category: "Historical Drama",
        releaseDate: "2013-10-18",
        budget: "$20 million",
    },
    {
        id: 14,
        title: "The Princess Bride",
        cast: "Cary Elwes, Robin Wright",
        category: "Fantasy Comedy",
        releaseDate: "1987-09-25",
        budget: "$16 million",
    }]

const movieService = {
    getAllMovies: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(movieList);
            }, 200);
        });
    },
    searchMovies: (query) => {
        return movieList.filter(
            (movie) =>
                movie.title.toLowerCase().includes(query.toLowerCase()) ||
                movie.cast.toLowerCase().includes(query.toLowerCase()) ||
                movie.category.toLowerCase().includes(query.toLowerCase())
        );
    },
};

export default movieService;
