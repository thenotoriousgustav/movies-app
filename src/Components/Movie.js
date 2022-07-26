import { motion } from "framer-motion";

export default function Movie({ movie }) {
  return (
    <motion.div layout>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt='movie'
        className='w-full h-80 object-cover rounded-2xl'
      ></img>
      <h2 className='text-sm mb-4'>{movie.title}</h2>
    </motion.div>
  );
}
