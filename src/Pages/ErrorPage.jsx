import { Link } from 'react-router-dom';
import errorPage from '../assets/notfound.svg';

const ErrorPage = () => {
    return (
        <div className='min-h-screen mx-auto flex flex-col justify-center items-center space-y-4'>
            <div className='w-1/2'><img src={errorPage} alt="" /></div>
            <h3 className='italic md:text-3xl'>Page Not Found</h3>
            <Link to='/'><button className='btn bg-secondary text-white'>Back to homepage</button></Link>
        </div>
    );
};

export default ErrorPage;