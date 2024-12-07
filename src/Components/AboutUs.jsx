import React from 'react';
import cinema from '../assets/cinemahall.webp'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='my-12 w-11/12 mx-auto'>
            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-4xl font-bold '>About Us</h2>
                <p>Our mission is to bring all cinephiles around the world to be a part of our community</p>
            </div>
            <div className='flex flex-col lg:flex-row space-x-9 space-y-10 border rounded-xl p-6 shadow-xl bg-base-100'>
                <div className='lg:w-1/2'>
                    <img src={cinema} className='rounded-xl md:h-full' alt="" />
                </div>
                <div className='lg:w-1/2 space-y-6 flex flex-col justify-center items-center'>
                    <p><span className='font-bold'>CinePop</span> is a dynamic cinema reviewing platform designed for movie enthusiasts to explore, share, and engage with cinematic experiences. The website offers a rich database of movie reviews, user ratings, and detailed film analyses, making it a go-to hub for discovering what to watch next. <span className='font-bold'>CinePop</span> combines sleek design with intuitive navigation, allowing users to effortlessly browse genres, check trending films, and dive into insightful critiques written by a passionate community of cinephiles.
                    </p>
                    <p>
                        More than just a reviewing website, <span className='font-bold'>CinePop</span> fosters a vibrant movie-lover community where users can participate in discussions, rate their favorite films, and share personal movie recommendations. Whether you're a casual viewer seeking entertainment or a film buff craving in-depth analysis, <span className='font-bold'>CinePop</span> empowers you to connect with the art of cinema in a personalized and engaging way.
                    </p>
                    <div className='flex justify-center'><Link to='/contact'><button className='btn bg-secondary text-white'>Get in touch</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;