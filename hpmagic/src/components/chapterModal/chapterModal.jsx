import { useEffect, useState } from 'react';
import { BOOKS_URL } from '../../utils/constants';
import Modal from '../genericModal/modal';

// Modal-komponent som henter og viser informasjon om et kapittel i en bok basert på bookId og chapterId.
// Bruker useEffect for å hente data når komponenten monteres eller når bookId/chapterId endres.
// Håndterer lastetilstand og feil under henting av data, og viser relevant informasjon i modalen.

function ChapterModal({ bookId, chapterId, onClose }) {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchChapter() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${BOOKS_URL}${bookId}/chapters/${chapterId}`,
        );
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }

        const data = await response.json();
        if (!data?.data) {
          throw new Error('No chapter data found.');
        }

        setChapter(data.data);
      } catch (err) {
        console.error('Failed to fetch chapter:', err);
        setError(
          err.message || 'Could not load the chapter. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    }

    fetchChapter();
  }, [bookId, chapterId]);

  const a = chapter?.attributes;

  return (
    <Modal onClose={onClose}>
      {loading && <p>Loading chapter...</p>}

      {error && <p className="modal-error">{error}</p>}

      {!loading && !error && chapter && (
        <div>
          <h2>{a.title || `Chapter ${a.chapter}`}</h2>
          <p>{a.summary || 'No summary available.'}</p>
        </div>
      )}
    </Modal>
  );
}

export default ChapterModal;
