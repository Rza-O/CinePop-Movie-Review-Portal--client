import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 mb-7'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4 pb-4">
                <div className='text-center space-y-2 mt-4' >
                    <h2 className='text-3xl font-bold text-Tertiary'>Become our member!</h2>
                    <p className='text-sm font-light'>Please Enter your details to signup</p>
                </div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input  type="email" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="email" placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 mb-2">
                        <button className="btn bg-secondary text-white">Sign Up</button>
                    </div>
                    <p className='text-center'>Already have an account? <Link to='/login'><span className='text-tertiary hover:text-quaternary'>Login</span></Link></p>
                </form>
                <div className="divider">OR</div>
                <div className='flex justify-center'>
                    <button className='btn bg-secondary text-white text-lg'> <FaGoogle className='text-2xl' /> Log in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;