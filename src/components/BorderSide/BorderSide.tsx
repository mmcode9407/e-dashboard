import React from 'react';

import styles from './BorderSide.module.scss';

interface IBorderSideProps {
   src: string;
   alt: string;
}

export const BorderSide = ({ src, alt }: IBorderSideProps) => (
   <img className={styles.image} src={src} alt={alt} />
);
