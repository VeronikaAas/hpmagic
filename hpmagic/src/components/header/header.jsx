import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import {
  FaBook,
  FaBolt,
  FaFlask,
  FaFilm,
  FaUser,
  FaHome,
} from 'react-icons/fa';

const links = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/books', label: 'Books', icon: <FaBook /> },
  { to: '/movies', label: 'Movies', icon: <FaFilm /> },
  { to: '/characters', label: 'Characters', icon: <FaUser /> },
  { to: '/spells', label: 'Spells', icon: <FaBolt /> },
  { to: '/potions', label: 'Potions', icon: <FaFlask /> },
];

function Header() {
  return (
    <nav className={styles.navbar}>
      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          {({ isActive }) => (
            <>
              {isActive && <span className={styles.icon}>{icon}</span>}
              <span className={styles.text}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;
