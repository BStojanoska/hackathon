// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const Tasks = lazy(() => import('../pages/protected/Tasks'))
const Volunteers = lazy(() => import('../pages/protected/Volunteers'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/tasks',
    component: Tasks,
  },
  {
    path: '/volunteers',
    component: Volunteers,
  },
]

export default routes
