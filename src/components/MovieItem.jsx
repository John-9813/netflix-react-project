import React from 'react';

const MovieItem = ({ movie }) => {
    return (
        
        <div className="col mb-2 text-center px-1">
            <img className="img-fluid h-75" src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
    );
};

export default MovieItem;
