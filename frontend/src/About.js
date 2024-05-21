import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Artllery</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to <strong>Artllery</strong>, the premier community for artists to share their artwork with the world. At Artllery, we believe in fostering a vibrant and inclusive space where creativity knows no bounds.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a platform for artists of all levels to showcase their work, connect with other creatives, and gain exposure. Whether you are a professional artist or just starting out, Artllery is the perfect place to grow and thrive.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Gallery:</strong> A dedicated gallery space for artists to display their masterpieces and get discovered by art enthusiasts and collectors.</li>
          <li><strong>Community:</strong> Engage with a supportive community of fellow artists, participate in discussions, and collaborate on projects.</li>
          <li><strong>Resources:</strong> Access to a wealth of resources including tutorials, articles, and events to help you develop your skills and advance your career.</li>
          <li><strong>Exhibitions:</strong> Opportunities to participate in online and offline exhibitions, competitions, and art fairs.</li>
        </ul>
        <h2>Join Us</h2>
        <p>
          Becoming a member of Artllery is simple and free. Sign up today to start sharing your art, connecting with others, and exploring the endless possibilities that our community has to offer.
        </p>
        <p>
          Thank you for being a part of Artllery. Together, let's create something extraordinary.
        </p>
      </section>
    </div>
  );
}

export default About;
