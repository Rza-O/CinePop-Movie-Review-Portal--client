import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        let pageTitle = '';


        switch (true) {
            case location.pathname === '/':
                pageTitle = "Home - Cine Pop";
                break;
            case location.pathname === '/addMovies':
                pageTitle = "Add Movie - Cine Pop";
                break;
            case location.pathname === '/allMovies':
                pageTitle = "All Movies - Cine Pop";
                break;
            case location.pathname === '/allMovies':
                pageTitle = "All Movies - Cine Pop";
                break;
            case location.pathname === '/favorites':
                pageTitle = "Favorites - Cine Pop";
                break;
            case location.pathname.startsWith('/movies/'):
                pageTitle = 'Details - cine Pop';
                break;
            case location.pathname.startsWith('/updateMovie/'):
                pageTitle = 'Update Movie - cine Pop';
                break;
            case location.pathname === '/login':
                pageTitle = "Login - Nomad's Land";
                break;
            case location.pathname === '/register':
                pageTitle = "Sign Up - Nomad's Land";
                break;
            default:
                pageTitle = "Nomad's Land";
        }

        document.title = pageTitle;
    }, [location]);



    return null;
};

export default DynamicTitle;