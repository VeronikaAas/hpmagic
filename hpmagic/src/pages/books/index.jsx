import { useEffect, useState } from 'react';
import { BOOKS_URL } from '../../utils/constants';
import Card from '../../components/card/elementCard';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BOOKS_URL)
      .then(res => res.json())
      .then(data => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch books:', error);
        setError(error.message || 'Something went wrong while fetching books.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;

  return (
    <div className="books-container">
      <h1>Books</h1>
      <div className="card-grid">
        {books.map(book => (
          <Card
            key={book.id}
            title={book.attributes.title}
            to={`/books/${book.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
