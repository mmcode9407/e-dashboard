import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useSignOut } from 'react-auth-kit';
import { Link } from 'nerdux-ui-system';
import { BorderSide } from 'components/BorderSide/BorderSide';
import { persistor } from 'store/configureStore';
import { Paths } from 'App';
import { Container } from 'components/Container/Container';

import borderLeft from '../assets/images/borderLeft.svg';
import borderRight from '../assets/images/borderRight.svg';

import styles from './Layout.module.scss';

export const Layout = () => {
   const signOut = useSignOut();
   const navigate = useNavigate();

   const handleSigningOut = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      persistor.purge();
      signOut();
      navigate(Paths.LOGIN);
   };

   return (
      <Container>
         <BorderSide src={borderLeft} alt="Left border graphic" position="left" />
         <div className={styles.wrapper}>
            <nav className={`${styles.nav} ${styles.innerWrapper}`}>
               <button onClick={handleSigningOut} className={styles.logOutBtn}>
                  <Link to={''} target="_self">
                     Log out
                  </Link>
               </button>
            </nav>
            <div className={styles.innerWrapper}>
               <Outlet />
            </div>
         </div>
         <BorderSide src={borderRight} alt="Right border graphic" position="right" />
      </Container>
   );
};
