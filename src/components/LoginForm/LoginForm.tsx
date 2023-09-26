import React, { useState } from 'react';
import { TextField, Button } from 'nerdux-ui-system';
import { useFormik } from 'formik';
import { useSignIn } from 'react-auth-kit';

import { loginInputs } from 'components/LoginForm/formInputs/formInputs';
import validateForm from 'utils/validateForm/validateForm';
import { login } from 'api/service';

import styles from './LoginForm.module.scss';
import { getErrorMessage } from 'utils/getRespError/getRespError';

export interface IFormValues {
   email: string;
   password: string;
}

export const LoginForm = () => {
   const signIn = useSignIn();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [loginError, setLoginError] = useState<string | null>(null);
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useFormik<IFormValues>({
         initialValues: {
            email: '',
            password: '',
         },
         validate: (values) => {
            return validateForm(values, loginInputs);
         },
         onSubmit: async (values, actions) => {
            setIsLoading(true);
            try {
               const resp = await login(values);

               signIn({
                  token: resp.token,
                  expiresIn: 10,
                  tokenType: 'Bearer',
                  authState: { email: values.email },
               });
               setLoginError(null);
               actions.resetForm();
            } catch (err) {
               if (getErrorMessage(err) === '401') {
                  setLoginError('Invalid email or password');
               } else {
                  console.log(getErrorMessage(err));
               }
            } finally {
               setIsLoading(false);
            }
         },
      });

   return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
         <div className={styles.loginForm__inputBox}>
            {loginInputs.map(({ id, label, name, placeholder, type }) => (
               <TextField
                  key={id}
                  error={touched[name] ? errors[name] : ''}
                  id={id}
                  label={label}
                  name={name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={placeholder}
                  type={type}
                  value={values[name]}
               />
            ))}
         </div>
         <div className={styles.loginForm__buttonBox}>
            <Button onClick={() => {}} isLoading={isLoading} type="submit" variant="primary">
               Login
            </Button>
         </div>
         {loginError && (
            <div className={styles.loginForm__error}>
               <p>{loginError}</p>
            </div>
         )}
      </form>
   );
};
