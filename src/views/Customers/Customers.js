import React, { useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useOutletContext } from 'react-router';
import * as am5 from '@amcharts/amcharts5';
import { Grid } from '@mui/material';
import { IconDeviceLaptop } from '@tabler/icons';
import DonutGraph from 'ui-component/DonutGraph/DonutGraph';
import styles from './styles.module.css';
import FilterBar from 'ui-component/FilterBar/FilterBar';

const data1 = [
  { value: 62.96, category: 'One', fill: am5.color('#f00'), color: '#f00' },
  { value: 37.04, category: 'Two', fill: am5.color('#0f0'), color: '#0f0' }
];
const data2 = [
  { value: 33.33, category: 'One', fill: am5.color('#f00'), color: '#f00' },
  { value: 33.33, category: 'Two', fill: am5.color('#0f0'), color: '#0f0' },
  { value: 18.52, category: 'Three', fill: am5.color('#2ebb55'), color: '#2ebb55' },
  { value: 14.81, category: 'four', fill: am5.color('#afafaf'), color: '#afafaf' }
];
export default function Customers() {
  const [, setActiveItem] = useOutletContext();

  useEffect(() => {
    setActiveItem('customers');
  }, []);

  const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe'
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky'
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe'
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio'
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe'
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia'
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe'
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia'
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy'
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska'
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs'
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina'
    }
  ];
  const columns = [
    {
      accessorKey: 'name.firstName', //access nested data with dot notation
      header: 'First Name',
      size: 150
    },
    {
      accessorKey: 'name.lastName',
      header: 'Last Name',
      size: 150
    },
    {
      accessorKey: 'address', //normal accessorKey
      header: 'Address',
      size: 200
    },
    {
      accessorKey: 'city',
      header: 'City',
      size: 150
    },
    {
      accessorKey: 'state',
      header: 'State',
      size: 150
    }
  ];

  return (
    <div>
      <Grid container rowSpacing={2}>
        <Grid item container xs={12}>
          <FilterBar />
        </Grid>
        <Grid item container xs={12} columnSpacing={1}>
          <Grid item xs={3}>
            <DonutGraph data={data1} id={'chartdiv1'} title={'Secured State'} />
          </Grid>
          <Grid item xs={3}>
            <DonutGraph data={data2} id={'chartdiv2'} title={'Device Review'} />
          </Grid>
          <Grid item xs={3}>
            <div className={styles.devicesCard}>
              <p className={styles.cardTitle}> {'Devices (total: 27)'}</p>
              <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '45%',

                    borderBottom: '2px solid black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '5px'
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <IconDeviceLaptop size={20} />
                    <p className={styles.cardText}>workStation</p>
                  </div>
                  <p className={styles.cardText}>15</p>
                </div>
                <div
                  style={{
                    width: '45%',

                    borderBottom: '2px solid black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '5px'
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <IconDeviceLaptop size={20} />
                    <p className={styles.cardText}>workStation</p>
                  </div>
                  <p className={styles.cardText}>15</p>
                </div>
                <div
                  style={{
                    width: '45%',

                    borderBottom: '2px solid black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '2px',
                    paddingTop: '5px'
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <IconDeviceLaptop size={20} />
                    <p className={styles.cardText}>workStation</p>
                  </div>
                  <p className={styles.cardText}>15</p>
                </div>
                <div
                  style={{
                    width: '45%',

                    borderBottom: '2px solid black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '5px'
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <IconDeviceLaptop size={20} />
                    <p className={styles.cardText}>workStation</p>
                  </div>
                  <p className={styles.cardText}>15</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid item xs={12}>
          <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnOrdering
            enableGrouping
            enablePinning
            enableRowSelection
            rowNumberMode="static"
            enableRowNumbers
          />
        </Grid>
      </Grid>
    </div>
  );
}
