﻿import { IFormValues } from 'components/LoginForm/LoginForm';
import { LeadDto } from 'data/leads/dto';
import { UserDto } from 'data/user/dto';
import { getRespError } from 'utils/getRespError/getRespError';

const API_LINK: string = 'https://training.nerdbord.io/api/v1';

interface ILoginResponse {
   token: string;
}

interface IUserResp {
   user: UserDto;
}

export const login = (data: IFormValues): Promise<ILoginResponse> => {
   const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };

   return _fetchData<ILoginResponse>(options, '/auth/login');
};

export const getUser = (token: string): Promise<IUserResp> => {
   const options: RequestInit = {
      method: 'GET',
      headers: {
         authorization: `Bearer ${token}`,
      },
   };

   return _fetchData<IUserResp>(options, '/auth/me');
};

export const getLeads = (): Promise<LeadDto[]> => {
   const options: RequestInit = {
      method: 'GET',
   };

   return _fetchData<LeadDto[]>(options, '/leads');
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
