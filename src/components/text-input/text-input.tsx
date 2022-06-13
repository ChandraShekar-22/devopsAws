import { useState } from 'react';
import styles from './text-input.module.scss';

export interface TextInputProps {
  label: string;
  prefix?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  error: boolean;
  type?: React.HTMLInputTypeAttribute;
}

export const TextInput = ({ label, prefix, value, onChange, errorMessage, error, type }: TextInputProps) => {
  return (
    <div id={styles['float-label']}>
      <div className={styles['input-container']}>
        {!!prefix && <div>{prefix}</div>}
        <input type={type} value={value} onChange={onChange} />
      </div>
      <label htmlFor='email' className={(value || prefix) && styles['filled']}>
        {label}
      </label>
      {error && <span className={styles['error']}>{errorMessage}</span>}
    </div>
  );
};
