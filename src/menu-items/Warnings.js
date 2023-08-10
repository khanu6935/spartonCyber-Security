import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const warnings = {
  id: 'warnings',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'warningsPanel',
      title: 'Warnings',
      type: 'item',
      url: '/warnings',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default warnings;
