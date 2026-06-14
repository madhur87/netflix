import { IMAGE_CDN_URL } from "../utils/constain";

const MovieCard = ({poster_path}) => {
    return(
        <div className="w-48">
            <img
                src={IMAGE_CDN_URL + poster_path}
                alt="MovieCard"
                className="rounded-md object-cover"
                loading="lazy"
                decoding="async"
            />
        </div>
    )

}

export default MovieCard;