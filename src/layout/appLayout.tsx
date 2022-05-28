import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';
import styles from './appLayout.module.scss';

export const AppLayout = () => {
  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles['container']}>
        <Outlet />
      </div>
    </div>
  );
};
