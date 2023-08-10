import { IconUserCheck } from '@tabler/icons';

// constant
const icons = { IconUserCheck };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const customers = {
  id: 'customers',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'customersPanel',
      title: 'Customers',
      type: 'item',
      url: '/customers',
      icon: icons.IconUserCheck,
      breadcrumbs: false
    }
  ]
};

export default customers;
