import React, { useState } from "react";
import "./nameplate.css";

type NameplateProps = {
  onFadeComplete?: () => void;
};

const Nameplate: React.FC<NameplateProps> = ({ onFadeComplete }) => {
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    const leftChar = document.querySelector(".left-char");
    const rightChar = document.querySelector(".right-char");

    if (leftChar && rightChar) {
      leftChar.classList.add("move-out");
      rightChar.classList.add("move-out");

      setTimeout(() => {
        leftChar.classList.remove("move-out");
        rightChar.classList.remove("move-out");
        setFade(true);
        setTimeout(() => {
          if (onFadeComplete) onFadeComplete();
        }, 500); // matches transition duration
      }, 500); // matches animation duration
    } else {
      console.error("Characters not found in the DOM");
    }
  };

  return (
    <div
      className={`nameplate-container${fade ? " fade-out" : ""}`}
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.5s",
        opacity: fade ? 0 : 1,
        fontFamily: "inconsolata, monospace",
      }}
    >
      <h1
        style={{
          fontSize: "16rem",
          marginBottom: "4rem",
          textAlign: "center",
          fontFamily: "inconsolata, monospace",
        }}
      >
        <span className="left-char">&lt;</span>GH
        <span className="right-char">&gt;</span>
      </h1>
      <div className="nameplate-text">
        <p>Hello, I'm </p>
        <p>Griffin Holcombe</p>
      </div>
      <div className="software-text">
        <p>SOFTWARE ENGINEER</p>
      </div>
      <button
        className="nameplate-btn"
        onClick={handleClick}
        disabled={fade}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          borderRadius: "8px",
          cursor: "pointer",
          //transition: "background 0.2s",
          marginBottom: "3rem",
        }}
      >
        See my work
      </button>
    </div>
  );
};

export default Nameplate;
