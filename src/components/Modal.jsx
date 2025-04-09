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
        <button className='close-button' onClick={handleCloseClick}>X</button>
        <div className='modal-content'>
          {/* <button className='close-button' onClick={handleCloseClick}>X</button> */}
          <h2>{modalData.title}</h2>
          {/* {modalData.image != 0 && <img src={modalData.image}>Test</img>} */}
          <h4>Type of Work: {modalData.type}</h4>
          <h4>Dates: {modalData.startDate} to {modalData.endDate}</h4>
          {/* check if image, wont be any for internship */}
          <p>{modalData.description}</p>
          <a href={modalData.link} target="_blank">{modalData.link}</a>
        </div>
      </div>
    </div>
  );
}

export default Modal;