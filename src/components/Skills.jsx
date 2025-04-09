import '../Styling/Skills.css';
import { useState, useEffect } from 'react';
import skills from '../assets/mydata/skills.json';

function Skills() {

  const [langs, setLangs] = useState([]);
  const [langsBool, setLangsBool] = useState(false);
  const [tools, setTools] = useState([]);
  const [toolsBool, setToolsBool] = useState(false);
  const [management, setManagement] = useState([]);
  const [managmentBool, setManagmentBool] = useState(false);

  useEffect(() => {
    setLangs(skills.languages);
    setTools(skills.tools);
    setManagement(skills.management);
  }, []);

  function handleButtonClick(button) {
    if (button.target.id == 1) {
      setLangsBool(!langsBool);
    }
    else if (button.target.id == 2) {
      setToolsBool(!toolsBool);
    }
    else if (button.target.id == 3) {
      setManagmentBool(!managmentBool);
    }
    else {
      console.log("Not a valid button");
    }
  }

  return (
    <div className="skills-container">
      <div className='one-skill lang-container'>
        <button id={1} className='skills-button langsButton' onClick={handleButtonClick}>Programming Languages</button>
        {langsBool && <div className='skill-block langs'>
          {langs.map((lang) =>
            <div key={lang} className='skill-holder lang-holders'>{lang}</div>
          )}
        </div>}
      </div>
      <div className='one-skill tools-container'>
        <button id={2} className='skills-button toolsButton' onClick={handleButtonClick}>Tools and Technologies</button>
        {toolsBool && <div className='skill-block tools'>
          {tools.map((tool) =>
            <div key={tool} className='skill-holder tool-holders'>{tool}</div>
          )}
        </div>}
      </div>
      <div className='one-skill management-container'>
        <button id={3} className='skills-button managmentButton' onClick={handleButtonClick}> Project Management</button>
        {managmentBool && <div className='skill-block management'>
          {management.map((manage) =>
            <div key={manage} className='skill-holder management-holders'>{manage}</div>
          )}
        </div>}
      </div>
    </div>
  );
}

export default Skills;