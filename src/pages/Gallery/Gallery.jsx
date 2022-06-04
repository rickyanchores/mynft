import React from 'react'
import Card from '../../components/Card/Card';

//IMPORT IMAGES
import image1 from "../../images/myNFT.webp";


const Gallery = (props) => {

    const card = [
        {
            name: "IGNIS",
            text: "FALSE IDOLS"
        },
        {
            name: "IGNIS",
            text: "FALSE IDOLS"
        },
        {
            name: "IGNIS",
            text: "FALSE IDOLS"
        }
    ] 

    return (
        <div className='Gallery'>
            <h3>Gallery</h3>
            <div className="card-container">
                <Card 
                    image={image1}
                    title={card[0].title}
                    text={card[0].text}
                />
                <Card 
                    image={image1}
                    title={card[0].title}
                    text={card[0].text}
                />
                <Card 
                    image={image1}
                    title={card[0].title}
                    text={card[0].text}
                />
                
            </div>
        </div>
    )
}

export default Gallery
