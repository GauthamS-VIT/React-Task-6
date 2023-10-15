import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Hobbies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Hi There!</h1>
        <p>Name: Gautham S</p>
        <p>Age: 19 </p>
        <p>Location: Chennai,India</p>
      </header>
      <div className="About" id="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Gautham S here.
          I am a third year student at VIT Chennai,<br></br> I am currently pursuing a Virtual Internship with Ethnus, for MERN -Full Stack Development.
        </p>
      </div>
      <div className="Projects" id="projects">
        <h2>Hobbies</h2>
        
        Watching Youtube
        <br></br>
        Gaming
        <br></br>
        Football
        <br></br>
        Coding
    
      </div>
      <div className="Contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach via email:</p>
        <p>Email: <a mailto= "gautham.s2021a@vitstudent.ac.in">gautham.s2021a@vitstudent.ac.in</a></p>
        <p>GitHub: <a href="https://github.com/GauthamS-VIT" target="_blank" rel="noopener noreferrer">github.com/GauthamS-VIT</a></p>
      </div>
    </div>
  );
}
export default App;