import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';
import googleIcon from '../assets/google.png';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    // context for auth
    const { handleGoogleLogin, setUser, handleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // React form hook
    const { register, handleSubmit } = useForm();

    // error handling for invalid credential
    const [error, setError] = useState({});

    // social Login with google
    const handleSocialLogin = () => {
        handleGoogleLogin()
            .then(data => {
                navigate(location?. state? location.state : '/')
            })
    }

    // Handling login with react form hook
    const loginForm = (data) => {
        const { email, password } = data;
        setError('')
        handleLogin(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err=> {
                setError({...err, login: err.code})
            })
    }
    return (
        <div className='flex flex-col justify-center items-center mt-10 mb-7'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4 pb-4">
                <div className='text-center space-y-2 mb-6  '>
                    <h2 className='text-3xl font-bold'>Welcome Back!</h2>
                    <p className='text-sm font-light'>Please Enter your details to login</p>
                </div>


                <form className="card-body" onSubmit={handleSubmit(loginForm)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        error.login && (
                            <label className="label text-xs text-red-600">
                                <p>Email or Password is invalid</p>
                            </label>
                        )
                    }
                    <div className="form-control mt-6 mb-2">
                        <button className="btn bg-secondary text-white">Login</button>
                    </div>
                    <p className='text-center'>Don&apos;t have an account? <Link to='/register'><span className='text-tertiary hover:text-quaternary'>Sign Up</span></Link></p>
                </form>
                <div className="divider">OR</div>
                <div className='flex justify-center'>
                    <button onClick={handleSocialLogin} className='btn bg-secondary text-white w-11/12'> <FaGoogle className='text-2xl' /> Log in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;