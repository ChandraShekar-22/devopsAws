import { Button } from 'components';
import styles from './properties-card.module.scss';

export interface PropertiesCardProps {
  imageSrc: string;
  title: string;
  plotName: string;
  plotPlace: string;
  price: string;
  navigateTo: string;
  onClick: () => void;
  tagName?: string;
  builderName?: string;
}

export const PropertiesCard = ({
  imageSrc,
  title,
  plotName,
  price,
  navigateTo = '#',
  plotPlace,
  onClick,
  tagName = '',
  builderName,
}: PropertiesCardProps) => {
  return (
    <div className={styles['title']}>
      <a className={styles['similar-project']} href={navigateTo} target='_blank' rel='noreferrer'>
        <div className={`${styles['imagesad']} ${styles['bgload']}`}>
          <img alt={title} className='cf-lazyload' src={imageSrc} />
          {!!tagName && <span className={styles['ongoing']}>{tagName}</span>}
        </div>
        <div className={styles['recentlypro']}>
          <h3>{title}</h3>
          <div className={styles['subtext']}>{plotName}</div>
          <div className={styles['subtext']}>{plotPlace}</div>
          <div className={styles['subTile']}>₹ {price}</div>
        </div>
      </a>
      <div className={styles['bddls']}>
        <div className={styles['builderDiv']}>
          <small>Builder</small>
          {builderName}
        </div>
        <Button onClick={onClick}>Contact</Button>
      </div>
    </div>
  );
};
