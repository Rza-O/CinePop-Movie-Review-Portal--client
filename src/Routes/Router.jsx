import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddMovies from '../Pages/AddMovies';
import AllMovies from '../Pages/AllMovies';
import MovieDetails from '../Pages/MovieDetails';
import Favorites from '../Pages/Favorites';
import PrivateRoute from '../Private/PrivateRoute';
import Contact from '../Components/Contact';
import UpdateMovie from '../Pages/UpdateMovie';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>,
                loader: () => fetch('http://localhost:5000/movies')
            },
            {
                path: '/movies/:id',
                element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
            },
            {
                path: '/favorites',
                element: <PrivateRoute><Favorites></Favorites></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/updateMovie/:id',
                element: <UpdateMovie></UpdateMovie>,
                loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
            }
        ]
    }
])

export default router;