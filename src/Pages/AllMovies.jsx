import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import empty from '../assets/nodata.svg'

const AllMovies = () => {
    const data = useLoaderData()

    const [search, setSearch] = useState('');

    const [movieData, setMovieData] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetch(`https://cine-popcorn-server.vercel.app/movies?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setMovieData(data);
            })
    }, [search]);

    const handleSortByRating = () => {
        const sortedData = [...movieData].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.rating - b.rating; // Ascending order
            } else {
                return b.rating - a.rating; // Descending order
            }
        });

        setMovieData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
    };


    return (
        <div className='w-11/12 mx-auto mb-12'>
            <h2 className='mt-6 text-center text-4xl font-bold'>Our Movies Collection</h2>
            <div className='flex justify-center my-5 space-x-5'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name='search'
                    placeholder="🔍 Search movies"
                    className="input input-bordered border-secondary w-full max-w-lg" />
                <button
                    onClick={handleSortByRating}
                    className='btn bg-primary text-white'>
                    Sort by Rating ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
                {
                    movieData.map((movie) => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
            {
                movieData.length === 0 && <div className='space-y-5'>
                    <div className='text-center space-y-2'>
                        <h2 className='text-3xl font-bold'>Wow! Such Empty!</h2>
                        <p>No movies found with this name</p>
                    </div>
                    <div className='flex justify-center'><img className='h-[400px] xl:h-[600px]' src={empty} alt="" /></div>
                </div>
            }
        </div>
    );
};

export default AllMovies;