import { Paths } from 'data/types/types';

interface INavItem {
   title: string;
   path: Paths;
}

export const navItems: INavItem[] = [
   {
      title: 'Dashboard',
      path: Paths.DASHBOARD,
   },
   {
      title: 'Leads',
      path: Paths.LEADS,
   },
];
