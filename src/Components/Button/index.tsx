import React from 'react';

import { ButtonProps } from './types';
import styles from './button.module.css';

const Button: React.FC<ButtonProps> = ({
  width,
  color,
  bgColor,
  content,
  click,
}) => {
  return (
    <button
      className={styles.button}
      onClick={click}
      style={{ width, color, backgroundColor: bgColor }}>
      {content}
    </button>
  );
};

export default Button;
