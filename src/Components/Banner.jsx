import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaClock } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Banner = ({ moviesData }) => {
    return (
        <div className='w-11/12 mx-auto py-8'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    375: { slidesPerView: 1 }, 
                    640: { slidesPerView: 2 }, 
                    768: { slidesPerView: 3 }, 
                    1024: { slidesPerView: 4 },
                }}
                className='py-4'>
                {
                    moviesData.map((movie, idx) => (
                        <SwiperSlide className='relative' key={idx}>
                            <div className='relative bg-secondary border border-primary shadow-lg rounded-md overflow-hidden'>
                                <img src={movie.poster} alt="" className='w-full h-[400px] object-contain md:object-cover ' />
                                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4'>
                                    <h3 className='text-2xl font-bold'>{movie.title}</h3>
                                    <div className='flex items-center space-x-1 text-lg'>
                                        <AiFillStar className='text-yellow-400 text-2xl' />
                                        <span>{movie.rating} / 5</span>
                                    </div>
                                    <div className='flex items-center space-x-2 text-lg'>
                                        <FaClock />
                                        <span>{movie.duration} mins</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
        </div>
    );
};

export default Banner;