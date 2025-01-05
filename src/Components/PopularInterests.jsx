import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";

const PopularInterests = () => {
   const interests = [
      { id: 1, title: "Comedy", image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTkzNjY1OTg5Mjc4MjQ2MzM5/what-is-a-comedy-detailed-analysis-explanation.png" },
      { id: 2, title: "Thriller", image: "https://www.tomasgildev.com/postImages/how-to-use-vue-suspense-the-smart-way/layout.jpg" },
      { id: 3, title: "History", image: "https://static.vecteezy.com/system/resources/thumbnails/002/236/242/small_2x/history-minimal-thin-line-icons-set-vector.jpg" },
      { id: 4, title: "Romance", image: "https://hips.hearstapps.com/hmg-prod/images/romantic-movies-index-1644368837.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" },
      { id: 5, title: "Action", image: "https://hips.hearstapps.com/hmg-prod/images/action-movies-1-1591802654.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" },
      { id: 6, title: "Sci-Fi", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8466f4d7-b3bb-430b-96ef-34bf3c5521ea_716x716.jpeg" },
      { id: 7, title: "Fantasy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9tTSJeKrRICmY8dBobismO3C2crIwkYgQQ&s" },
      { id: 8, title: "Mystery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsL_xI-LKao67SzQhS3KUOValubybAr9oXA&s" },
      { id: 9, title: "Drama", image: "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/19bob_dramaschools-MAIN-SPLASH-2024.jpg?w=2000&h=1126&crop=1" },
      { id: 10, title: "Horror", image: "https://static01.nyt.com/images/2017/10/29/arts/29HORROR-BOXOFFICE1/29HORROR-BOXOFFICE1-superJumbo.jpg" },
   ];

   return (
      <div className="w-11/12 mx-auto mt-10">
         <div className='space-y-3 mb-5'>
            <h2 className='text-4xl text-center font-bold'>Popular Interests</h2>
            <p className='text-center'>You will find every interests of our viewer here</p>
         </div>
         <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
               240: {slidesPerView: 1},
               640: { slidesPerView: 2 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
               1220: { slidesPerView: 7 },
            }}
            className="mySwiper"
         >
            {interests.map((interest) => (
               <SwiperSlide key={interest.id}>
                  <div className="card bg-secondary text-white shadow-lg rounded-lg p-4">
                     <img
                        src={interest.image}
                        alt={interest.title}
                        className="rounded-lg mb-2 w-[300px] h-[150px]"
                     />
                     <h3 className="text-lg font-semibold">{interest.title}</h3>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         
      </div>
   );
};

export default PopularInterests;
