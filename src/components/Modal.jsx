import '../Styling/Modal.css';

// modal is going to be in app?
// send up data showing in it, used in exp and elsewhere

function Modal({ modalClose }) {

  function handleCloseClick() {
    modalClose();
  }

  return (
    <div className="modal">
      <button onClick={handleCloseClick}>CLOSE</button>
      MODAL
    </div>
  );
}

export default Modal;