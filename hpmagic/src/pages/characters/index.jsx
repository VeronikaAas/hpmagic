import { useEffect, useState } from 'react';
import { CHARACTERS_URL } from '../../utils/constants';
import Card from '../../components/card/elementCard';
import CharacterModal from '../../components/characterModal/characterModal';

const HOUSES = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      try {
        const queryParts = [];

        if (selectedHouse) {
          queryParts.push(`filter[house_eq]=${selectedHouse}`);
        }

        if (searchTerm.trim()) {
          queryParts.push(
            `filter[name_cont]=${encodeURIComponent(searchTerm.trim())}`,
          );
        }

        const query = queryParts.length ? '?' + queryParts.join('&') : '';
        const url = `${CHARACTERS_URL}${query}`;

        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.data);
      } catch (err) {
        console.error('Error fetching characters:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [selectedHouse, searchTerm]);

  return (
    <div className="characters-container">
      <h1>Characters</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedHouse}
        onChange={e => setSelectedHouse(e.target.value)}
      >
        <option value="">Show everyone</option>
        {HOUSES.map(house => (
          <option key={house} value={house}>
            {house}
          </option>
        ))}
      </select>

      {loading && <p>Loading characters...</p>}

      {!loading && characters.length === 0 && <p>No characters found.</p>}

      <div className="card-grid">
        {characters.map(char => (
          <Card
            key={char.id}
            title={char.attributes.name}
            onClick={() => setSelectedCharacterId(char.id)}
          />
        ))}
      </div>

      {selectedCharacterId && (
        <CharacterModal
          characterId={selectedCharacterId}
          onClose={() => setSelectedCharacterId(null)}
        />
      )}
    </div>
  );
}

export default Characters;
