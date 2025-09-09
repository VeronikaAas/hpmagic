import { Link } from 'react-router-dom';

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
