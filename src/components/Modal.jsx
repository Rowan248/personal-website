import '../Styling/Modal.css';
import { useState, useEffect } from 'react';

function Modal({ modalClose, displayData }) {

  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setModalData(displayData);
  }, [displayData]);

  function handleCloseClick() {
    modalClose();
  }

  return (
    <div className='overlay'>
      <div className="modal">
        <div className='modal-content'>
          <button className='close-button' onClick={handleCloseClick}>X</button>
          <h2>{modalData.title}</h2>
          <h4>{modalData.type}</h4>
        </div>
      </div>
    </div>
  );
}

export default Modal;