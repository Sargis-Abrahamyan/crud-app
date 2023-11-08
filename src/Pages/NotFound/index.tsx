import React from 'react';

import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound_container}>
      <h2 className={styles.notFound_title}>404 Not Found</h2>
      <p className={styles.notFound_info}>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to={'/'}>Go Back</Link>
    </div>
  );
};

export default NotFound;
