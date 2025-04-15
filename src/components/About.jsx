import '../Styling/About.css';
import { useState, useEffect } from 'react';
import education from '../assets/mydata/education.json';

function About() {

  const [college, setCollege] = useState({});
  const [collegeCourses, setCollegeCourses] = useState([]);
  // const [highSchool, setHighSchool] = useState({});

  useEffect(() => {
    setCollege(education.college);
    setCollegeCourses(education.college.Courses)
    // setHighSchool(education.highSchool);
  }, []);

  return (
    <div className="about-page">
      <div className='about-layout education'>
        <div className='college-info'>
          {/* group together, diplay inline block */}
          <h2 className='college-title'>{college.Title}</h2>
          <div className='college-start'>
            <p>{college.School}, {college.GPA} ({college.GradDate})</p>
          </div>
          <p><b>Degree:</b> {college.Degree}</p>
          <p><b>Honors:</b> {college.Honors}</p>
          <div className='courses-container'>
            <h4>Relevant Courses:</h4>
            <p id='course-list'>{collegeCourses.join(', ')}</p>
          </div>
        </div>
        {/* <div className='HS-info'></div> */}
      </div>
      <div className='about-layout other-about'>
        <p>I recently graduated from Virginia Tech with a degree in Computer Science and minors in Human Computer Interaction and math. Throughout my time at VT, I took various CS classes that taught me new technologies, showed me new ideas/concepts, and gave me the opportunity to practice those. Some of those include learning about various data structures, studying computer organization, analyzing data and algorithms, developing multiple applications, and more. I have completed multiple internships with NTConcepts that have given me experience on working in an office environment. These internships have also allowed me to learn more about programming by having me work on challenging projects. These projects, along with ones I have worked on in school and during hackathons, gave me experience working on full stack applications. I have used React JS for the front ends of these projects. For the back end, I have mostly used python, as well as JavaScript. For the hackathons and a couple school projects, I have worked on the database side, where I was able to learn how to use MongoDB and MySQL. </p>
      </div>
    </div>
  );
}

export default About;