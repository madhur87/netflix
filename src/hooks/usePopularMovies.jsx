import { useEffect } from "react";
import { API_OPTION } from "../utils/constain";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovieLists = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTION,
    );
    const json = await res.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovieLists();
  }, []);
};

export default usePopularMovies;
