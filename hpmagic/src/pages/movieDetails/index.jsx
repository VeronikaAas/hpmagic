import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MOVIES_URL } from '../../utils/constants';
import styles from './movieDetails.module.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const movieRes = await fetch(`${MOVIES_URL}${id}`);
        const movieData = await movieRes.json();
        setMovie(movieData.data);
      } catch (error) {
        console.error('Error fetching:', error);
        setError(
          error.message || 'Something went wrong while fetching movie details.',
        );
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading information about the movie...</p>;
  if (!movie) return <p>Didn't find movie.</p>;

  const attributes = movie.attributes;

  return (
    <div className="movies-container">
      <div className={styles.movieDetails}>
        <h1>{attributes.title}</h1>

        <p>
          <strong>Release date:</strong> {attributes.release_date || 'Unknown'}
        </p>

        <p>
          <strong>Running time:</strong> {attributes.running_time || 'Unknown'}
        </p>

        <p>
          <strong>Rating:</strong> {attributes.rating || 'Unknown'}
        </p>

        <p>
          <strong>Budget:</strong> {attributes.budget || 'Unknown'}
        </p>

        <p>
          <strong>Screenwriters:</strong>{' '}
          {attributes.screenwriters?.join(', ') || 'Unknown'}
        </p>

        <p>
          <strong>Producers:</strong>{' '}
          {attributes.producers?.join(', ') || 'Unknown'}
        </p>

        <p>
          <strong>Description:</strong>{' '}
          {attributes.summary || 'No description available.'}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
