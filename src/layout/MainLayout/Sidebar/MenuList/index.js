// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({ activeText }) => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} activeText={activeText} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="black" align="center">
            Menu Items
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
