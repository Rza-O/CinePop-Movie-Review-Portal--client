import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { AuthContext } from './AuthProvider';

export const FavoriteContext = createContext()

const FavoritesProvider = ({ children }) => {

    const {user} = useContext(AuthContext);
    console.log(user);
    const [favorites, setFavorites] = useState([]);
    // if (loading) {
    //     return <Loading></Loading>
    // }
    
    // const email = user.email;

    
    

    const contextInfo = {
        favorites,
        setFavorites
    }


    return (
        <FavoriteContext.Provider value={contextInfo}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoritesProvider;