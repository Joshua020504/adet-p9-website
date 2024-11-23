import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 60px)", // Adjusts for the navbar height
        padding: "20px",
        flexWrap: "wrap", // Allows wrapping on smaller screens
      }}
    >
      {/* Text Content */}
      <div style={{ flex: "1", minWidth: "300px", textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,1)",
          }}
        >
          Welcome To My Profile!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            textShadow: "1px 1px 3px rgba(0,0,0,1)",
            margin: "0 auto",
          }}
        >
          
          Welcome to my profile! 🐡 I'm really glad you found your way here. This is my space to share thoughts, connect with people, and explore cool ideas together. 
          Whether you're stopping by for a chat or just curious, you're always welcome here. Feel free to stick around and make yourself at home!
        </p>
      </div>

      {/* Image */}
      <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
        <img
          src="joshua.jpg"
          alt="Profile"
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        About Me
      </h1>

      {/* Brief Introduction */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          marginBottom: "20px",
          color: "#555",
        }}
      >
        I'm Joshua, a dedicated developer with a passion for building clean, intuitive, and visually engaging websites and applications. 
        I have a strong interest in web technologies and design and am always working to enhance my skills to deliver seamless user experiences.
      </p>

      {/* Skills & Expertise */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "800px",
          marginBottom: "40px",
        }}
      >
        <div style={{ textAlign: "center", flex: 1, margin: "0 15px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#333" }}>Skills</h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "1rem",
              color: "#555",
            }}
          >
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div style={{ textAlign: "center", flex: 1, margin: "0 15px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#333" }}>Tools</h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "1rem",
              color: "#555",
            }}
          >
            <li>Git</li>
            <li>Docker</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      {/* Contact CTA */}
      <div style={{ marginTop: "40px" }}>
        <a
          href="/contact"
          style={{
            padding: "12px 25px",
            fontSize: "1.2rem",
            backgroundColor: "#333",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        My Education
      </h1>

      <div>
        {/* Education Timeline or List */}
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: "left",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5rem", color: "#333" }}>
            Graduated Grade 12 in Camarines Sur National Highschool.
            </h3>
            <p style={{ fontStyle: "italic", color: "#777" }}>
              Batch (2022 - 2023)
            </p>
            <p style={{ color: "#555" }}>
              Graduated with honors. 
            </p>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5rem", color: "#333" }}>
              Currently 2nd Year College in Naga College Foundation Inc.
            </h3>
            <p style={{ fontStyle: "italic", color: "#777" }}>
              Batch (2023-2024)
            </p>
            <p style={{ color: "#555" }}>
            As a second-year student, I'm eager to build on what I've learned so far and take on new challenges that will help me grow and succeed.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Hobbies() {
  const hobbies = [
    {
      image: "music.jpg",
      description: "One of my favorite hobbies is listening to music; it's like a burst of joy that instantly lifts my mood. Whether I'm relaxing, studying, or just going through my day, music makes everything feel brighter and more alive. It's my go-to way to feel connected and inspired.",
    },
    {
      image: "games.jpg",
      description: "Computer video games; they're a great way to unwind and have fun. Whether it's exploring new worlds or challenging myself with difficult levels, gaming always keeps me engaged and entertained.",
    },
    {
      image: "light.jpg",
      description: "I enjoy watching anime for its variety of stories and deep characters that always keep me hooked. Death Note stands out with its gripping plot and thought-provoking exploration of justice and morality, making it one of the most memorable anime I've seen.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          {/* Image */}
          <img
            src={hobby.image}
            alt={`Hobby ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
          {/* Description */}
          <p
            style={{
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {hobby.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        You can reach out to me via any of the following platforms:
      </p>

      {/* Contact Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <a
          href="https://github.com/Joshua020504"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#24292f")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          GitHub
        </a>

        <a
          href="mailto:bondalojoshua5@gmail.com"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#d14836")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Gmail
        </a>
      </div>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
        }}
      >
        Feel free to connect with me via any of the links above. I look forward to hearing from you!
      </p>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Map route paths to specific background images
  const backgroundStyles = {
    "/": {
      backgroundImage: 'url("download (5).gif")',
    },
    "/about": {
      backgroundImage: 'url("download (7).gif")',
    },
    "/education": {
      backgroundImage: 'url("download (2).gif")',
    },
    "/hobbies": {
      backgroundImage: 'url("download (9).gif")',
    },
    "/contact": {
      backgroundImage: 'url("download (3).gif")',
    },
  };

  const currentStyle = backgroundStyles[location.pathname] || {
    backgroundImage: 'url("/default-background.jpg")',
  };

  return (
    <div
      style={{
        ...currentStyle,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        paddingTop: "60px",
        position: "relative",
      }}
    >
      <Navbar data-bs-theme="black" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#1d1c1c", color: 'white' }}>
          Joshua Information Web  
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link> 
            <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
            <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ color: 'white', paddingTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Wrapper;