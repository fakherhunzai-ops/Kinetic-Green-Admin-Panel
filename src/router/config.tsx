import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const VehicleDetail = lazy(() => import('../pages/vehicle-detail/page'));
const Vehicles = lazy(() => import('../pages/vehicles/page'));
const B2B = lazy(() => import('../pages/b2b/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const AdminLogin = lazy(() => import('../pages/admin/login/page'));
const AdminDashboard = lazy(() => import('../pages/admin/dashboard/page'));
const LeadsInbox = lazy(() => import('../pages/admin/leads/page'));
const ProductsManagement = lazy(() => import('../pages/admin/products/page'));
const ProductDetail = lazy(() => import('../pages/admin/products/detail/page'));
const DealersManagement = lazy(() => import('../pages/admin/dealers/page'));
const CareersManagement = lazy(() => import('../pages/admin/careers/page'));
const CMSBuilder = lazy(() => import('../pages/admin/cms/page'));
const Settings = lazy(() => import('../pages/admin/settings/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/vehicle/:id',
    element: <VehicleDetail />
  },
  {
    path: '/vehicles',
    element: <Vehicles />
  },
  {
    path: '/b2b',
    element: <B2B />
  },
  {
    path: '/admin/login',
    element: <AdminLogin />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />
  },
  {
    path: '/admin/leads',
    element: <LeadsInbox />
  },
  {
    path: '/admin/products',
    element: <ProductsManagement />
  },
  {
    path: '/admin/products/:id',
    element: <ProductDetail />
  },
  {
    path: '/admin/dealers',
    element: <DealersManagement />
  },
  {
    path: '/admin/careers',
    element: <CareersManagement />
  },
  {
    path: '/admin/cms',
    element: <CMSBuilder />
  },
  {
    path: '/admin/settings',
    element: <Settings />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
