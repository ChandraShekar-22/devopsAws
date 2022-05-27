import styles from './location-box.module.scss';

interface LocationBoxProps {
  title: string;
  saleTag: string;
  rentTag: string;
}

export const LocationBox = ({ title, saleTag, rentTag }: LocationBoxProps) => {
  return (
    <div className={styles['container']}>
      <h2>{title}</h2>
      <p>
        <span>{saleTag}</span>
        <span>{rentTag}</span>
      </p>
    </div>
  );
};
