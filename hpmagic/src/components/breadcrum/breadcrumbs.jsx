import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const state = location.state;

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;

        // Bruk "title" hvis den finnes i location.state (fra f.eks. Books -> BookDetails)
        const displayName =
          isLast && state?.title ? state.title : decodeURIComponent(name);

        return isLast ? (
          <span key={index}> / {displayName}</span>
        ) : (
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
