import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const moviesData = useLoaderData()
    return (
        <div>
            <Banner moviesData={moviesData}></Banner>
        </div>
    );
};

export default Home;