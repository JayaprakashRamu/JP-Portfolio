import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  // State to track whether the button should be shown
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Add event listener for scroll and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={buttonStyle}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

// Add some styles for the button
const buttonStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  fontSize: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "opacity 0.3s ease",
};

export default ScrollToTopButton;
