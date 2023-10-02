import React from 'react';
import { Container } from '../components/Container/Container';
import styles from './Leads.module.scss';
import { useAppSelector } from 'store/hooks';
import { selectEmail } from 'data/user/slice';

export const Leads = () => {
   const userState = useAppSelector((state) => state);
   const userEmail = selectEmail(userState);

   return (
      <Container>
         Leads view <h2>{userEmail}</h2>
      </Container>
   );
};
