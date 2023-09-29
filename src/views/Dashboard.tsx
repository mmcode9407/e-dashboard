import React from 'react';
import { Container } from '../components/Container/Container';
import styles from './Dashboard.module.scss';
import { selectEmail } from 'features/user/userSlice';
import { useAppSelector } from 'store/hooks';

export const Dashboard = () => {
   const userState = useAppSelector((state) => state);
   const userEmail = selectEmail(userState);
   return (
      <Container>
         Dashboard view
         <h1>{userEmail}</h1>
      </Container>
   );
};
