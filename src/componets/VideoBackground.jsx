import { useSelector } from "react-redux";
import useTrailerBackground from "../hooks/useTrailerBackground";
const VideoBackground = (props) => {
  useTrailerBackground(props.movie_id);
  const getTrailer = useSelector((store) => store.movies?.trailer);

  if (!getTrailer) {
  return <div>Loading trailer...</div>;
}

  return (
    <div>
      <iframe
        className="w-screen aspect-video shadow-lg"
        src={`https://www.youtube.com/embed/${getTrailer}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
