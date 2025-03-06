import React, { useState, useEffect } from "react";

const RotateScreenPrompt: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    checkOrientation(); // Controlla l'orientamento quando il componente è montato

    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  if (isPortrait === null) return null; // Evita il rendering lato server

  if (!isPortrait) return null; // Se è in landscape, non mostra nulla

  return (
    <div style={overlayStyle}>
      <p style={textStyle}>Per un'esperienza ottimale, ruota il dispositivo in orizzontale</p>
    </div>
  );
};

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "clamp(16px, 2vw, 24px)",
  textAlign: "center",
  zIndex: 9999,
};

const textStyle: React.CSSProperties = {
  maxWidth: "80%",
};

export default RotateScreenPrompt;
