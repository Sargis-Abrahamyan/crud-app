import React from 'react';

import styles from './navBar.module.css';

const NavBar = () => {
  return (
    <div id={styles.navBar_Container}>
      <h1 id={styles.title_logo}>Crud App</h1>
    </div>
  );
};

export default NavBar;
