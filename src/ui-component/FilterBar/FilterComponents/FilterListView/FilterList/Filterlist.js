import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles.module.css';
import React from 'react';

export default function Filterlist(props) {
  const { xs, header, data } = props;
  return (
    <Grid container item xs={xs ?? 1.5} className={styles.filterMain}>
      <div className={styles.filterheader}>
        <p>{header}</p>

        <SearchIcon sx={{ fontSize: '15px !important', color: '#afafaf' }} />
      </div>
      {data &&
        data.map((item, index) => (
          <div className={styles.filtertext} key={index}>
            <p>{item.name ?? ''}</p>
            <p>{item.count ?? ''}</p>
          </div>
        ))}
      <div className={styles.filtertext}>
        <p>Review</p>
        <p>17</p>
      </div>
      <div className={styles.filtertext}>
        <p>not Review</p>
        <p>7</p>
      </div>
    </Grid>
  );
}
