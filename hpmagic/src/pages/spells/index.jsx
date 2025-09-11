import { useEffect, useState } from 'react';
import { SPELLS_URL } from '../../utils/constants';
import Card from '../../components/card/elementCard';
import SpellModal from '../../components/spellModal/spellModal';
import styles from './spells.module.css';

function Spells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchEffect, setSearchEffect] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSpellId, setSelectedSpellId] = useState(null);

  const CATEGORIES = ['Charm', 'Curse', 'Hex', 'Jinx', 'Spell', 'Conjuration'];

  useEffect(() => {
    async function fetchSpells() {
      setLoading(true);
      try {
        const queryParts = [];

        if (searchTerm.trim()) {
          queryParts.push(
            `filter[name_cont]=${encodeURIComponent(searchTerm.trim())}`,
          );
        }

        if (searchEffect.trim()) {
          queryParts.push(
            `filter[effect_cont]=${encodeURIComponent(searchEffect.trim())}`,
          );
        }

        if (selectedCategory) {
          queryParts.push(`filter[category_eq]=${selectedCategory}`);
        }

        const query = queryParts.length ? `?${queryParts.join('&')}` : '';
        const res = await fetch(`${SPELLS_URL}${query}`);
        const data = await res.json();
        setSpells(data.data);
      } catch (err) {
        console.error('Error fetching spells:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSpells();
  }, [searchTerm, searchEffect, selectedCategory]);

  return (
    <div className={styles.spellsContainer}>
      <h1>Spells</h1>

      <input
        type="text"
        className="searchInput"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <input
        type="text"
        className="searchInput"
        placeholder="Search by effect..."
        value={searchEffect}
        onChange={e => setSearchEffect(e.target.value)}
      />

      <select
        className={styles.categorySelect}
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="">All categories</option>
        {CATEGORIES.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {loading && <p>Loading spells...</p>}
      {!loading && spells.length === 0 && <p>No spells found.</p>}

      <div className="card-grid">
        {spells.map(spell => (
          <Card
            key={spell.id}
            title={spell.attributes.name}
            onClick={() => setSelectedSpellId(spell.id)}
          />
        ))}
      </div>

      {selectedSpellId && (
        <SpellModal
          spellId={selectedSpellId}
          onClose={() => setSelectedSpellId(null)}
        />
      )}
    </div>
  );
}

export default Spells;
