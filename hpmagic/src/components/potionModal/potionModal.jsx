import { useEffect, useState } from 'react';
import { POTIONS_URL } from '../../utils/constants';
import Modal from '../genericModal/modal';

// Modal-komponent som henter og viser informasjon om en potions basert på potionId.
// Bruker useEffect for å hente data når komponenten monteres eller når potionId endres.
// Håndterer lastetilstand og feil under henting av data, og viser relevant informasjon i modalen.

function PotionModal({ potionId, onClose }) {
  const [potion, setPotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPotion() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${POTIONS_URL}${potionId}`);
        if (!response.ok) throw new Error('Failed to fetch potion');
        const data = await response.json();
        setPotion(data.data);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Could not load potion details.');
      } finally {
        setLoading(false);
      }
    }

    fetchPotion();
  }, [potionId]);

  const a = potion?.attributes;

  return (
    <Modal onClose={onClose}>
      {loading && <p>Loading potion...</p>}
      {error && <p className="modal-error">{error}</p>}

      {!loading && !error && potion && (
        <div>
          <h2>{a.name || 'Unknown'}</h2>

          <p>
            <strong>Effect:</strong> {a.effect || 'Unknown'}
          </p>
          <p>
            <strong>Side Effects:</strong> {a.side_effects || 'Unknown'}
          </p>
          <p>
            <strong>Characteristics:</strong> {a.characteristics || 'Unknown'}
          </p>
          <p>
            <strong>Ingredients:</strong> {a.ingredients || 'Unknown'}
          </p>
          <p>
            <strong>Difficulty:</strong> {a.difficulty || 'Unknown'}
          </p>
          <p>
            <strong>Time:</strong> {a.time || 'Unknown'}
          </p>
          <p>
            <strong>Inventors:</strong> {a.inventors || 'Unknown'}
          </p>
          <p>
            <strong>Manufacturers:</strong> {a.manufacturers || 'Unknown'}
          </p>
        </div>
      )}
    </Modal>
  );
}

export default PotionModal;
