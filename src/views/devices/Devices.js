/* eslint-disable */

import { Grid } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const apiUrl = 'https://scs-soc-api.spartancyber.com/get_view/customer_overview';

export default function Devices() {
  const [data, setData] = useState([]);

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

  const fetchData = async () => {
    try {
      const parsetoken = localStorage.getItem('token');
      const token = parsetoken;
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const response = await axios.get(apiUrl, { headers });
      setData(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      accessorKey: 'device_platform',
      header: 'Device Platformm',
      size: 150
    },
    {
      accessorKey: 'firstName',
      header: 'Customer Name',
      size: 150
    },
    {
      accessorKey: 'user_platforms',
      header: 'Device Platforms',
      size: 150
    },
    {
      accessorKey: 'total_devices', //normal accessorKey
      header: 'Total Devices',
      size: 150
    },
    {
      accessorKey: 'total_users',
      header: 'Total Users',
      size: 150
    },
    {
      accessorKey: 'devices_not_compliant',
      header: 'Total devices not compliant',
      size: 250
    },
    {
      accessorKey: 'users_not_compliant',
      header: 'Total users not compliant',
      size: 250
    }
  ];

  function removeDotsFromKeys(obj) {
    const result = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = key.replace(/\./g, '_'); // Replace all dots with underscores
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          result[newKey] = removeDotsFromKeys(obj[key]); // Recursively process nested objects
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

  const modifiedResponse = data.map(removeDotsFromKeys);

  const apiResponse = modifiedResponse.map((item) => ({
    device_platform: item.customers_device_platforms,
    firstName: item.customers_name,
    user_platforms: item.customers_user_platforms,
    total_devices: item.customers_total_devices,
    total_users: item.customers_total_users,
    devices_not_compliant: item.customers_total_devices_not_compliant,
    users_not_compliant: item.customers_total_users_not_compliant
  }));
  return (
    <>
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
    </>
  );
}
