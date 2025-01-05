import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';

const FavoritesTable = ({ movies, setMovies }) => {
   const handleDelete = (_id) => {
      Swal.fire({
         title: "Remove this movie from favorite?",
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: "#d33",
         cancelButtonColor: "#72163E",
         confirmButtonText: "Yes, remove it!"
      }).then(result => {
         if (result.isConfirmed) {
            fetch(`https://cine-popcorn-server.vercel.app/favorites/${_id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount) {
                     Swal.fire({
                        title: "Removed!",
                        text: "Movie has been removed from favorites.",
                        icon: "success"
                     });
                     const remainingFav = favorites.filter(singleFav => singleFav._id !== _id);
                     setMovies(remainingFav);
                  }
               })
         }
      })
   }
   return (
      <div className="overflow-x-auto">
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th>
                     #
                  </th>
                  <th>Movie Name</th>
                  <th>Rating</th>
                  <th>Year</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {/* row 1 */}
               {/* const {title, poster, genres, duration, year, rating, _id, email, summary} = movie; */}
               {
                  movies.map((movie, idx) => (<tr key={idx}>
                     <th>
                        {idx + 1}
                     </th>
                     <td>
                        <div className="flex items-center gap-3">
                           <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                 <img
                                    src={movie.poster}
                                    alt="Avatar Tailwind CSS Component" />
                              </div>
                           </div>
                           <div>
                              <div className="font-bold">{movie.title}</div>
                           </div>
                        </div>
                     </td>
                     <td>
                        <Rating initialValue={movie.rating} readonly fillColor="#72163E" size={30} />
                     </td>
                     <td>{movie.year}</td>
                     <th>
                        <button onClick={() => handleDelete(movie._id)} className="btn btn-ghost btn-xs"><FaRegTrashAlt className='text-2xl text-primary' /></button>
                     </th>
                  </tr>))
               }
            </tbody>
         </table>
      </div>
   );
};

export default FavoritesTable;