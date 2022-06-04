import styles from './header.module.scss';
import logo from 'libs/shared/assets/my_new_logo.jpg';
export const Header = () => {
  return (
    <header className={styles["container"]}>
      <div className={styles["container-fluid"]}>
        <div className={styles["logo-container"]}>
          <span className="material-icons">menu</span>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};
