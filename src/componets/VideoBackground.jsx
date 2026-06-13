import { useSelector } from "react-redux";
import useTrailerBackground from "../hooks/useTrailerBackground";
const VideoBackground = (props) => {
  useTrailerBackground(props.movie_id);
  const getTrailer = useSelector((store) => store.movies?.trailer);

  return (
    <div>
      <iframe
        className="w-screen aspect-video shadow-lg "
        src={`https://www.youtube.com/embed/${getTrailer}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
