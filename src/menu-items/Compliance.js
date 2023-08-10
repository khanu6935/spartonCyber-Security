import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const compliance = {
  id: 'compliance',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'compliancePanel',
      title: 'Compliance',
      type: 'item',
      url: '/compliance',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default compliance;
