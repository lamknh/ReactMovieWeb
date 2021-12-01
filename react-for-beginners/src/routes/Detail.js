import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail.js";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);

  const { id } = useParams();

  const getMovie = async (movieId) => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
  <div className={styles.container}>
    {loading ? (
      <div className={styles.loader}>
        <span>Loading...</span>
      </div>
    ) : (
        <div className={styles.movie}>
            <MovieDetail
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title = {movie.title_long} 
              rating = {movie.rating} 
              genres = {movie.genres}
            />
        </div>
        )}
  </div>
)}
export default Detail;