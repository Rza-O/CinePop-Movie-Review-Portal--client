import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedMovies from '../Components/FeaturedMovies';
import TopPicks from '../Components/TopPicks';
import AboutUs from '../Components/AboutUs';
import Newsletter from '../Components/Newsletter';
import PopularInterests from '../Components/PopularInterests';

const Home = () => {
    const moviesData = useLoaderData()
    return (
        <div>
            <div className='bg-secondary mb-12'>
                <Banner moviesData={moviesData}></Banner>
            </div>
            <div className='mb-14'>
                <TopPicks></TopPicks>
            </div>
            <div className='w-11/12 mx-auto mb-14'>
                <FeaturedMovies></FeaturedMovies>
            </div>
            <div className='mb-14'>
                <PopularInterests></PopularInterests>
            </div>
            <div className='mb-12'>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;