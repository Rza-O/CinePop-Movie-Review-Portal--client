import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { handleRegister, handleGoogleLogin,setUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerForm = (data) => {
        const { name, email, password, photoURL } = data
        handleRegister(email, password)
            .then(res => {
                const user = res.user
                setUser(user);
                
            })
            .catch(err => {
                console.log(err.code, err.message);
            })
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10 mb-7'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4 pb-4">
                <div className='text-center space-y-2 mt-4' >
                    <h2 className='text-3xl font-bold text-Tertiary'>Become our member!</h2>
                    <p className='text-sm font-light'>Please Enter your details to signup</p>
                </div>
                <form className="card-body" onSubmit={handleSubmit(registerForm)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input {...register('photoURL')} type="text" placeholder="photoURL" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            validate: {
                                minLength: (value) =>
                                    value.length >= 6 || "Password Must be 6 characters long",
                                hasUpperCase: (value) =>
                                    /[A-Z]/.test(value) || "Password must include an uppercase letter.",
                                hasLowercase: (value) =>
                                    /[a-z]/.test(value) || "Password must include a lowercase letter.",

                            }
                        })} type="password" placeholder="password" className="input input-bordered" required />

                        {errors?.password && <p className='text-xs mt-1 text-secondary'>{errors.password.message}</p>}
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