import { fetchAllMovies } from '../utils/tmdb'; // You may need to create a new function for fetching all movies

export async function getStaticProps() {
  const movies = await fetchAllMovies(); // Modify the function to fetch all movies
  return {
    props: { movies },
  };
}

function Home({ movies }) {
  return (
    <div>
      <h1>All Movies</h1>
      <ul
        style={{
          listStyleType: 'none',

          width: '100%'        // Ensure the full width of the container
        }}
      >
        {movies.map((movie) => (
          <li
            key={movie.id}
            style={{
              flex: '0 0 auto',   // Don't allow flex items to grow or shrink
              marginRight: '10px' // Add spacing between movies
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              width="200"
              height="300"
            />
            <a href={`/movie/${movie.id}`}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;