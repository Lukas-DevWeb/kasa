import React, { useState, useRef } from "react";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_up.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const handleComponentOpening = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={handleToggleCollapse}
        className={`collapse ${isOpen ? "open" : ""}`}
      >
        <p>{title}</p>
        <img
          onClick={handleComponentOpening}
          className={`"collapse__arrow ${isOpen ? "arrow_down" : "arrow_up"}`}
          src={isOpen ? arrow_down : arrow_up}
          alt={isOpen ? "fermer" : "ouvrir"}
        />
      </div>
      {isOpen && (
        <div
          ref={contentRef}
          className={`collapsible-content ${isOpen ? "open" : ""}`}
        >
          <ul>{content}</ul>
        </div>
      )}
    </div>
  );
}