import React, { PropsWithChildren } from 'react';
import { Link } from 'nerdux-ui-system';
import { useLocation } from 'react-router';

import styles from './NavItem.module.scss';

interface INavItemProps extends PropsWithChildren {
   path: string;
}

export const NavItem = ({ path, children }: INavItemProps) => {
   const { pathname } = useLocation();
   const isActive = pathname === path;

   return (
      <li className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
         <Link to={path} target="_self">
            {children}
         </Link>
      </li>
   );
};
