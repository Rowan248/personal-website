import '../Styling/Home.css';
import { useState, useEffect } from 'react';

const images = [

  {
    id: 1,
    src: "/personal-site/RowanImages/DSC_0058.JPG"
  },
  {
    id: 2,
    src: "/personal-site/RowanImages/DSC_0076.JPG"
  },
  {
    id: 3,
    src: "/personal-site/RowanImages/DSC_0101.JPG"
  },
  {
    id: 4,
    src: "/personal-site/RowanImages/DSC_0094.JPG"
  }
]

function Home({ currentImg, handleChangeImg }) {

  const [currImage, setCurrImage] = useState(currentImg);

  useEffect(() => {
    setCurrImage(currentImg);
  }, [currentImg]);

  function handleSelectorClick(e) {
    e.target.src = images[e.target.id - 1].src;
    handleChangeImg(parseInt(e.target.id));
  }

  function handleLeftArrowClick() {
    if (currImage == 1) {
      handleChangeImg(4);
    }
    else {
      handleChangeImg(currImage - 1);
    }
  }

  function handleRightArrowClick() {
    if (currImage == 4) {
      handleChangeImg(1);
    }
    else {
      handleChangeImg(currImage + 1);
    }
  }

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
        <img className="photo" src={images[currImage - 1].src} />
        <div className='photo-changer'>
          <div className='photo-arrows left-arrow' onClick={handleLeftArrowClick}>{'<'}</div>
          <div className='photo-selectors'>
            {images.map((image) => {
              return <div key={image.id} id={image.id} className='selector' onClick={handleSelectorClick}></div>
            })}
          </div>
          <div className='photo-arrows right-arrow' onClick={handleRightArrowClick}>{'>'}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;