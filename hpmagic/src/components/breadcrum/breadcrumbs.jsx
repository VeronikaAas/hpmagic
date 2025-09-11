import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">Home</Link>
      {pathnames.slice(0, -1).map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        return (
          <span key={index}>
            {' / '}
            <Link to={routeTo}>{decodeURIComponent(name)}</Link>
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
