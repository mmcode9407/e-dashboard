export interface ILoginInputs {
   id: string;
   label: string;
   name: InputName;
   placeholder: string;
   type: 'text' | 'password';
   required: boolean;
   pattern?: string;
   errMessage?: string;
}

enum InputName {
   EMAIL = 'email',
   PASSWORD = 'password',
}

const loginInputs: ILoginInputs[] = [
   {
      id: 'email',
      label: 'Email',
      name: InputName.EMAIL,
      placeholder: 'Your email',
      type: 'text',
      required: true,
      pattern: '[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}',
      errMessage: 'Invalid email address',
   },
   {
      id: 'password',
      label: 'Password',
      name: InputName.PASSWORD,
      placeholder: 'Your password',
      type: 'password',
      required: true,
   },
];

export default loginInputs;
