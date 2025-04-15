import '../Styling/Experience.css';
import { useState, useEffect } from 'react';
import experience from '../assets/mydata/experience.json';

function Experience({ expBools, handleExp, modalOpen }) {

  const [workExp, setWorkExp] = useState([]);
  const [otherExp, setOtherExp] = useState([]);
  const [expBoolsArray, setExpBoolsArray] = useState(expBools);

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

  function handleButtonClick(button) {

    const newBoolArray = [...expBoolsArray];
    newBoolArray[button.target.id - 1] = !expBoolsArray[button.target.id - 1];
    setExpBoolsArray(newBoolArray);
    handleExp(newBoolArray);
  }

  return (
    <div className="experience">
      <div className="experiences work-experience">
        <button id={1} className='exp-opener work-opener' onClick={handleButtonClick}>Work Experience</button>
        {expBoolsArray[0] && <div className='exp-block work-block'>
          {workExp.map((work) =>
            <button id={work.id} key={work.id} className='exp-buttons' onClick={handleWorkModalOpen}>{work.title}</button>
          )}
        </div>}
      </div>
      <div className="experiences other-experience">
        <button id={2} className='exp-opener other-opener' onClick={handleButtonClick}>Other Experience</button>
        {expBoolsArray[1] && <div className='exp-block work-block'>
          {otherExp.map((other) =>
            <button id={other.id} key={other.id} className='exp-buttons' onClick={handleOtherModalOpen}>{other.title}</button>
          )}
        </div>}
        {/* fix css here big time */}
      </div>
    </div>
  );
}

export default Experience;