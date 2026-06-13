import { IMAGE_CDN_URL } from "../utils/constain";

const MovieCard = ({poster_path, title}) => {
    return(
        <div className="w-48">
            <img src={IMAGE_CDN_URL+ poster_path} alt="MovieCard" className="rounded-md object-cover"/>
        </div>
    )

}

export default MovieCard;