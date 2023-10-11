import { Paths } from 'data/types/types';

interface INavItems {
   title: string;
   url: Paths;
}

export const navItems: INavItems[] = [
   {
      title: 'Dashboard',
      url: Paths.DASHBOARD,
   },
   {
      title: 'Leads',
      url: Paths.LEADS,
   },
];
