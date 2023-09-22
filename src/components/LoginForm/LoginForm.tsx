import React from 'react';
import { TextField, Button } from 'nerdux-ui-system';
import { useFormik } from 'formik';

import styles from './LoginForm.module.scss';
import loginFormInputs from 'data/loginFormInputs/loginFormInputs';
import validateForm from 'utils/validateForm/validateForm';

export interface IFormValues {
   email: string;
   password: string;
}

export const LoginForm = () => {
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useFormik<IFormValues>({
         initialValues: {
            email: '',
            password: '',
         },
         validate: (values) => {
            return validateForm(values, loginFormInputs);
         },
         onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm();
         },
      });

   return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
         <div className={styles.loginForm__inputBox}>
            {loginFormInputs.map(({ id, label, name, placeholder, type }) => (
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
            <Button onClick={function noRefCheck() {}} type="submit" variant="primary">
               Login
            </Button>
         </div>
      </form>
   );
};
