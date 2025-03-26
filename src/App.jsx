import './Styling/App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from './components/Experience';
import Skills from './components/Skills';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Modal from './components/Modal';

function App() {

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className='app-container'>
      <BrowserRouter>
        <NavBar></NavBar>
        {modal && <Modal className="app-modal" modalClose={closeModal}></Modal>}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/skills" element={<Skills></Skills>} />
          <Route path="/experience" element={<Experience modalOpen={openModal}></Experience>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;