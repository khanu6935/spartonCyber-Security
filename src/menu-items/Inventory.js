import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const inventory = {
  id: 'inventory',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'inventoryPanel',
      title: 'Inventory',
      type: 'item',
      url: '/inventory',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default inventory;
