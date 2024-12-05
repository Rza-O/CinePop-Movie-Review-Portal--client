import React from 'react';

// Movie Poster.
// Movie Title.
//     Genre.
//     Duration.
// Release Year.
//     Rating.
// “See Details” button.


const MovieCard = ({movie}) => {
    const {title, poster, genres, duration, year, rating} = movie;
    console.log(genres);
    return (
        <div className="card flex bg-base-200 shadow-2xl">
            <figure>
                <img
                    className='h-[500px] rounded w-full'
                    src={movie.poster}
                    alt="Movie" />
            </figure>
            <div className="card-body text-center">
                <h2 className='text-2xl text-secondary font-bold'>{title}</h2>
                <div className='flex gap-4 justify-center'>
                    {
                        genres.map(genre => <div>
                            <p className='badge bg-secondary text-xs text-white'>{genre}</p>
                        </div>)
                    }
                </div>
                <p>⭐{rating} / 5</p>
                <p className=''>Runtime: {duration} min</p>
                <p>Released Year: {year}</p>
                <div className="card-actions justify-center flex-grow">
                    <button className="btn bg-secondary text-white">View Details</button>
                </div>
            </div>
        </div >
    );
};

export default MovieCard;


