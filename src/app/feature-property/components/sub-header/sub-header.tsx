import styles from './sub-header.module.scss';

export interface SubHeaderProps {
  title: string;
}

export const SubHeader = ({ title }: SubHeaderProps) => {
  return <h2 className={styles['section-header']}>{title}</h2>;
};
