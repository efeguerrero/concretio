import React from 'react';

import styles from './link.module.css';

const Link = ({ url, linkName, menuToggle }) => {
  return (
    <a class={styles.link} href={url} onClick={() => menuToggle()}>
      {linkName}
    </a>
  );
};

export default Link;
