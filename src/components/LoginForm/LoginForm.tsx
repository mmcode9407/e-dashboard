import React, { useState } from 'react';
import { TextField, Button } from 'nerdux-ui-system';
import { useFormik } from 'formik';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

import { loginInputs } from 'components/LoginForm/formInputs/formInputs';
import validateForm from 'utils/validateForm/validateForm';
import { getRespError } from 'utils/getRespError/getRespError';
import { login } from 'api/service';
import { useAppDispatch } from 'store/hooks';
import { fetchUserByToken } from 'data/user/slice';
import { Paths } from 'data/types/types';

import styles from './LoginForm.module.scss';

export interface IFormValues {
   email: string;
   password: string;
}

export const LoginForm = () => {
   const dispatch = useAppDispatch();
   const signIn = useSignIn();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [loginError, setLoginError] = useState<string | null>(null);
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useFormik<IFormValues>({
         initialValues: {
            email: 'dev@nerdbord.io',
            password: 'catsanddogs',
         },
         validate: (values) => {
            return validateForm(values, loginInputs);
         },
         onSubmit: async (values, actions) => {
            setIsLoading(true);

            try {
               const { token } = await login(values);
               await dispatch(fetchUserByToken(token));

               signIn({
                  token: token,
                  expiresIn: 3600,
                  tokenType: 'Bearer',
                  authState: { email: values.email },
               });

               setLoginError(null);
               actions.resetForm();
               navigate(Paths.DASHBOARD);
            } catch (err) {
               const errMsg = getRespError(err);
               setLoginError(errMsg);
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
