import React from 'react';


//IMPORT IMAGE HERO

import heroImage from "../../images/Home.jpg";

const Home = () => {

  // const heroImage = require('../../images/myNFT.webp').default;

  return (
    <div className='Home' id='home'>
        <h1>RikoNFT</h1>
        <img src={ heroImage } alt="" />
    </div>
  )
}

export default Home;