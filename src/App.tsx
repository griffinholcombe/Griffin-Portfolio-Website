import React, { useState, useEffect } from "react";
import Nameplate from "./components/nameplate/nameplate";
import "./App.css";
import Header from "./components/header/header";
import Particles from "./components/Particles";
import Timeline from "./components/timeline/Timeline";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [showNameplate, setShowNameplate] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (showNameplate) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflowY = "auto";
    };
  }, [showNameplate]);

  const handleFadeComplete = () => {
    setShowNameplate(false);
    setTimeout(() => setFadeIn(true), 50);
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
      }}
    >
      <div
        className="particle-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {showNameplate ? (
          <Nameplate onFadeComplete={handleFadeComplete} />
        ) : (
          fadeIn && (
            <>
              <div className="header">
                <Header />
              </div>
              <div
                className="fade-in"
                style={{ minHeight: "100vh", paddingTop: "40px" }}
              >
                <div
                  className="cardsContainer"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                    alignItems: "start",
                  }}
                >
                  <div className="about-section">
                    <About />
                  </div>
                  <img
                    src="/assets/copilotlogo.png"
                    alt="About section image"
                    style={{
                      scale: "1.25",
                      justifySelf: "end",
                      width: "500px",
                      height: "300px",
                      marginTop: "10rem",
                      alignSelf: "start",
                    }}
                  />
                </div>
                <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
                  <Timeline />
                </div>
                <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
                  <Projects />
                </div>
                <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
                  <Contact />
                </div>
                <Footer />
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};
export default App;
