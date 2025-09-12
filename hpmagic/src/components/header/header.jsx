import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import {
  FaBook,
  FaBolt,
  FaFlask,
  FaFilm,
  FaUser,
  FaHome,
  FaBars,
} from 'react-icons/fa';

// Header-komponent med navigasjonslenker og hamburger-meny for mobilvisning.
// Bruker useState for å håndtere menyens åpne/lukke-tilstand.
// NavLink fra react-router-dom brukes for å lage navigasjonslenker med aktiv styling.

const links = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/books', label: 'Books', icon: <FaBook /> },
  { to: '/movies', label: 'Movies', icon: <FaFilm /> },
  { to: '/characters', label: 'Characters', icon: <FaUser /> },
  { to: '/spells', label: 'Spells', icon: <FaBolt /> },
  { to: '/potions', label: 'Potions', icon: <FaFlask /> },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>

      <nav
        className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(false)}
      >
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
    </header>
  );
}

export default Header;
