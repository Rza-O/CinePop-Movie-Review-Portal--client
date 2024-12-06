import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../Components/FeaturedMovies';
import TopPicks from '../Components/TopPicks';
import AboutUs from '../Components/AboutUs';

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
            <div>
                <TopPicks></TopPicks>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;