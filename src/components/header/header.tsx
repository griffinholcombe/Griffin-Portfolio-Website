import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.05)",
        width: "100%",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
        fontWeight: 700,
        fontSize: "1.5rem",
        fontFamily: "inconsolata, monospace",
        opacity: ".90",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.5rem",
          fontFamily: "inconsolata, monospace",
        }}
      >
        Griffin Holcombe
      </div>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.linkedin.com/in/griffin-holcombe-14489b265/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 500,
            border: "0px solid #fff",
            borderRadius: "6px",
            padding: "0.5em 1em",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#000";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
          }}
        >
          LinkedIn
        </a>
        <a
          href="/assets/resume2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 500,
            border: "0px solid #fff",
            borderRadius: "6px",
            padding: "0.5em 1em",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#000";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
          }}
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
