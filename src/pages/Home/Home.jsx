import React from 'react'


const Home = () => {

   const heroImage = require('../../images/myNFT.webp').default;

  return (
    <div className='Home'>
        <h3>Home</h3>
        <img src={heroImage} alt="nft" />
    </div>
  )
}

export default Home;