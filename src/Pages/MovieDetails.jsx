import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const MovieDetails = () => {
    const movie = useLoaderData();
    // console.log(movie);
    const {title, poster, genres, year, duration, rating, summary} = movie;
    return (
        <div className='my-12 w-10/12 mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        className='w-full h-[500px] '
                        src={poster}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        <Rating initialValue={rating} readonly fillColor="#72163E" />
                    </div>
                    <div className='flex gap-3'>
                        Genres:
                        {
                            genres.map(genre => <div>
                                <p className=''>{genre}</p>
                            </div>)
                        }
                    </div>
                    <div className='grow space-y-3'>
                        <p className='border border-black '><span className='font-bold'>Runtime:</span> {duration} mins</p>
                        <p><span className='font-bold'>Released Year:</span> {year}</p>
                        <p><span className='font-bold'>Summary:</span> {summary}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn bg-secondary text-white">Update</button>
                        <button className="btn bg-secondary text-white">Delete</button>
                        <button className="btn bg-secondary text-white">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;