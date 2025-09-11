import { useEffect, useState } from 'react';
import Modal from '../genericModal/modal';
import { CHARACTERS_URL } from '../../utils/constants';

function CharacterModal({ characterId, onClose }) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${CHARACTERS_URL}${characterId}`);
        const data = await res.json();

        if (!data?.data) throw new Error('No character data');
        setCharacter(data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load character.');
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [characterId]);

  const renderField = (label, value) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;

    return (
      <li key={label}>
        <strong>{label}:</strong>{' '}
        {Array.isArray(value) ? value.join(', ') : value}
      </li>
    );
  };

  return (
    <Modal onClose={onClose}>
      {loading && <p>Loading character...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && character && (
        <div>
          <h2>{character.attributes.name}</h2>
          <ul>
            {renderField('Alias names', character.attributes.alias_names)}
            {renderField('Animagus', character.attributes.animagus)}
            {renderField('Born', character.attributes.born)}
            {renderField('Died', character.attributes.died)}
            {renderField('Gender', character.attributes.gender)}
            {renderField('Nationality', character.attributes.nationality)}
            {renderField('Species', character.attributes.species)}
            {renderField('House', character.attributes.house)}
            {renderField('Eye color', character.attributes.eye_color)}
            {renderField('Hair color', character.attributes.hair_color)}
            {renderField('Skin color', character.attributes.skin_color)}
            {renderField('Jobs', character.attributes.jobs)}
            {renderField('Titles', character.attributes.titles)}
            {renderField('Wand', character.attributes.wand)}
          </ul>

          {character.attributes.image && (
            <img
              className="modal-image"
              src={character.attributes.image}
              alt={character.attributes.name}
            />
          )}
        </div>
      )}
    </Modal>
  );
}

export default CharacterModal;
