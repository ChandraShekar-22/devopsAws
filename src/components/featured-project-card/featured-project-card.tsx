import styles from './featured-project-card.module.scss';

interface FeaturedProjectCardProps {
  imageSrc: string;
  price: string;
  title: string;
  address: string;
  flats: string;
  developerName: string;
}

export const FeaturedProjectCard = ({ imageSrc, price, title, address, flats, developerName }: FeaturedProjectCardProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['image-content']}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles['content']}>
        <div className={styles['price']}>{price}</div>
        <h3>{title}</h3>
        <div className={styles['price-text']}>{address}</div>
        <div className={styles['price-text']}>{flats}</div>
        <p>Marketed By: {developerName}</p>
      </div>
    </div>
  );
};
