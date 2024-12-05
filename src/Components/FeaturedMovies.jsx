import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const FeaturedMovies = () => {
    const [sortedMovie, setSortedMovie] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/movies?sortBy=rating')
        .then(res=> res.json())
        .then(data=> setSortedMovie(data))
    }, []);
    return (
        <div className='mt-4'>
            <h2 className='text-4xl text-center'>Featured Movies</h2>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                {
                    sortedMovie.map((movie)=> <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedMovies;