import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/liste-transaction',
    title: 'Liste Transaction',
    icon: 'bi bi-bell',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/send-money',
    title: " Faire Une Transaction",
    icon: 'bi bi-send',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/receive-money',
    title: "Recevoir de l' argent",
    icon: 'bi bi-bell',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/about',
    title: " About",
    icon: 'bi bi-bell',
    class: '',
    extralink: false,
    submenu: []
  },
  
];
