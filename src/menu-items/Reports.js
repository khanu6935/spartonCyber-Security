import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const reports = {
  id: 'reports',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'reportsPanel',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default reports;
