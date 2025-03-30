import '../Styling/Experience.css';
import { useState, useEffect } from 'react';
import experience from '../assets/experience.json'

function Experience({ modalOpen }) {

  const [workExp, setWorkExp] = useState([]);
  const [otherExp, setOtherExp] = useState([]);

  useEffect(() => {
    setWorkExp(experience.workExp);
    setOtherExp(experience.otherExp);
  }, []);

  function handleModalOpen(e) {
    modalOpen(workExp[e.target.id - 1]);
  }

  return (
    <div className="experience">
      <div className="experiences work-experience">
        {/* buttons in here that open modal, on click grab {} from array useing id-1, send that to app to send to modal */}
        {workExp.map((work) =>
          <button id={work.id} key={work.id} className='exp-buttons' onClick={handleModalOpen}>{work.id}</button>
          // put div in button that takes up whole space and displays stuff
        )}
      </div>
      <div className="experiences other-experience">
        {otherExp.map((other) =>
          <button id={other.id} key={other.id} className='exp-buttons' onClick={handleModalOpen}>{other.id}</button>
        )}
      </div>
    </div>
  );
}

export default Experience;