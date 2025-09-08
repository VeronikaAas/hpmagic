import { useEffect, useState } from 'react';
import { BOOKS_URL } from '../../utils/constants';

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
        setError('Could not load the chapter. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchChapter();
  }, [bookId, chapterId]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>

        {loading && <p className="modal-loading">Loading chapter...</p>}

        {error && <p className="modal-error">{error}</p>}

        {!loading && !error && chapter && (
          <>
            <h2 className="modal-title">
              {chapter.attributes.title ||
                `Chapter ${chapter.attributes.chapter}`}
            </h2>
            <p className="modal-summary">
              {chapter.attributes.summary || 'No summary available.'}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ChapterModal;
