import styles from "./heading.module.scss";


export const Heading = ({text=""}) => {
  return (
    <>
    <div className={styles["dashedContaibner"]}>
      <p className={styles["heading"]}>
        {text}
      </p>
      </div>
    </>
  );
};