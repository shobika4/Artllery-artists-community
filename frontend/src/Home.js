import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleabout = () => {
    navigate('/about');
  };
  const handlecommunity = () => {
    navigate('/community');
  };
  const handleartists = () => {
    navigate('/artistSignup');
  };
  const handlecontact = () => {
    navigate('/contact');
  };

  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <h1>Artllery</h1>
            <ul>
              <li><button onClick={handleabout}>About</button></li>
              <li><button onClick={handlecommunity}>Community</button></li>
              <li><button onClick={handleartists}>Artists</button></li>
              <li><button onClick={handlecontact}>Contact</button></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="bodycontainer">
        <div className="background-container">
          <div className="overlay-text">
            <h2>Embark on a journey through the vibrant world of Artllery, where creativity knows no bounds and every stroke tells a story</h2>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='image-container1'></div>
        <div className='image-container2'></div>
        <div className='image-container3'></div>
        <div className='image-container4'></div>
        <div className='image-container5'></div>
      </div>


      <footer>
        <div className="footer-container">
          <p>&copy; 2024 Artllery. All rights reserved.</p>
          <ul>
            <li><button onClick={handleabout}>About</button></li>
            <li><button onClick={handlecontact}>Contact</button></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
