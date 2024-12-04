import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';
import googleIcon from '../assets/google.png';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { handleGoogleLogin } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const handleSocialLogin = () => {
        handleGoogleLogin()
            .then(data => {
                console.log(data);
            })
    }
    const loginForm = (data) => {
        const { email, password } = data
        console.log(email, password);
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
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className='flex justify-center'>
                    <button className='btn btn-secondary text-white text-lg'> <FaGoogle className='text-2xl' /> Log in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;