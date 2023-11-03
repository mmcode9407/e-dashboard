import React from 'react';
import { Container } from '../../components/Container/Container';
import { BorderSide } from 'components/BorderSide/BorderSide';
import { LoginForm } from 'components/LoginForm/LoginForm';

import borderLeft from '../../assets/images/borderLeft.svg';
import welcomeImg from '../../assets/images/welcome.svg';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
   return (
      <main>
         <Container>
            <BorderSide src={borderLeft} alt="Left border graphic" position="left" />
            <div className={styles.wrapper}>
               <header className={styles.header}>
                  <h1 className={styles.header__title}>Welcome back</h1>
                  <p className={styles.header__text}>Login to continue</p>
               </header>
               <LoginForm />
            </div>
            <BorderSide src={welcomeImg} alt="Right border graphic" position="right" />
         </Container>
      </main>
   );
};
