import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const alerts = {
  id: 'alerts',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'alertsPanel',
      title: 'Alerts',
      type: 'item',
      url: '/alerts',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default alerts;
