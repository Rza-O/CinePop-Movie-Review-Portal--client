import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddMovies from '../Pages/AddMovies';
import AllMovies from '../Pages/AllMovies';
import MovieDetails from '../Pages/MovieDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/movies')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addMovies',
                element:<AddMovies></AddMovies>
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>,
                loader: () => fetch('http://localhost:5000/movies')
            },
            {
                path: '/details/:id',
                element: <MovieDetails></MovieDetails>,
                loader : async ({params}) => {
                    const res = await fetch(`http://localhost:5000/movies/${params.id}`);
                    const data = await res.json();
                    const singleData = data.find(movie=> movie._id == params.id);
                    return singleData;
                }
            }
        ]
    }
])

export default router;