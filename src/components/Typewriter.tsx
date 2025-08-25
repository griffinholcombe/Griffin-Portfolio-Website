import React, { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
};

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
