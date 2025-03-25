import './Styling/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from './components/Experience';
import Skills from './components/Skills';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;