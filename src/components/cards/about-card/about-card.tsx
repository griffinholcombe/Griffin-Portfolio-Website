import React from "react";

const Card: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        background: "#0000",
        color: "#fff",
        borderRadius: "16px",
        //boxShadow: "0 4px 24px rgba(188, 10, 10, 0.15)",
        padding: "1rem",
        transition:
          "transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s",
        cursor: "pointer",
        willChange: "transform",
        minWidth: "400px",
        textAlign: "center",
        fontFamily: "inconsolata, monospace",
        fontSize: "16px",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-8px) scale(1.03)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.25)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "none";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.15)";
      }}
    >
      {children}
    </div>
  );
};

export default Card;
