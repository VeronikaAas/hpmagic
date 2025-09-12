import { Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/layout';
import Home from './pages/home';
import Books from './pages/books';
import BookDetails from './pages/bookDetails';
import Movies from './pages/movies';
import MoviesDetails from './pages/movieDetails';
import Characters from './pages/characters';
import Spells from './pages/spells';
import Potions from './pages/potions';

// Hovedapplikasjonskomponent som setter opp ruter ved hjelp av react-router-dom.
// Inkluderer Layout-komponenten som omslutter alle sider, og definerer individuelle ruter for hver sidekomponent.

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />} />
        <Route path="characters" element={<Characters />} />
        <Route path="spells" element={<Spells />} />
        <Route path="potions" element={<Potions />} />
      </Route>
    </Routes>
  );
}

export default App;
