import styles from './button.module.scss';

export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  buttonType?: 'outlined' | 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, buttonType = 'outlined', fullWidth = false, ...props }) => {
  return (
    <button className={`${styles['button']} ${styles[`${buttonType}-button`]} ${fullWidth && styles['button-width-full']}`} onClick={onClick}>
      {props.children}
    </button>
  );
};
