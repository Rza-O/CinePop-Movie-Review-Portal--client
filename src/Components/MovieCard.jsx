import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { FavoriteContext } from '../Context/FavoritesProvider';


const MovieCard = ({ movie }) => {
    const { title, poster, genres, duration, year, rating, _id, email } = movie;
    const { favorites, setFavorites } = useContext(FavoriteContext)


    const handleDelete = (_id) => {
        Swal.fire({
            title: "Remove this movie from favorite?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#72163E",
            confirmButtonText: "Yes, remove it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://cine-popcorn-server.vercel.app/favorites/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Movie has been removed from favorites.",
                                icon: "success"
                            });
                            const remainingFav = favorites.filter(singleFav => singleFav._id !== _id);
                            setFavorites(remainingFav);
                        }
                    })
            }
        })
    }



    
    return (
        <div className="card flex bg-base-200 shadow-2xl">
            <figure>
                <img
                    className='h-[500px] rounded w-full'
                    src={poster}
                    alt="Movie" />
            </figure>
            <div className="card-body text-center space-y-2">
                <h2 className='text-2xl text-secondary font-bold'>{title}</h2>
                <div className='flex gap-4 justify-center'>
                    {
                        genres.map((genre, idx) => <div key={idx}>
                            <p className='p-1 rounded bg-secondary/90 text-xs text-white'>{genre}</p>
                        </div>)
                    }
                </div>
                <div>
                    <Rating initialValue={rating} readonly fillColor="#72163E" size={30} />
                    <p>Out of 5</p>
                </div>
                <p className=''>Runtime: {duration} min</p>
                <p>Released Year: {year}</p>
                <div className="card-actions justify-center flex-grow">
                    {
                        email ? <Link ><button onClick={() => handleDelete(_id)} className="btn bg-secondary text-white">Remove Favorite</button></Link> : <Link to={`/movies/${_id}`}><button className="btn bg-secondary text-white">View Details</button></Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default MovieCard;


