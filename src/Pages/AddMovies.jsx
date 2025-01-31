import { useContext, useState } from 'react';
import reviewImg from '../assets/PNG/4_SOCIAL MEDIA.png';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

// Animation for react star rating
const animatedComponents = makeAnimated();

const AddMovies = () => {
    // Context to get the user
    const { user } = useContext(AuthContext);
    const addedBy = user?.email;
    // React form hook
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    // Rating state
    const [rating, setRating] = useState(0);
    // error state
    const [error, setError] = useState('');
    // rating change handler
    const handleRatingChange = (rate) => {
        setRating(rate)
    }
    // generating year programmatically 
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1971 + 1 }, (_, index) => currentYear - index)

    // for multiple genres selection
    const options = [
        { value: 'Action', label: 'Action' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Rom-com', label: 'Rom-Com' },
        { value: 'Sci-fi', label: 'Sci-fi' },
    ]

    // validating url
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    };


    // Add movies form submission with react form hook
    const handleAddMovies = (data) => {
        setError('')
        if (rating === 0) {
            setError('Movie has to be rated')
            return
        }
        const movieData = { ...data, rating, duration: parseInt(data.duration), year: parseInt(data.year), addedBy }


        // Sending Data to the Database
        fetch('https://cine-popcorn-server.vercel.app/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movieData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Great!",
                        text: "Movie Added Successfully!",
                        icon: "success"
                    })
                }
            })
    }


    return (
        <div>



            <div className='text-center space-y-2 my-5'>
                <h1 className='text-5xl font-bold'>Recently watched a movie?</h1>
                <p className='font-semibold'>Added to our database and review it for our other user!</p>
            </div>
            <div className='flex flex-col lg:flex-row  items-center'>
                <div className="bg-base-100 w-11/12 mx-auto">
                    {/* form Starts here */}
                    <form className="card-body" onSubmit={handleSubmit(handleAddMovies)}>
                        <div className='flex gap-2'>
                            {/* Title input */}
                            <div className="form-control w-1/2">
                                <label className="label ">
                                    <span className="label-text font-bold">Movie Title</span>
                                </label>
                                <input {...register('title', {
                                    required: "tittle has to be added",
                                    validate: {
                                        minLength: (value) =>
                                            value.length >= 2 || "Movie title at least has to be 2 character long"
                                    }
                                })} type="text" placeholder="title" className="input input-bordered" required />
                                {errors?.title && <p className='text-xs mt-1 text-secondary'>{errors.title.message}</p>}
                            </div>
                            {/* Poster Url */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Poster URL</span>
                                </label>
                                <input {...register('poster', {
                                    required: "poster URL has to be added",
                                    validate: {
                                        isLink: (value) =>
                                            isValidUrl(value) || "Poster has to be a valid URL"
                                    }
                                })} type="text" placeholder="poster" className="input input-bordered" required />
                                {errors?.poster && <p className='text-xs mt-1 text-secondary'>{errors.poster.message}</p>}
                            </div>
                        </div>



                        <div className='flex gap-2'>
                            {/* runtime input */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Runtime</span>
                                </label>
                                <input {...register('duration', {
                                    required: "duration has to be added",
                                    validate: {
                                        minLength: (value) =>
                                            value >= 60 || "Film duration has to be greater than 60 mins"
                                    }
                                })} type="number" placeholder="duration" className="input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" required />
                                {errors.duration && <p className='text-xs mt-1 text-secondary'>{errors.duration.message}</p>}
                            </div>


                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Release Year</span>
                                </label>
                                <select {...register('year', { required: 'released year has to be selected' })} className="input input-bordered" defaultValue="" >
                                    <option value="" disabled>
                                        Select Year
                                    </option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                {errors?.year && <p className="text-xs mt-1 text-secondary">{errors.year.message}</p>}
                            </div>
                        </div>

                        {/* genre drop down */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Genres</span>
                            </label>
                            <Select closeMenuOnSelect={false}
                                {...register('genres', { required: "genres has to be selected", })}
                                components={animatedComponents}
                                placeholder='Select Genres'
                                options={options}
                                isMulti
                                required
                                onChange={(selectedOptions) => {
                                    setValue('genres', selectedOptions ? selectedOptions.map((option) => option.value) : [])
                                }}
                            />
                            {errors?.genres && <p className="text-xs mt-1 text-secondary">{errors.genres.message}</p>}
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea {...register('summary', {
                                required: "summary has to be added",
                                validate: {
                                    minLength: (value) =>
                                        value.length >= 10 || 'Summary has to be at least 10 characters long'
                                }
                            })} className="textarea textarea-bordered" placeholder="Write a brief summary here" required></textarea>
                            {errors.summary && <p className='text-xs mt-1 text-secondary'>{errors.summary.message}</p>}
                        </div>


                        {/* rating */}
                        <div className="form-control justify-center items-center">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <div className="flex items-center gap-2">
                                <Rating
                                    onClick={handleRatingChange}
                                    ratingValue={rating}
                                    size={40}
                                    fillColor="#72163E"
                                    emptyColor="gray"
                                    transition

                                />
                                <span>{rating} / 5</span>
                            </div>
                            {
                                error && (
                                    <label className="label text-sm text-secondary">
                                        {error}
                                    </label>
                                )
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="w-1/2 mx-auto btn bg-secondary text-white">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovies;