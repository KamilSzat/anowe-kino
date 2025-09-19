import React from "react";
import MovieCard from './MovieCard';

const movies = [
    {
        title: 'DOWNTON ABBEY. WIELKI FINAŁ',
        genre: 'Obyczajowy',
        duration: 157,
        times: ['16:00', '18:30'],
        image: 'https://www.stylowy.net/templates/images/ui/play-blu.svg',
        premiere: false,
    },
    {
        title: 'O PSIE, KTÓRY JEŹDZIŁ KOLEJĄ 2',
        genre: 'Familijny',
        duration: 152,
        times: ['13:30'],
        image: 'https://www.stylowy.net/data/film/38/3852_500x720.jpg',
        premiere: true,
    },
    {
        title: 'TEŚCIOWIE 3',
        genre: 'Komedia',
        duration: 120,
        times: ['16:00', '18:00', '20:15'],
        image: 'https://www.stylowy.net/data/film/38/3833_500x720.jpg',
        premiere: true,
    },
    {
        title: 'DIAMENTY',
        genre: 'Obyczajowy',
        duration: 135,
        times: ['11:30'],
        image: 'https://www.stylowy.net/data/film/38/3836_500x720.jpg',
        premiere: false,
    },
    {
        title: 'TOY STORY',
        genre: 'Animacja',
        duration: 110,
        times: ['10:25'],
        image: 'https://www.stylowy.net/data/film/38/3871_500x720.jpg',
        premiere: false,
    },
];

function MovieList() {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
