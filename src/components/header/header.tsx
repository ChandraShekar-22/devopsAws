import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles['container']}>
      <div className={styles['container-fluid']}>
        <div className={styles['logo-container']}>
          <span className='material-icons'>menu</span>
          <img src={'https://teja8.kuikr.com/cfassets/images/cf_logo_new.png'} alt='logo' width={220} />
        </div>
      </div>
    </header>
  );
};
