import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BOOKS_URL } from '../../utils/constants';
import ChapterModal from '../../components/chapterModal/chapterModal';
import Card from '../../components/card/elementCard';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  useEffect(() => {
    async function fetchBookAndChapters() {
      try {
        setLoading(true);

        const bookRes = await fetch(`${BOOKS_URL}${id}`);
        const bookData = await bookRes.json();
        setBook(bookData.data);

        const chaptersRes = await fetch(`${BOOKS_URL}${id}/chapters`);
        const chaptersData = await chaptersRes.json();
        setChapters(chaptersData.data);
      } catch (error) {
        console.error('Error fetching:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBookAndChapters();
  }, [id]);

  if (loading) return <p>Loading information about the book</p>;
  if (!book) return <p>Didn't find book.</p>;

  const attributes = book.attributes;

  return (
    <div className="books-container">
      <h1>{attributes.title}</h1>

      <p>
        <strong>Release date:</strong> {attributes.release_date}
      </p>
      <p>
        <strong>Author:</strong> {attributes.author || 'Unknown'}
      </p>
      <p>
        <strong>Description:</strong>{' '}
        {attributes.summary || 'No description available.'}
      </p>
      <h2>Chapters</h2>

      {chapters.length === 0 ? (
        <p>No chapters found...</p>
      ) : (
        <div className="card-grid">
          {chapters.map(chapter => (
            <Card
              key={chapter.id}
              title={
                chapter.attributes.title ||
                `Chapter ${chapter.attributes.chapter}`
              }
              onClick={() => setSelectedChapterId(chapter.id)}
            />
          ))}
        </div>
      )}

      {selectedChapterId && (
        <ChapterModal
          bookId={id}
          chapterId={selectedChapterId}
          onClose={() => setSelectedChapterId(null)}
        />
      )}
    </div>
  );
}

export default BookDetails;
