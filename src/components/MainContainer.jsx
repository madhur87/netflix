import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const isMovies = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!isMovies.length) return;
  const mainMovie = isMovies[0];

  const {id, title, overview} = mainMovie

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movie_id = {id}/>
    </div>
  );
};

export default MainContainer;
