import React, { useEffect, useState } from 'react';

const TopPicks = () => {
    const [picks, setPicks] = useState([]);
    useEffect(() => {
        fetch('https://cine-popcorn-server.vercel.app/topPicks')
            .then(res => res.json())
            .then(data => setPicks(data))
    }, []);
    return (
        <div className='my-12'>
            <div className='mb-6 space-y-2'>
                <h2 className='text-center font-bold text-4xl'>Editor's Choice</h2>
                <p className='text-center'>Find this months best movies and review them for our other viewers</p>
            </div>
            <div className='grid w-11/12 md:max-w-6xl md:grid-cols-5 mx-auto gap-4'>
                {
                    picks.map((movie, index) => <div key={index} className="relative bg-white border border-primary shadow-lg rounded-md overflow-hidden">
                        <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                            TOP PICKS
                        </div>
                        <img src={movie.poster} alt={movie.title} className="w-full h-52 object-cover" />
                        <div className="absolute top-2 left-2 text-5xl font-bold text-white">
                            {index + 1}
                        </div>
                        <div className="absolute bottom-0 w-full bg-primary text-white text-center py-2 text-sm font-bold">
                            {movie.titile}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopPicks;