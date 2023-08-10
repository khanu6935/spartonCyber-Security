import { IconUser } from '@tabler/icons';

// constant
const icons = { IconUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const users = {
  id: 'users',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'usersPanel',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.IconUser,
      breadcrumbs: false
    }
  ]
};

export default users;
