import React from 'react';
import { Link } from 'nerdux-ui-system';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router';
import { NavItem } from './NavItem';
import { navItems } from './navItems/navItems';
import { Paths } from 'data/types/types';
import { persistor } from 'store/configureStore';

import styles from './Nav.module.scss';

export const Nav = () => {
   const signOut = useSignOut();
   const navigate = useNavigate();

   const handleSigningOut = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      persistor.purge();
      signOut();
      navigate(Paths.LOGIN);
   };

   return (
      <nav className={`${styles.nav} ${styles.innerWrapper}`}>
         <ul className={styles.navList}>
            {navItems.map((item) => (
               <NavItem key={item.url} path={item.url}>
                  {item.title}
               </NavItem>
            ))}
         </ul>
         <button onClick={handleSigningOut} className={styles.logOutBtn}>
            <Link to={''} target="_self">
               Log out
            </Link>
         </button>
      </nav>
   );
};
