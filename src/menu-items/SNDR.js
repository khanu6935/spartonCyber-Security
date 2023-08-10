import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const sndr = {
  id: 'sndr',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'sndrPanel',
      title: 'SNDR',
      type: 'item',
      url: '/sndr',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default sndr;
