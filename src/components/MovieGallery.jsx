import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const MovieGallery = ({ title, query }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // sono riuscito a ottenere qualcosa di funzionante solo in questo modo trovato online
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://www.omdbapi.com/?apikey=bad02e72&s=${query}`);
                const data = await response.json();

                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setError(data.Error);
                }
            } catch (error) {
                setError("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query]);

    return (
        <div>
            <h4>{title}</h4>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
                {!loading && !error && movies.map(movie => (
                    <MovieItem key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieGallery;
