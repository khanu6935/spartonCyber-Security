import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const Customers = Loadable(lazy(() => import('views/Customers/Customers')));
const Deveces = Loadable(lazy(() => import('views/devices/Devices')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Customers />
    },
    {
      path: 'customers',
      element: <Customers />
      // children: [
      //   {
      //     path: 'default',
      //     element: <DashboardDefault />
      //   }
      // ]
    },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-typography',
    //       element: <UtilsTypography />
    //     }
    //   ]
    // },
    {
      // path: 'inventory',
      // element: <Inventory />
      // children: [
      //   {
      //     path: 'util-typography',
      //     element: <UtilsTypography />
      //   }
      // ]
    },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-shadow',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'devices',
      element: <Deveces />
    }
  ]
};

export default MainRoutes;
