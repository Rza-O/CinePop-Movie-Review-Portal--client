import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const AllMovies = () => {
    const movieData = useLoaderData()
    console.log(movieData);
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='mt-6 text-center text-4xl font-bold'>Our Movies Collection</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    movieData.map((movie) => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;