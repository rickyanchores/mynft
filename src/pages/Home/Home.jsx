import React from 'react'
import heroImage from "../../images/myNFT.webp";

const Home = () => {

  // const heroImage = require('../../images/myNFT.webp').default;

  return (
    <div className='Home'>
        <h3>Home</h3>
        <img className="hero" src={heroImage} alt="nft" />
    </div>
  )
}

export default Home;