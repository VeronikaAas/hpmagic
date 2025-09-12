import { Link } from 'react-router-dom';

// Enkel kortkomponent som kan fungere som en lenke eller en klikkbar div basert på props.
// Tar inn title (korttittel), to (valgfri lenke) og onClick (valgfri klikkfunksjon) som props.

function Card({ title, to, onClick }) {
  if (to) {
    return (
      <Link to={to} className="card">
        <h3 className="card-title">{title}</h3>
      </Link>
    );
  }

  return (
    <div className="card" onClick={onClick}>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}
export default Card;
