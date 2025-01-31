import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import MovieCard from '../Components/MovieCard';
import emptyPage from '../assets/empty.svg'
import { FavoriteContext } from '../Context/FavoritesProvider';
import FavoritesTable from '../Components/FavoritesTable';


const Favorites = () => {
    const { user } = useContext(AuthContext);

    const email = user.email

    const { favorites, setFavorites } = useContext(FavoriteContext)
    
    useEffect(() => {
        fetch(`https://cine-popcorn-server.vercel.app/favorites?favOf=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFavorites(data);
            })
    }, [favorites]);
    
    


    return (
        <div className='w-11/12 mx-auto my-8 space-y-8'>
            <h2 className='text-4xl font-bold text-center'>Your Favorites </h2>
            {
                favorites.length > 0? <div className='min-h-[600px]'>
                    {
                        // favorites.map((favorite) => <MovieCard movie={favorite} setFavorites={setFavorites}></MovieCard>)
                        <FavoritesTable movies={favorites} setMovies={setFavorites}></FavoritesTable>
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