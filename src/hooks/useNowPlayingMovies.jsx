import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constain";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlayingNowMovie = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTION,
      );
      const json = await res.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    getPlayingNowMovie();
  }, [dispatch]);
};

export default useNowPlayingMovies;
