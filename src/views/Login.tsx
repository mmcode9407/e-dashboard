import React from 'react';
import { Container } from '../components/Container/Container';
import { Button } from 'nerdux-ui-system';

import styles from './Login.module.scss';

export const Login = () => {
   return (
      <main>
         <Container>
            <header className={styles.wrapper}>
               <h1>E-dashboard project</h1>
               <Button
                  variant={'primary'}
                  onClick={() => {
                     window.open('https://nerdux.nerdbord.io', '_blank');
                  }}
               >
                  Open UI components documentation
               </Button>
            </header>
         </Container>
      </main>
   );
};
