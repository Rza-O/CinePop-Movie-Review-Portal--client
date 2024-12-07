import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const AllMovies = () => {
    const data = useLoaderData()

    const [search, setSearch] = useState('');

    const [movieData, setMovieData] = useState(data);

    useEffect(() => {
        fetch(`http://localhost:5000/movies?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setMovieData(data);
            })
    }, [search]);



    console.log(movieData);
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='mt-6 text-center text-4xl font-bold'>Our Movies Collection</h2>
            <div className='flex justify-center my-5'>
                <input
                onChange={(e)=> setSearch(e.target.value)}
                    type="text"
                    name='search'
                    placeholder="🔍 Search movies"
                    className="input input-bordered border-secondary w-full max-w-lg" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    movieData.map((movie) => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;