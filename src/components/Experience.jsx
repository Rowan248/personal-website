import '../Styling/Experience.css';
import { useState, useEffect } from 'react';
import experience from '../assets/mydata/experience.json'

function Experience({ modalOpen }) {

  const [workExp, setWorkExp] = useState([]);
  const [otherExp, setOtherExp] = useState([]);

  useEffect(() => {
    setWorkExp(experience.workExp);
    setOtherExp(experience.otherExp);
  }, []);

  function handleWorkModalOpen(e) {
    modalOpen(workExp[e.target.id - 1]);
  }

  function handleOtherModalOpen(e) {
    modalOpen(otherExp[e.target.id - 1]);
  }

  return (
    <div className="experience">
      <div className="experiences work-experience">
        {workExp.map((work) =>
          <button id={work.id} key={work.id} className='exp-buttons' onClick={handleWorkModalOpen}>{work.title}</button>
          // put div in button that takes up whole space and displays stuff
        )}
      </div>
      <div className="experiences other-experience">
        {otherExp.map((other) =>
          <button id={other.id} key={other.id} className='exp-buttons' onClick={handleOtherModalOpen}>{other.title}</button>
        )}
      </div>
    </div>
  );
}

export default Experience;