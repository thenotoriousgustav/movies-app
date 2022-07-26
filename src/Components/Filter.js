import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);

  return (
    <div className='flex'>
      <button
        onClick={() => setActiveGenre(0)}
        className={
          activeGenre === 0
            ? "px-4 py-1 border-2 border-indigo-200 text-slate-100 bg-indigo-500 rounded-2xl mb-2 mr-3"
            : "px-4 py-1 border-2 border-indigo-200 rounded-2xl mb-2 mr-3"
        }
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={
          activeGenre === 28
            ? "px-4 py-1 border-2 border-indigo-200 text-slate-100 bg-indigo-500 rounded-2xl mb-2 mr-3"
            : "px-4 py-1 border-2 border-indigo-200 rounded-2xl mb-2 mr-3"
        }
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(12)}
        className={
          activeGenre === 12
            ? "px-4 py-1 border-2 border-indigo-200 text-slate-100 bg-indigo-500 rounded-2xl mb-2 mr-3"
            : "px-4 py-1 border-2 border-indigo-200 rounded-2xl mb-2 mr-3"
        }
      >
        Adventure
      </button>
    </div>
  );
}

export default Filter;
