import React from "react";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-img" />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-genre"><b>Gatunek: </b>{movie.genre}</p>
            <p className="movie-time"><b>Godziny: </b>{movie.times.join(", ")}</p>
            {movie.premiere && (
                <span className="premiere">Premiera</span>
            )}
        </div>
    );
}

export default MovieCard;
