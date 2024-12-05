import React from 'react';

const Banner = ({ moviesData }) => {
    console.log(moviesData);
    return (
        <div>
            {
                moviesData.map(movie =>
                (<div key={movie._id}>
                    <p className='text-5xl'>{movie.title}</p>
                    <img src={movie.poster} alt="" />
                </div>))
            }

        </div>
    );
};

export default Banner;