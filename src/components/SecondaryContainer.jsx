import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movies?.nowPopularMovie);
  const topRatedMovies = useSelector((store) => store.movies?.nowTopRatedMovie);
  const upcomingMovies = useSelector((store)=> store.movies?.upcomingMovie);

  if (!moviesList.length || !popularMovies.length || !topRatedMovies.length || !upcomingMovies.length)
    return;

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-10 pl-5 pr-5">
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
