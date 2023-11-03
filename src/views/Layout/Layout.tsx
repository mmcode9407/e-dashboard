import React from 'react';
import { Outlet } from 'react-router';
import { BorderSide } from 'components/BorderSide/BorderSide';
import { Container } from 'components/Container/Container';
import { Nav } from 'components/Nav/Nav';

import borderLeft from '../../assets/images/borderLeft.svg';
import borderRight from '../../assets/images/borderRight.svg';

import styles from './Layout.module.scss';

export const Layout = () => {
   return (
      <Container>
         <BorderSide src={borderLeft} alt="Left border graphic" position="left" />
         <div className={styles.wrapper}>
            <Nav />
            <div className={styles.innerWrapper}>
               <Outlet />
            </div>
         </div>
         <BorderSide src={borderRight} alt="Right border graphic" position="right" />
      </Container>
   );
};
