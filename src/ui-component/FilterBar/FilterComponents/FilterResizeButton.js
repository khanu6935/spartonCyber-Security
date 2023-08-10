import React from 'react';

import styles from './styles.module.css';

export default function FilterResizeButton(props) {
  const { resizeFilter, setResizeFilter } = props;
  return (
    <button className={styles.Resizebtn} onClick={() => setResizeFilter(!resizeFilter)}>
      {resizeFilter ? 'Minmize' : 'Maximize'}
    </button>
    // <Button className="Resizebtn" onClick={() => setResizeFilter(!resizeFilter)}>
    //   {resizeFilter ? 'Minmize' : 'Maximize'}
    // </Button>
  );
}
