// pages/movie/[id].js
import { fetchMovieDetails } from '../../utils/tmdb';
import Image from 'next/image';

export async function getServerSideProps({ params }) {
  const movie = await fetchMovieDetails(params.id);


  return {
    props: { movie },
  };
  ;
}

function MovieDetail({ movie }) {
    console.log(movie)
  return (
    <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          width="200"
          height="300"
        />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
