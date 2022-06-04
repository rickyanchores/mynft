import React from 'react'
import Card from '../../components/Card/Card';

//IMPORT IMAGES
import image1 from "../../images/myNFT.webp";
import image2 from "../../images/PetBotYellow.jpeg";
import image3 from "../../images/DarkBudz.jpeg";





const Gallery = (props) => {

    const card = [
        {
            name: "IGNIS",
            text: "FALSE IDOLS"
        },
        {
            name: "Yellow",
            text: "PetBot"
        },
        {
            name: "Masked Ninja",
            text: "DarkBudz"
        }
    ] 

    return (
        <div className='Gallery'>
            <h3>Gallery</h3>
            <div className="card-container">
                <Card 
                    image={image1}
                    name={card[0].name}
                    text={card[0].text}
                />
                <Card 
                    image={image2}
                    name={card[1].name}
                    text={card[1].text}
                />
                <Card 
                    image={image3}
                    name={card[2].name}
                    text={card[2].text}
                />
                
            </div>
        </div>
    )
}

export default Gallery
