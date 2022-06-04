import React from "react";

import SocialMedia from "../../components/Socialmedia/Socialmedia.jsx";

const Footer = () => {

  return (
    <div className="Footer" id="contacts">
      <div className="f-container">
        <h1>My NFT Collection</h1>
        <SocialMedia />
        <p className="signature">Designed by RA 2022</p>
      </div>
    </div>
  );
};

export default Footer;
