import React from 'react';
import styles from './browser-card.module.scss';

interface BrowserCardProps {
  title: string;
  priceList: string[];
  imageSrc: string;
}

export const BrowserCard = ({ title, priceList, imageSrc }: BrowserCardProps) => {
  return (
    <div className={styles['container']}>
      <img src={imageSrc} alt={title} />
      <ul>
        <li>
          <h2>{title}</h2>
          {priceList.map((price) => (
            <span key={price}>{price}</span>
          ))}
        </li>
      </ul>
    </div>
  );
};
