import { IFormValues } from 'components/LoginForm/LoginForm';
import { IFormInputs } from 'components/LoginForm/formInputs/formInputs';

const validateForm = (values: IFormValues, fields: IFormInputs[]) => {
   const errors: Partial<IFormValues> = {};

   fields.forEach((field) => {
      const { name, required, pattern, errMessage } = field;
      const value = values[name];

      if (required && !value) {
         errors[name] = 'Required';
      }

      if (pattern) {
         const reg = new RegExp(pattern, 'i');
         if (!reg.test(value)) {
            errors[name] = errMessage;
         }
      }
   });

   return errors;
};

export default validateForm;
