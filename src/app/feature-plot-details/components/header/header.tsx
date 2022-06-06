import styles from './header.module.scss';

export interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <h2 className={styles['section-header']}>{title}</h2>;
};
