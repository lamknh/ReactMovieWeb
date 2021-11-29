import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function MovieDetail({id, coverImg, title, rating, genres}){
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{rating}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieDetail;