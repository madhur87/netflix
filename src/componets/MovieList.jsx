import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 py-2">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path}   />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
