import { IFormValues } from 'components/LoginForm/LoginForm';
import { getRespError } from 'utils/getRespError/getRespError';

const API_LINK: string = 'https://training.nerdbord.io/api/v1/auth';

type LoginResponse = {
   token: string;
};

export const login = (data: IFormValues): Promise<LoginResponse> => {
   const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };

   return _fetchData<LoginResponse>(options, '/login');
};

const _fetchData = async <T>(options?: RequestInit, additionalPath?: string): Promise<T> => {
   const API_URL = `${API_LINK}${additionalPath}`;

   try {
      const resp = await fetch(API_URL, options);

      if (resp.status >= 400) {
         const errData = await resp.json();
         throw new Error(errData.message);
      }

      const data: T = await resp.json();
      return data;
   } catch (error) {
      const errMsg = getRespError(error);
      throw new Error(`Failed to fetch data: ${errMsg}`);
   }
};
