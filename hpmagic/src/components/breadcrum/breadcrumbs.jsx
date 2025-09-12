import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

//Koden definerer en React-komponent som genererer en navigasjonssti (breadcrumbs) basert på gjeldende URL.
// Den bruker useLocation fra react-router-dom for å hente stien, splitter denne, og bygger lenker tilbake til hver del av stien.
// Komponentens styling håndteres via en ekstern CSS-modul. Dersom brukeren befinner seg på rotstien ("/"), returneres ingenting.

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
            {' < '}
            <Link to={routeTo}>{decodeURIComponent(name)}</Link>
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
