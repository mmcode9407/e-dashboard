import React from 'react';
import { TextField, Button } from 'nerdux-ui-system';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
   return (
      <form className={styles.loginForm} action="">
         <div className={styles.loginForm__inputBox}>
            <TextField
               error=""
               hint=""
               id="email"
               label="Email"
               name="email"
               onBlur={function noRefCheck() {}}
               onChange={function noRefCheck() {}}
               onClear={function noRefCheck() {}}
               onFocus={function noRefCheck() {}}
               placeholder="Your email"
               type="text"
               value=""
            />
            <TextField
               error=""
               hint=""
               id="password"
               label="Password"
               name="password"
               onBlur={function noRefCheck() {}}
               onChange={function noRefCheck() {}}
               onClear={function noRefCheck() {}}
               onFocus={function noRefCheck() {}}
               placeholder="Your password"
               type="password"
               value=""
            />
         </div>
         <div className={styles.loginForm__buttonBox}>
            <Button onClick={function noRefCheck() {}} type="submit" variant="primary">
               Submit
            </Button>
         </div>
      </form>
   );
};
