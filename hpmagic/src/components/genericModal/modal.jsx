// Generic Modal komponent for visning av innhold i en modal overlay.
// Tar inn onClose funksjon og children som props.

function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
