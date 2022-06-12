import styles from './header.module.scss';
import logo from 'libs/shared/assets/my_new_logo.jpg';
export const Header = () => {
  return (
    <header className={styles["container"]}>
      <div className={styles["container-fluid"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="logo" />
          <div className={styles["cities"]}>
            <a href="#">Bangalore</a>{" "}
            <a href="#">Pune</a>{" "}
            <a href="#">Chennai</a>
          </div>
          <div className={styles["contact"]}>+91 7795058180</div>
        </div>
      </div>
    </header>
  );
};
