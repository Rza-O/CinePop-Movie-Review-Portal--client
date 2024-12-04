import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { handleGoogleLogin } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const handleSocialLogin = () => {
        handleGoogleLogin()
        .then(data=> {
            console.log(data);
        })
    }
    const loginForm = (data) => {
        const {email, password} = data
        console.log(email, password);
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <button onClick={handleSocialLogin} className='btn'>Google</button>
        </div>
    );
};

export default Login;