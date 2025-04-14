import '../Styling/Home.css';
import DSC_0076 from '../assets/RowanImages/DSC_0076.JPG';
// import DSC_0058 from '../assets/RowanImages/DSC_0058.JPG';

// const images = [

//   {
//     id: 1,
//     src: DSC_0076
//   },
//   {
//     id: 2,
//     src: DSC_0058
//   }
// ]

function Home() {

  return (
    <div className="home">
      <div className='home-description'>
        <h1 className='my-name'>Rowan Cusano</h1>
        <div className="contact-info">
          <h3>Email: rowan.cusano@gmail.com</h3>
          <a href="https://www.linkedin.com/in/rowan-cusano/" target="_blank">My LinkedIn Page</a>
        </div>
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