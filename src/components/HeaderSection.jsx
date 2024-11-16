import React from 'react';

const HeaderSection = ({ title }) => {
  return (
    <header style={styles.headerContainer}>
      {title && <div style={styles.sectionHeader}>{title}</div>}
      <div style={styles.subNav}>
      </div>
    </header>
  );
};

const styles = {
  headerContainer: {
    width: '100%',
    height: '350px',
    background: 'linear-gradient(to bottom, #03B59B, #FFFFFF)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  sectionHeader: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#002E52',
    marginTop: '150px',
  },
  subNav: {
    display: 'flex',
    gap: '176px',
    marginTop: '60px',
  },
  subNavItem: {
    color: '#002E52',
    textDecoration: 'none',
    fontWeight: 'normal',
  },
};

export default HeaderSection;
