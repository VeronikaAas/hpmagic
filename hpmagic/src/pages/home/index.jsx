import { useEffect } from 'react';
import '../../index.css';
import '../../components/header/header.jsx';
import './home.css';

// Sidekomponent for hjemmesiden som viser et bilde og tekst.

function Home() {
  useEffect(() => {
    document.title = 'Home | HP Magic';
  }, []);

  return (
    <div className="home-container">
      <div className="image-content">
        <img
          src="/Owl.png"
          alt="An illustration of an owl resembling Hedvig from Harry Potter"
          className="hedvig"
          loading="lazy"
        />
        <div className="text-content">
          <h1>A magical world awaits</h1>
          <h2>Step into Harry Potter's story</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
