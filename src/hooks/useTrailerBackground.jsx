import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constain";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerBackground = (movie_id) => {
  const dispatch = useDispatch();

  const fetchMovieVideoShort = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      API_OPTION,
    );
    const json = await res.json();

    const filterTrailer = json.results.filter((res) => res.type === "Trailer");
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    dispatch(addTrailer(trailer?.key));
  };

  useEffect(() => {
    fetchMovieVideoShort();
  }, []);
};

export default useTrailerBackground;
