import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constain";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTION
    );
    const json = await res.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
