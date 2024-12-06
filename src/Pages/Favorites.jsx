import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';


const Favorites = () => {
    const {user} = useContext(AuthContext);
    const email = user.email;
    console.log(email);
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/favorites?favOf=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, []);
    return (
        <div>
            this is favorites page
        </div>
    );
};

export default Favorites;