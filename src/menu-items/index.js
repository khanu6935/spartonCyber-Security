import alerts from './Alerts';
import compliance from './Compliance';
import customers from './Customers';
import devices from './Devices';
import reports from './Reports';
import sndr from './SNDR';
import users from './Users';
import warnings from './Warnings';
// import dashboard from './dashboard';
import inventory from './Inventory';
// import pages from './pages';
// import utilities from './utilities';
// import other from './other';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    customers,
    devices,
    users,
    compliance,
    warnings,
    sndr,
    alerts,
    reports,
    inventory
    // dashboard,
    // pages
    // utilities,
    // other
  ]
};

export default menuItems;
