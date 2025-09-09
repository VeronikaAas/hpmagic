import { Link } from 'react-router-dom';

function Card({ title, to, onClick }) {
  const content = (
    <div className="card" onClick={onClick}>
      <h2 className="card-title">{title}</h2>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

export default Card;
