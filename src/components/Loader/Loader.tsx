import React from 'react';
import { Spinner } from 'components/Icons/Icons';

import styles from './Loader.module.scss';

export const Loader = () => (
   <div className={styles.iconSpinner}>
      <Spinner scale={200} color="#b2338690" />
   </div>
);
