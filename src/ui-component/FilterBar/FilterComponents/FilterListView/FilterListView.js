import React from 'react';
import styles from './styles.module.css';
import { Grid } from '@mui/material';
import Filterlist from './FilterList/Filterlist';
export default function FilterListView() {
  const data1 = [
    {
      name: 'Windows',
      count: 208
    },
    {
      name: 'Mac',
      count: 20
    },
    {
      name: 'Linux',
      count: 5
    },
    {
      name: 'Windows Lagecy',
      count: 0
    }
  ];
  const data2 = [
    {
      name: '22.3.4.615',
      count: 105
    },
    {
      name: '21.5.6.245',
      count: 20
    },
    {
      name: '25.9.1.542',
      count: 68
    },
    {
      name: '25.9.1.137',
      count: 15
    }
  ];
  const data3 = [
    {
      name: 'Yes',
      count: 147
    },
    {
      name: 'No',
      count: 62
    }
  ];
  return (
    <div className={styles.filterlistMain}>
      <Grid container row className={styles.filterlistGird}>
        <Filterlist xs={1.5} data={data1} header={'OS'} />
        <Filterlist xs={1.5} data={data2} header={'Version'} />
        <Filterlist xs={1.5} data={data1} header={'Domain'} />
        <Filterlist xs={2} data={data3} header={'Connected to Management'} />
        <Filterlist xs={1.5} data={data1} header={'OS'} />
        <Filterlist xs={1.5} data={data2} header={'Version'} />
        <Filterlist xs={1.5} data={data1} header={'Domain'} />
        <Filterlist xs={2} data={data3} header={'Connected to Management'} />
      </Grid>
    </div>
  );
}
