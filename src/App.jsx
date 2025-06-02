import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import './App.css';

function App() {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 85 },  
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'C Language', level: 75 },
    { name: 'Web Development', level: 80 }
  ];

  return (
    <div>
      <nav className="l-header">
        <div className="nav__logo">Samrudh HM</div>
        <div className="nav__menu">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <a key={section} href={`#${section}`} className="nav__link">
              {section.replace('-', ' ')}
            </a>
          ))}
        </div>
      </nav>

      <section id="Home" className="home section">
         <div className="home__img-container">
          <img src="/photo.png" alt="Samrudh HM" className="home__img" />
        </div>
        <h1 className="home__title">Samrudh HM</h1>
        <p className="home__subtitle">Full-Stack Developer & UI/UX Designer</p>
        <p>Passionate developer with expertise in modern web technologies. I create beautiful, functional applications that solve real-world problems and deliver exceptional user experiences.</p>
        <p>With a strong foundation in both frontend and backend development, I bring ideas to life through clean code, innovative design, and attention to detail.</p>
        <a href="#Projects" className="button">View My Work</a>
        <a href="#Contact" className="button">Contact</a>
      </section>

      <section id="About" className="section about__section">
        <h2 className="section-title">About Me</h2>
        <div className="about__container">
          <div className="about__content">
            <p>
              I am full-stack developer who thrives on transforming creative ideas into powerful digital solutions. 
              With a background in computer science and years of experience in web and mobile development, 
              I specialize in building responsive, scalable, and user-friendly applications.
            </p>
            <p>
              Outside of coding, I love exploring design trends, collaborating with teams, and learning new technologies. 
              Whether it's front-end magic or back-end logic, I am always excited to take on new challenges and improve continuously.
            </p>
          </div>
          <div className="about__img-container">
            <img 
              src="/photo.png" 
              alt="About Samrudh" 
              className="about__img" 
            />
          </div>
        </div>
      </section>

      <section id="Skills" className="section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills__container">
          {skills.map((skill) => (
            <div key={skill.name} className="skills__data">
              <h3>{skill.name}</h3>
              <p>{skill.level}% Proficiency</p>
              <div className="skills__bar" style={{ width: `${skill.level}%` }}></div>
            </div>
          ))}
        </div>
      </section>

      <section id="Projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="skills__container">
          {["Complaint Management System"].map((title, i) => (
            <div key={i} className="project__card">
              <h3 className="project__title">{title}</h3>
              <p>The Complaint Management System is a full-stack application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It is designed to streamline the process of lodging, tracking, and resolving complaints efficiently.</p>
              <h4>React Node.js MongoDB NodeJS Express</h4>
              <div>
                <a href="https://github.com/RuchithYK/Complaint_Management_System" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="Contact" className="section">
        <h2 className="section-title">Let's Connect</h2>
        <p className="home__subtitle">Ready to bring your ideas to life? Let's discuss your next project.</p>
        <div className="skills__container">
          <div className="skills__data">
            <Mail style={{ marginRight: '8px' }} /> 
            samrudh.hm@email.com
          </div>
          <div className="skills__data">
            <Phone style={{ marginRight: '8px' }} /> 
            +91 7894486186
          </div>
          <div className="skills__data">
            <MapPin style={{ marginRight: '8px' }} /> 
            India
          </div>
        </div>
        <div className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button onClick={() => alert('Message functionality would be implemented with a backend service')}>
            Send Message
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Samrudh HM</p>
        <div>
          <a href="https://github.com/Samrudh-26" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/samrudh-h-m-aaa534308/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;