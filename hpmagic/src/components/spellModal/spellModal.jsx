import { useEffect, useState } from 'react';
import { SPELLS_URL } from '../../utils/constants';
import Modal from '../genericModal/modal';

function SpellModal({ spellId, onClose }) {
  const [spell, setSpell] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSpell() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${SPELLS_URL}${spellId}`);
        if (!response.ok) throw new Error('Failed to fetch spell');
        const data = await response.json();
        setSpell(data.data);
      } catch (err) {
        console.error(err);
        setError('Could not load spell details.');
      } finally {
        setLoading(false);
      }
    }

    fetchSpell();
  }, [spellId]);

  const a = spell?.attributes;

  return (
    <Modal onClose={onClose}>
      {loading && <p>Loading spell...</p>}
      {error && <p className="modal-error">{error}</p>}

      {!loading && !error && spell && (
        <div>
          <h2>{a.name || 'Unknown'}</h2>

          <p>
            <strong>Effect:</strong> {a.effect || 'Unknown'}
          </p>
          <p>
            <strong>Category:</strong> {a.category || 'Unknown'}
          </p>
          <p>
            <strong>Creator:</strong> {a.creator || 'Unknown'}
          </p>
          <p>
            <strong>Hand:</strong> {a.hand || 'Unknown'}
          </p>
          <p>
            <strong>Incantation:</strong> {a.incantation || 'Unknown'}
          </p>
          <p>
            <strong>Light:</strong> {a.light || 'Unknown'}
          </p>
        </div>
      )}
    </Modal>
  );
}

export default SpellModal;
