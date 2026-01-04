import React from "react";

const GridOverlay = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        opacity: 0.35
      }}
    />
  );
};

export default GridOverlay;
