import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

// Animation for react star rating
const animatedComponents = makeAnimated();

const UpdateMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const addedBy = user?.email;
    const [rating, setRating] = useState(0);
    const [error, setError] = useState('');
    const [movieData, setMovieData] = useState(null);

    // React Hook Form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Genres options
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
    ];

    // url validation
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    };

    // Generating years programmatically
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1971 + 1 }, (_, index) => currentYear - index);

    // Fetch movie data by ID
    useEffect(() => {
        fetch(`https://cine-popcorn-server.vercel.app/movies/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setMovieData(data);
                    setValue('title', data.title);
                    setValue('poster', data.poster);
                    setValue('duration', data.duration);
                    setValue('year', data.year);
                    setValue('genres', data.genres);
                    setValue('summary', data.summary);
                    setRating(data.rating);
                }
            })
            .catch((err) => console.log(err));
    }, [id, setValue]);

    // Rating change handler
    const handleRatingChange = (rate) => {
        setRating(rate);
    };

    // Handle update movie form submission
    const handleUpdateMovie = (data) => {
        setError('');
        if (rating === 0) {
            setError('Movie must be rated');
            return;
        }

        const updatedMovieData = { ...data, rating, duration: parseInt(data.duration), year: parseInt(data.year), addedBy };

        fetch(`https://cine-popcorn-server.vercel.app/movies/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMovieData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Updated Successfully!',
                        icon: 'success',
                    });
                    navigate('/allMovies');
                }
            })
    };


    return (
        <div>
            <div className="text-center space-y-2 my-5">
                <h1 className="text-5xl font-bold">Update Movie</h1>
                <p className="font-semibold">Update your movie details here</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
                <div className="bg-base-100 w-11/12 mx-auto">
                    <form className="card-body" onSubmit={handleSubmit(handleUpdateMovie)}>
                        <div className="flex gap-2">
                            {/* Title input */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Title</span>
                                </label>
                                <input
                                    {...register('title', {
                                        required: "tittle has to be added",
                                        validate: {
                                            minLength: (value) =>
                                                value.length >= 2 || 'Movie title must be at least 2 characters long',
                                        },
                                    })}type="text" placeholder="Title" className="input input-bordered"
                                />
                                {errors?.title && <p className="text-xs mt-1 text-secondary">{errors.title.message}</p>}
                            </div>
                            {/* Poster URL */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Poster URL</span>
                                </label>
                                <input
                                    {...register('poster', {
                                        required: "poster has to be added",
                                        validate: {
                                            isLink: (value) =>
                                                isValidUrl(value) || 'Poster must be a valid URL',
                                        },
                                    })}type="text" placeholder="Poster URL" className="input input-bordered" 
                                />
                                {errors?.poster && <p className="text-xs mt-1 text-secondary">{errors.poster.message}</p>}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {/* Runtime input */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Runtime</span>
                                </label>
                                <input
                                    {...register('duration', {
                                        required: "duration has to be added",
                                        validate: {
                                            minLength: (value) => value >= 60 || 'Film duration must be greater than 60 minutes',
                                        },
                                    })} type="number" placeholder="Duration" className="input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                {errors?.duration && <p className="text-xs mt-1 text-secondary">{errors.duration.message}</p>}
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Release Year</span>
                                </label>
                                <select {...register('year', { required: 'Released year has to be selected' })} className="input input-bordered" defaultValue="">
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

                        {/* Genre drop-down */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Genres</span>
                            </label>
                            <Select
                                closeMenuOnSelect={false}
                                {...register('genres', { required: "genres has to be added", })}
                                components={animatedComponents}
                                placeholder="Select Genres"
                                options={options}
                                
                                isMulti
                                onChange={(selectedOptions) => {
                                    setValue('genres', selectedOptions ? selectedOptions.map((option) => option.value) : []);
                                }}
                            />
                            {errors?.genres && <p className="text-xs mt-1 text-secondary">{errors.genres.message}</p>}
                        </div>

                        {/* Summary */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea
                                {...register('summary', {
                                    required: "summary has to be added",
                                    validate: {
                                        minLength: (value) => value.length >= 10 || 'Summary must be at least 10 characters long',
                                    },
                                })} className="textarea textarea-bordered" placeholder="Write a brief summary here"
                            ></textarea>
                            {errors?.summary && <p className="text-xs mt-1 text-secondary">{errors.summary.message}</p>}
                        </div>

                        {/* Rating */}
                        <div className="form-control justify-center items-center">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <div className="flex items-center gap-2">
                                <Rating onClick={handleRatingChange} ratingValue={rating} size={40} fillColor="#72163E" emptyColor="gray" transition />
                                <span>{rating} / 5</span>
                            </div>
                            {error && <label className="label text-sm text-secondary">{error}</label>}
                        </div>

                        <div className="form-control mt-6">
                            <button className="w-1/2 mx-auto btn bg-secondary text-white">Update Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMovie;
