import { useDispatch } from "react-redux";
import {API_OPTION} from "../utils/constain"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcoming = async() => {
        const res =  await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTION);
        const json = await res.json();
        dispatch(addUpcomingMovies(json?.results));
    }

    useEffect(()=>{
        getUpcoming()
    },[])
}

export default useUpcomingMovies;