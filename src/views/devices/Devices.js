/* eslint-disable */

import { Grid } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const apiUrl = 'https://scs-soc-api.spartancyber.com/get_view/customer_overview';
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXYiLCJleHAiOjE2OTE3NTc1MTB9.5qPmkpbiFZA8GIbZ1fOm2Elss0rDF-HZuITjotqtF-M';

export default function Devices() {
  const [data, setData] = useState([]);
  // console.log('data>>>>>>>', data);
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
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

  console.log('modifiedResponse>>>>', modifiedResponse);

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
