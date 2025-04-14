import '../Styling/Projects.css';
import projectsjson from '../assets/mydata/projects.json';

const projects = projectsjson.projects;

function Projects({ modalOpen }) {

    console.log(projects.projects);

    function handleProjectModalOpen(e) {
        modalOpen(projects[e.target.id - 1]);
    }

    return (
        <div className="projects">
            <div className='projects-container'>
                {projects.map((project) =>
                    <button id={project.id} key={project.id} className='exp-buttons' onClick={handleProjectModalOpen}>{project.title}</button>
                )}
            </div>
        </div>
    );
}

export default Projects;