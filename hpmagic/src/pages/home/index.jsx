import '../../index.css';
import '../../components/header/header.jsx';

function Home() {
  return (
    <div className="home-container">
      <img
        src="/Owl.png"
        alt="An illustration of an owl resembling Hedvig from Harry Potter"
        className="hedvig"
        loading="lazy"
      />
      <h1>A magical world awaits</h1>
      <h2>Step into Harry Potter's story</h2>
    </div>
  );
}

export default Home;
