import React, { useState, useEffect } from "react";

const HeaderSection = ({ title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update state ketika ukuran layar berubah
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const styles = {
    headerContainer: {
      width: "100%",
      height: isMobile ? "200px" : "350px",
      background: "linear-gradient(to bottom, #03B59B, #FFFFFF)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    sectionHeader: {
      fontSize: isMobile ? "32px" : "48px",
      fontWeight: "bold",
      color: "#002E52",
      marginTop: isMobile ? "100px" : "150px",
      textAlign: "center",
    },
    subNav: {
      display: "flex",
      gap: isMobile ? "10px" : "176px",
      marginTop: "60px",
    },
  };

  return (
    <header style={styles.headerContainer}>
      {title && <div style={styles.sectionHeader}>{title}</div>}
      <div style={styles.subNav}>
        {/* Tambahkan elemen navigasi jika diperlukan */}
      </div>
    </header>
  );
};

export default HeaderSection;
