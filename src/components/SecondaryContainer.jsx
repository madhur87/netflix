import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { nowPlayingMovie, nowPopularMovie, nowTopRatedMovie, upcomingMovie } =
    useSelector((store) => store.movies);

  if (
    !nowPlayingMovie.length ||
    !nowPopularMovie.length ||
    !nowTopRatedMovie.length ||
    !upcomingMovie.length
  )
    return;

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-10 pl-5 pr-5">
        <MovieList title="Now Playing" movies={nowPlayingMovie} />
        <MovieList title="Top Rated" movies={nowTopRatedMovie} />
        <MovieList title="Popular" movies={nowPopularMovie} />
        <MovieList title="Upcoming" movies={upcomingMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
