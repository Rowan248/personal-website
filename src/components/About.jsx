import '../Styling/About.css';
import { useState, useEffect } from 'react';
import education from '../assets/mydata/education.json';

function About() {

  const [college, setCollege] = useState({});
  const [collegeCourses, setCollegeCourses] = useState([]);
  const [highSchool, setHighSchool] = useState({});

  useEffect(() => {
    setCollege(education.college);
    setCollegeCourses(education.college.Courses)
    setHighSchool(education.highSchool);
  }, []);

  console.log(college)

  return (
    <div className="about-page">
      <div className='about-layout education'>
        <div className='college-info'>
          {/* group together, diplay inline block */}
          <h2>{college.Title}</h2>
          <div className='college-start'>
            <h4>{college.School}, {college.GPA} ({college.GradDate})</h4>
          </div>
          <h4>Degree: {college.Degree}</h4>
          <h4>Honors: {college.Honors}</h4>
          <h4>Relevant Courses:</h4>
          {collegeCourses.map((csClass) =>
            <div key={csClass}>{csClass}</div>)}
        </div>
        <div className='HS-info'></div>
      </div>
      <div className='about-layout other-about'></div>
    </div>
  );
}

export default About;