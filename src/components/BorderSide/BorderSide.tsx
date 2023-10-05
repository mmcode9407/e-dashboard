import React from 'react';

import styles from './BorderSide.module.scss';

interface IBorderSideProps {
   src: string;
   alt: string;
   position: 'left' | 'right';
}

export const BorderSide = ({ src, alt, position }: IBorderSideProps) => (
   <img className={`${styles.image} ${styles[position]}`} src={src} alt={alt} />
);
