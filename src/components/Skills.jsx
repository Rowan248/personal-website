import '../Styling/Skills.css';
import { useState, useEffect } from 'react';
import skills from '../assets/mydata/skills.json';

function Skills() {

  const [langs, setLangs] = useState([]);
  const [tools, setTools] = useState([]);
  const [management, setManagement] = useState([]);

  useEffect(() => {
    setLangs(skills.languages);
    setTools(skills.tools);
    setManagement(skills.management);
  }, []);

  return (
    <div className="skills-container">
      <div className='skill-block langs'>
        {langs.map((lang) =>
          <div key={lang} >{lang}</div>
        )}
      </div>
      <div className='skill-block tools'>
        {tools.map((tool) =>
          <div key={tool} >{tool}</div>
        )}
      </div>
      <div className='skill-block management'>
        {management.map((manage) =>
          <div key={manage} >{manage}</div>
        )}
      </div>
    </div>
  );
}

export default Skills;