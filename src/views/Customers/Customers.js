/*eslint-disable*/
import React, { useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useOutletContext } from 'react-router';
import * as am5 from '@amcharts/amcharts5';
import { Grid } from '@mui/material';
import { IconDeviceLaptop } from '@tabler/icons';
import DonutGraph from 'ui-component/DonutGraph/DonutGraph';
import styles from './styles.module.css';
import FilterBar from 'ui-component/FilterBar/FilterBar';
import { useState } from 'react';
import axios from 'axios';

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
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const login = async () => {
      try {
        const formData = new FormData();
        formData.append('username', 'dev');
        formData.append('password', '@pajeiohj3');
        const response = await axios.post('https://scs-soc-api.spartancyber.com/token', formData);
        const { access_token } = response.data;
        localStorage.setItem('token', access_token);
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    login();
  }, []);

  const fetchCustomers = async () => {
    try {
      const parsetoken = localStorage.getItem('token');
      const token = parsetoken;

      const headers = {
        Authorization: `Bearer ${token}`
      };
      const data = await axios.get('https://scs-soc-api.spartancyber.com/get_customers', { headers });
      const res = data.data;
      setCustomers(res);
    } catch (error) {
      console.log('error>>', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
    setActiveItem('customers');
  }, []);

  console.log('customers>>>', customers);

  //   {
  //     name: {
  //       firstName: 'John',
  //       lastName: 'Doe'
  //     },
  //     address: '261 Erdman Ford',
  //     city: 'East Daphne',
  //     state: 'Kentucky'
  //   },
  //   {
  //     name: {
  //       firstName: 'Jane',
  //       lastName: 'Doe'
  //     },
  //     address: '769 Dominic Grove',
  //     city: 'Columbus',
  //     state: 'Ohio'
  //   },
  //   {
  //     name: {
  //       firstName: 'Joe',
  //       lastName: 'Doe'
  //     },
  //     address: '566 Brakus Inlet',
  //     city: 'South Linda',
  //     state: 'West Virginia'
  //   },
  //   {
  //     name: {
  //       firstName: 'Joe',
  //       lastName: 'Doe'
  //     },
  //     address: '566 Brakus Inlet',
  //     city: 'South Linda',
  //     state: 'West Virginia'
  //   },
  //   {
  //     name: {
  //       firstName: 'Kevin',
  //       lastName: 'Vandy'
  //     },
  //     address: '722 Emie Stream',
  //     city: 'Lincoln',
  //     state: 'Nebraska'
  //   },
  //   {
  //     name: {
  //       firstName: 'Joshua',
  //       lastName: 'Rolluffs'
  //     },
  //     address: '32188 Larkin Turnpike',
  //     city: 'Charleston',
  //     state: 'South Carolina'
  //   }
  // ];
  const columns = [
    {
      accessorKey: 'namefirstName', //access nested data with dot notation
      header: 'Name',
      size: 150
    },
    {
      accessorKey: 'Deviceplatform',
      header: 'Device PlatForm',
      size: 150
    },
    {
      accessorKey: 'totalDevicenotcomplaint', //normal accessorKey
      header: 'Total Device not complaint',
      size: 200
    },
    {
      accessorKey: 'TotalUser',
      header: 'Total User',
      size: 150
    },
    {
      accessorKey: 'NotCpmlaintUsers',
      header: 'Not Cpmlaint Users',
      size: 150
    },
    {
      accessorKey: 'aliases',
      header: 'Aliases',
      size: 150
    }
  ];

  const apiResponse = customers.map((item) => ({
    namefirstName: item.name,
    Deviceplatform: item.total_devices,
    totalDevicenotcomplaint: item.total_devices_not_compliant,
    TotalUser: item.total_users,
    NotCpmlaintUsers: item.total_users_not_compliant,
    aliases: item.aliases
  }));

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
            data={apiResponse}
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
