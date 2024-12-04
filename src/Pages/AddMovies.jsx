import reviewImg from '../assets/PNG/4_SOCIAL MEDIA.png';

const AddMovies = () => {
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
                <div className="card bg-base-100 w-11/12 mx-auto   shrink-0 ">
                    <form className="card-body">

                        <div className='flex gap-2'>
                            <div className="form-control w-1/2">
                                <label className="label ">
                                    <span className="label-text font-bold">Movie Title</span>
                                </label>
                                <input type="text" placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Poster URL</span>
                                </label>
                                <input type="text" placeholder="poster" className="input input-bordered" required />
                            </div>
                        </div>

                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Runtime</span>
                            </label>
                            <input type="number" placeholder="duration" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Release Year</span>
                            </label>
                            <input type="number" placeholder="Year" className="input input-bordered" required />
                        </div>

                        {/* genre drop down */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Genres</span>
                            </label>

                            <select className="input input-bordered " name="genres" id="day">
                                <option value="sunday">Action</option>
                                <option value="monday">Thriller</option>
                                <option value="tuesday">Comedy</option>
                                <option value="wednesday">Horror</option>
                                <option value="thursday">Drama</option>
                                <option value="friday">Rom-Com</option>
                                <option value="saturday">Sci-Fi</option>
                            </select>
                        </div>

                        {/* rating */}


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Write a brief summary here"></textarea>
                            {/* <input type="text" placeholder="summary" className="input input-bordered" required /> */}
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