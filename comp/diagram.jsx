import React from "react";

const Diagram = ({ src, invert = false }) => {
  if (!invert) {
    return <img src={src} alt="Diagram" className="diagram" />;
  } else {
    return <img src={src} alt="Diagram" className="diagram" />;
  }
};

export default Diagram;
