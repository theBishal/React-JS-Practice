import React from "react";

const HamroButton = ({ text, onClick, color }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default HamroButton;
