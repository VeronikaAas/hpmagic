import { useEffect, useState } from 'react';
import { MOVIES_URL } from '../../utils/constants';
import Card from '../../components/card/elementCard';

// Sidekomponent for å vise en liste over filmer.
// Henter data fra MOVIES_URL ved hjelp av useEffect når komponenten monteres.
// Håndterer lastetilstand og feil under henting av data, og viser relevant informasjon.

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Movies - HP Magic';
    fetch(MOVIES_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch movies:', error);
        setError(
          error.message || 'Something went wrong while fetching movies.',
        );
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
