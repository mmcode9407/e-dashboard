import React from 'react';
import { Container } from '../components/Container/Container';
import styles from './Dashboard.module.scss';
import { selectUserEmail } from 'data/user/slice';
import { useAppSelector } from 'store/hooks';

export const Dashboard = () => {
   const userEmail = useAppSelector(selectUserEmail);
   return (
      <Container>
         Dashboard view
         <h1>{userEmail}</h1>
      </Container>
   );
};
