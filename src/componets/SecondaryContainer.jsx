import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!moviesList.length) return;

  // return (
  //   <div className="bg-black px-6 py-4">
  //     <h2 className="text-white text-xl font-bold mb-3">Now Playing</h2>

  //     <div className="flex gap-3 overflow-x-auto hide-scrollbar">
  //       {moviesList?.map((movie) => (
  //         <div
  //           key={movie.id}
  //           className="min-w-30 hover:scale-105 transition duration-300"
  //         >
  //           <img
  //             src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
  //             alt={movie.title}
  //             className="w-30 h-45 rounded-md object-cover"
  //           />

  //           <p className="text-white text-xs mt-2 truncate">{movie.title}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-10 pl-12">
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Now Playing" movies={moviesList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
