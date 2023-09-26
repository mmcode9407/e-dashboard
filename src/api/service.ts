import { IFormValues } from 'components/LoginForm/LoginForm';

const API_LINK: string = 'https://training.nerdbord.io/api/v1/auth';

interface IFetchOptions {
   method: 'POST';
   body?: string;
   headers?: {
      'Content-Type': 'application/json';
   };
}

type loginResponse = {
   token: string;
};

export const login = (data: IFormValues): Promise<loginResponse> => {
   const options: IFetchOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };

   return _fetchData(options, '/login');
};

const _fetchData = async (options: IFetchOptions, additionalPath = '') => {
   const API_URL = `${API_LINK}${additionalPath}`;

   const resp = await fetch(API_URL, options);

   if (resp.ok) {
      return resp.json();
   }

   if (resp.status === 401) {
      throw new Error(resp.status.toString());
   }
};
