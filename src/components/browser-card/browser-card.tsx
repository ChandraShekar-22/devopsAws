import React from 'react';
import styles from './browser-card.module.scss';
import noImage from 'libs/shared/assets/no-image.webp';

interface BrowserCardProps {
  title: string;
  priceList: string[];
  imageSrc?: string;
}

export const BrowserCard = ({ title, priceList, imageSrc }: BrowserCardProps) => {
  return (
    <div className={styles['container']}>
      <img src={imageSrc || noImage} alt={title} />
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
