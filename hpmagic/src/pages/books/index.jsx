import { useEffect, useState } from 'react';
import { BOOKS_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';

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
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books</p>;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link
              to={`/books/${book.id}`}
              state={{ title: book.attributes.title }}
            >
              {book.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
