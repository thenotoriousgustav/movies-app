import Movie from "./Components/Movie";
import Filter from "./Components/Filter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=bb08938d0db2437a7b938e235324d630&language=en-US&page=1"
    );
    const movies = await data.json();

    setPopular(movies.results);

    setFiltered(movies.results);
  };

  return (
    <div className='w-3/4 container mx-auto my-16'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div
        layout
        className='grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;
