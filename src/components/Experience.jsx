import '../Styling/Experience.css';

// divide between work and other (hackathons, LCVT)

function Experience({ modalOpen }) {

  function handleModalOpen() {
    modalOpen();
  }

  return (
    <div className="experience">
      <div className="experiences work-experience">
        Work Experience
        {/* buttons in here that open modal */}
        <button onClick={handleModalOpen}></button>
      </div>
      <div className="experiences other-experience">
        Other Experience
      </div>
    </div>
  );
}

export default Experience;