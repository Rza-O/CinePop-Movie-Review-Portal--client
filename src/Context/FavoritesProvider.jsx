import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { AuthContext } from './AuthProvider';

export const FavoriteContext = createContext()

const FavoritesProvider = ({ children }) => {

    const {user} = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

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