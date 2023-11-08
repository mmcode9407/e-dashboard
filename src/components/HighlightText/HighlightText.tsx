import React from 'react';

import styles from './HighLightText.module.scss';

export const HighlightText = ({
   text,
   searchText,
}: {
   text: string | undefined;
   searchText: string | null;
}) => {
   if (text && searchText) {
      const parts = text.split(new RegExp(`(${searchText})`, 'gi'));
      return (
         <>
            {parts.map((part, index) =>
               part.toLowerCase() === searchText.toLowerCase() ? (
                  <span key={index} className={styles.highlighted}>
                     {part}
                  </span>
               ) : (
                  part
               ),
            )}
         </>
      );
   }

   return <>{text}</>;
};
