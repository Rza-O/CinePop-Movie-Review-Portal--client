import { useContext, useState } from 'react';
import reviewImg from '../assets/PNG/4_SOCIAL MEDIA.png';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { AuthContext } from '../Context/AuthProvider';

// Animation for react star rating
const animatedComponents = makeAnimated();

const AddMovies = () => {
    // Context to get the user
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    // React form hook
    const { register, handleSubmit, watch, setValue } = useForm();
    // Rating state
    const [rating, setRating] = useState(0);
    // rating change handler
    const handleRatingChange = (rate) => {
        setRating(rate)
    }
    // generating year programmatically 
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - 1971 + 1}, (_, index)=> currentYear - index)

    // for multiple genres selection
    const options = [
        { value: 'action', label: 'Action' },
        { value: 'thriller', label: 'Thriller' },
        { value: 'comedy', label: 'Comedy' },
        { value: 'horror', label: 'Horror' },
        { value: 'drama', label: 'Drama' },
        { value: 'rom-com', label: 'Rom-Com' },
        { value: 'sci-fi', label: 'Sci-fi' },
    ]


    // Add movies form submission with react form hook
    const handleAddMovies = (data) => {
        const movieData = { ...data, rating, duration: parseInt(data.duration), year: parseInt(data.year) }
        console.log(movieData);
    }


    return (
        <div>

            <div className='text-center space-y-2 my-5'>
                <h1 className='text-5xl font-bold'>Recently watched a movie?</h1>
                <p className='font-semibold'>Added to our database and review it for our other user!</p>
            </div>
            <div className='flex flex-col lg:flex-row  items-center'>
                {/* <div className='border border-white'>
                    <img src={reviewImg} alt="" className='w-3/4 mx-auto'/>
                </div> */}
                <div className="bg-base-100 w-11/12 mx-auto">
                    <form className="card-body" onSubmit={handleSubmit(handleAddMovies)}>

                        <div className='flex gap-2'>
                            <div className="form-control w-1/2">
                                <label className="label ">
                                    <span className="label-text font-bold">Movie Title</span>
                                </label>
                                <input {...register('title')} type="text" placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Poster URL</span>
                                </label>
                                <input {...register('poster')} type="text" placeholder="poster" className="input input-bordered" required />
                            </div>
                        </div>



                        <div className='flex gap-2'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Runtime</span>
                                </label>
                                <input {...register('duration')} type="number" placeholder="duration" className="input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Release Year</span>
                                </label>
                                <select {...register('year', { required: true })} className="input input-bordered" defaultValue="" >
                                    <option value="" disabled>
                                        Select Year
                                    </option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* genre drop down */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Genres</span>
                            </label>
                            <Select closeMenuOnSelect={false}
                                {...register('genres')}
                                components={animatedComponents}
                                placeholder='Select Genres'
                                options={options}
                                isMulti
                                onChange={(selectedOptions) => {
                                    setValue('genres', selectedOptions ? selectedOptions.map((option) => option.value) : [])
                                }}
                            />
                        </div>

                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea {...register('summary')} className="textarea textarea-bordered" placeholder="Write a brief summary here"></textarea>
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
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-secondary text-white">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovies;