// src/pages/potions/Potions.js
import { useEffect, useState } from 'react';
import { POTIONS_URL } from '../../utils/constants';
import Card from '../../components/card/elementCard';
import PotionModal from '../../components/potionModal/potionModal';

function Potions() {
  const [potions, setPotions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchEffect, setSearchEffect] = useState('');
  const [searchSideEffect, setSearchSideEffect] = useState('');
  const [selectedPotionId, setSelectedPotionId] = useState(null);

  useEffect(() => {
    async function fetchPotions() {
      setLoading(true);
      try {
        const queryParts = [];

        if (searchName.trim()) {
          queryParts.push(
            `filter[name_cont]=${encodeURIComponent(searchName.trim())}`,
          );
        }
        if (searchEffect.trim()) {
          queryParts.push(
            `filter[effect_cont]=${encodeURIComponent(searchEffect.trim())}`,
          );
        }
        if (searchSideEffect.trim()) {
          queryParts.push(
            `filter[side_effects_cont]=${encodeURIComponent(searchSideEffect.trim())}`,
          );
        }

        const query = queryParts.length ? `?${queryParts.join('&')}` : '';
        const res = await fetch(`${POTIONS_URL}${query}`);
        const data = await res.json();
        setPotions(data.data);
      } catch (err) {
        console.error('Error fetching potions:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPotions();
  }, [searchName, searchEffect, searchSideEffect]);

  return (
    <div className="potions-container">
      <h1>Potions</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchName}
        onChange={e => setSearchName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Search by effect..."
        value={searchEffect}
        onChange={e => setSearchEffect(e.target.value)}
      />

      <input
        type="text"
        placeholder="Search by side effect..."
        value={searchSideEffect}
        onChange={e => setSearchSideEffect(e.target.value)}
      />

      {loading && <p>Loading potions...</p>}
      {!loading && potions.length === 0 && <p>No potions found.</p>}

      <div className="card-grid">
        {potions.map(potion => (
          <Card
            key={potion.id}
            title={potion.attributes.name}
            onClick={() => setSelectedPotionId(potion.id)}
          />
        ))}
      </div>

      {selectedPotionId && (
        <PotionModal
          potionId={selectedPotionId}
          onClose={() => setSelectedPotionId(null)}
        />
      )}
    </div>
  );
}

export default Potions;
