import './Styling/App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Modal from './components/Modal';

function App() {

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({})
  const [currentImage, setCurrentImage] = useState(1);
  const [skillsArray, setSkillsArray] = useState([false, false, false]);
  const [expArray, setExpArray] = useState([false, false]);

  function openModal(data) {
    setModalData(data);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function handleChangeImage(number) {
    setCurrentImage(number);
  }

  function handleSkillsChange(array) {
    setSkillsArray(array);
  }

  function handleExpChange(array) {
    setExpArray(array);
  }

  return (
    <div className='app-container'>
      <HashRouter>
        <NavBar></NavBar>
        {modal && <Modal className="app-modal" modalClose={closeModal} displayData={modalData}></Modal>}
        <Routes>
          <Route path="/" element={<Home currentImg={currentImage} handleChangeImg={handleChangeImage}></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/skills" element={<Skills skillBools={skillsArray} handleSkills={handleSkillsChange}></Skills>} />
          <Route path="/experience" element={<Experience expBools={expArray} handleExp={handleExpChange} modalOpen={openModal}></Experience>} />
          <Route path="/projects" element={<Projects modalOpen={openModal}></Projects>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;