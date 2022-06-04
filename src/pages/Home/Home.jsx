import React from 'react';


//IMPORT IMAGE HERO

import heroImage from "../../images/Home.jpg";

const Home = () => {

  // const heroImage = require('../../images/myNFT.webp').default;

  return (
    <div className='Home' id='home'
     style={{
       backgroundImage: `url(${heroImage})`}
       }>
        <h1>RikoNFT</h1>
    </div>
  )
}

export default Home;