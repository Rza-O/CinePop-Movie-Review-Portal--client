import React, { useContext } from 'react';
import { data, useLoaderData } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const MovieDetails = () => {
    const {user} = useContext(AuthContext);
    const movie = useLoaderData();
    const {title, poster, genres, year, duration, rating, summary} = movie;

    // Sending favorites movie data to the server
    const handleFavBtn = () => {
        const email = user.email;
        const movieData = { title, poster, genres, year, duration, rating, summary, email};
        console.log(movieData);

        // Sending data
        fetch('http://localhost:5000/favorites', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(movieData)
        })
        .then(res=> res.json())
        .then(data => {
            if (data.insertedId) {
                console.log(data);
                Swal.fire({
                    title: "Great!",
                    text: "Movie Added Successfully!",
                    icon: "success"
                })
            }
        })
    }

    return (
        <div className='my-12 w-10/12 mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        className=' h-[500px]'
                        src={poster}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        <Rating initialValue={rating} readonly fillColor="#72163E" />
                    </div>
                    <div className='flex gap-3'>
                        <span className='font-bold'>Genres:</span>
                        {
                            genres.map((genre,idx) => <div key={idx}>
                                <p className='font-semibold'>{genre}</p>
                            </div>)
                        }
                    </div>
                    <div className='grow space-y-3'>
                        <p><span className='font-bold'>Runtime:</span> {duration} mins</p>
                        <p><span className='font-bold'>Released Year:</span> {year}</p>
                        <p><span className='font-bold'>Summary:</span> {summary}</p>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <button className="btn bg-secondary text-white">Update</button>
                        <button className="btn bg-secondary text-white">Delete</button>
                        <button onClick={handleFavBtn} className="btn bg-secondary text-white">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;