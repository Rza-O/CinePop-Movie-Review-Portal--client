import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../Components/FeaturedMovies';

const Home = () => {
    const moviesData = useLoaderData()
    return (
        <div>
            <div className='bg-secondary'>
                <Banner moviesData={moviesData}></Banner>
            </div>
            <div className='w-11/12 mx-auto'>
                <FeaturedMovies></FeaturedMovies>
            </div>
        </div>
    );
};

export default Home;