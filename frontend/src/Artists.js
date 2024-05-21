import React from 'react';
import{useNavigate} from 'react-router-dom';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import './Artists.css';
import image3 from './imagea.jpg';
import image4 from './imageb.jpg';
import image5 from './imagec.jpg';
import image6 from './imaged.jpg';
import image7 from './imagee.jpg';
import image8 from './imagef.jpg';
import image9 from './imageg.jpg';
import image10 from './imageh.jpg';
import image11 from './imagei.jpg';
import image12 from './imagej.jpg';
import image13 from './imagek.jpg';
import image14 from './imagel.jpg';

// Import other images as needed

const artistsData = [
  { src: image1, alt: "first", name: "Artist One", date: "2023-01-01" },
  { src: image2, alt: "second", name: "Artist Two", date: "2023-02-01" },
  { src: image3, alt: "third", name: "Artist Three", date: "2023-03-01" },
  { src: image4, alt: "fourth", name: "Artist Four", date: "2023-04-01" },
  { src: image5, alt: "fifth", name: "Artist Five", date: "2023-05-01" },
  { src: image6, alt: "sixth", name: "Artist Six", date: "2023-06-01" },
  { src: image7, alt: "seventh", name: "Artist Seven", date: "2023-07-01" },
  { src: image8, alt: "eighth", name: "Artist Eight", date: "2023-08-01" },
  { src: image9, alt: "ninth", name: "Artist Nine", date: "2023-09-01" },
  { src: image10, alt: "tenth", name: "Artist Ten", date: "2023-10-01" },
  { src: image11, alt: "eleventh", name: "Artist Eleven", date: "2023-11-01" },
  { src: image12, alt: "twelfth", name: "Artist Twelve", date: "2023-12-01" },
  { src: image13, alt: "thirteen", name: "Artist Thirteen", date: "2024-01-01" },
  { src: image14, alt: "fourteen", name: "Artist Fourteen", date: "2024-02-01" },
  
];

const Artists = () => {
  const navigate= useNavigate();
  const handleback=()=>{
    navigate('/');
  }
  const handlecommunity=()=>{
    navigate('/community');
  }



  return (
    <div className="artists-page">
      <div className="top-buttons">
        <button  onClick={handleback} className="back-button">Back</button>
        <button  onClick={handlecommunity}className="community-button">Community</button>
      </div>
      <h2>Arts</h2>
      <div className="image-gallery">
        {artistsData.map((artist, index) => (
          <div className="image-container" key={index}>
            <img src={artist.src} alt={artist.alt} />
            <div className="overlay">
              <div className="text">{artist.name}<br />{artist.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
