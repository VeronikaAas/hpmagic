import { useEffect, useState } from 'react';
import { MOVIES_URL } from '../../utils/constants';
import Card from '../../components/card/elementCard';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      <div className="card-grid">
        {movies.map(movie => (
          <Card
            key={movie.id}
            title={movie.attributes.title}
            to={`/movies/${movie.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
