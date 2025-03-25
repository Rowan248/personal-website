import '../Styling/Home.css';
// import DSC_0076 from '../assets/RowanImages/DSC_0076.JPG';
// import DSC_0058 from '../assets/RowanImages/DSC_0058.JPG';
// import homeDescription from "../assets/texts.json";

// const images = [

//   {
//     id: 1,
//     src: DSC_0076
//   },
//   {
//     id: 1,
//     src: DSC_0058
//   }
// ]

// add linkedin and email as lesser headings

function Home() {
  return (
    <div className="home">
      <div className='home-description'>
        <h1 className='my-name'>Rowan Cusano</h1>
        <div className="contact-info">
          <h3>Email: rowan.cusano@gmail.com</h3>
          <h3>LinkedIn: https://www.linkedin.com/in/rowan-cusano/</h3>
        </div>
        <p>This will be where I put a short bio. This bio will describe myself in some way and I am making this long so I can see how it interacts at the moment.</p>
      </div>
      <div className='my-photos'>
        {/* {images.map(p => {
          return <img className="photos" height="350" width="550" key={p.id} src={p.src} />;
        })} */}
        {/* <img className="photos" height="350" width="550" src={DSC_0058} /> */}
      </div>
    </div>
  );
}

export default Home;