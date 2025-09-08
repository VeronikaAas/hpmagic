import { Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/layout';
import Home from './pages/home';
import Books from './pages/books';
import Movies from './pages/movies';
import Characters from './pages/characters';
import Spells from './pages/spells';
import Potions from './pages/potions';

function App() {
  return (
    <Routes>
      {/* Wrapper layout */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes under layout */}
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="movies" element={<Movies />} />
        <Route path="characters" element={<Characters />} />
        <Route path="spells" element={<Spells />} />
        <Route path="potions" element={<Potions />} />
      </Route>
    </Routes>
  );
}

export default App;
