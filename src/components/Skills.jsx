import '../Styling/Skills.css';
import { useState, useEffect } from 'react';
import skills from '../assets/mydata/skills.json';

function Skills({ skillBools, handleSkills }) {

  const [langs, setLangs] = useState([]);
  const [tools, setTools] = useState([]);
  const [management, setManagement] = useState([]);
  const [skillBoolsArray, setSkillBoolsArray] = useState(skillBools);

  useEffect(() => {
    setLangs(skills.languages);
    setTools(skills.tools);
    setManagement(skills.management);
  }, []);

  function handleButtonClick(button) {

    const newBoolArray = [...skillBoolsArray];
    newBoolArray[button.target.id - 1] = !skillBoolsArray[button.target.id - 1];
    setSkillBoolsArray(newBoolArray);
    handleSkills(newBoolArray);
  }

  return (
    <div className="skills-container">
      <div className='one-skill lang-container'>
        <button id={1} className='skills-button langsButton' onClick={handleButtonClick}>Programming Languages</button>
        {skillBoolsArray[0] && <div className='skill-block langs'>
          {langs.map((lang) =>
            <div key={lang} className='skill-holder lang-holders'>{lang}</div>
          )}
        </div>}
      </div>
      <div className='one-skill tools-container'>
        <button id={2} className='skills-button toolsButton' onClick={handleButtonClick}>Tools and Technologies</button>
        {skillBoolsArray[1] && <div className='skill-block tools'>
          {tools.map((tool) =>
            <div key={tool} className='skill-holder tool-holders'>{tool}</div>
          )}
        </div>}
      </div>
      <div className='one-skill management-container'>
        <button id={3} className='skills-button managmentButton' onClick={handleButtonClick}> Project Management</button>
        {skillBoolsArray[2] && <div className='skill-block management'>
          {management.map((manage) =>
            <div key={manage} className='skill-holder management-holders'>{manage}</div>
          )}
        </div>}
      </div>
    </div>
  );
}

export default Skills;