import { IconDeviceLaptop } from '@tabler/icons';

// constant
const icons = { IconDeviceLaptop };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const devices = {
  id: 'devices',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'devicesPanel',
      title: 'Devices',
      type: 'item',
      url: '/devices',
      icon: icons.IconDeviceLaptop,
      breadcrumbs: false
    }
  ]
};

export default devices;
