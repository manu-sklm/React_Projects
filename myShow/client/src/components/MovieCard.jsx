

import {  StarIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import timeFormat from '../../lib/timeFormat'
const MovieCard = ({movie}) => {
  const navigate=useNavigate()
 
  return (
    <div className=' flex flex-col justify-between p-3 w-66 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 '>


      <img onClick={()=>{ navigate(`/movies/${movie._id}`); scrollTo(0,0);} } 
            src={movie.backdrop_path} 
            alt="poster" 
            className='w-full h-52 rounded-lg object-cover object-right-bottom' />

      <p className='font-semibold mt-2 truncate'>{movie.title}</p>

      <p className='text-sm text-gray-400 mt-2 '>{new Date(movie.release_date).getFullYear()} * {movie.genres.slice(0,2).map( genre=>genre.name).join(" | ") } * {timeFormat(movie.runtime)}</p>


      <div className='flex justify-between items-center mt-4 pb-3'>
        <button onClick={()=>{ navigate(`/movies/${movie._id}`); scrollTo(0,0); }} className='bg-primary hover:bg-primary-dull px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer'>Buy Tickets</button>

        <div className='flex gap-1 justify-center items-center text-sm text-gray-400 pt-1 pr-1'> <StarIcon className='size-4 fill-primary text-primary '/> {movie.vote_average.toFixed(1)}</div>     
      </div>
    </div>
  )
}

export default MovieCard