import React from 'react';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router';
import { NavItem } from './NavItem';
import { navItems } from './navItems/navItems';
import { Paths } from 'data/types/types';
import { persistor } from 'store/configureStore';

import styles from './Nav.module.scss';
import { useAppSelector } from 'store/hooks';
import { selectUserEmail } from 'data/user/slice';

export const Nav = () => {
   const signOut = useSignOut();
   const navigate = useNavigate();
   const userEmail = useAppSelector(selectUserEmail);

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
               <NavItem key={item.path} path={item.path}>
                  {item.title}
               </NavItem>
            ))}
         </ul>
         <div className={styles.userBox}>
            <p className={styles.logged}>
               Logged in as: <span className={styles.userEmail}>{userEmail}</span>
            </p>
            <button onClick={handleSigningOut} className={styles.logOutBtn}>
               Log out
            </button>
         </div>
      </nav>
   );
};
