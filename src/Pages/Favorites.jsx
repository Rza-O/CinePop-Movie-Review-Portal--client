import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import MovieCard from '../Components/MovieCard';
import emptyPage from '../assets/empty.svg'
import { FavoriteContext } from '../Context/FavoritesProvider';


const Favorites = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const email = user.email
    console.log(email);
    const { favorites, setFavorites } = useContext(FavoriteContext)
    
    useEffect(() => {
        fetch(`http://localhost:5000/favorites?favOf=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFavorites(data);
            })
    }, [favorites]);
    
    


    return (
        <div className='w-11/12 mx-auto my-8 space-y-8'>
            <h2 className='text-4xl font-bold text-center'>Your Favorites </h2>
            {
                favorites.length > 0? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {
                        favorites.map((favorite) => <MovieCard movie={favorite} setFavorites={setFavorites}></MovieCard>)
                    }
                </div>
                    : <div className='space-y-5'>
                        <div className='text-center space-y-2'>
                            <h2 className='text-3xl font-bold'>Wow! Such Empty!</h2>
                            <p>Please add your favorite movies here</p>
                        </div>
                        <div className='flex justify-center'><img className='h-[400px] xl:h-[600px]' src={emptyPage} alt="" /></div>
                    </div>
            }
        </div>
    );
};

export default Favorites;