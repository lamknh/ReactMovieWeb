import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import styles from "./MovieDetail.module.css";

function MovieDetail({id, coverImg, title, rating, genres}){
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{rating}</p>
            <ul className={styles.movie__genres}>
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