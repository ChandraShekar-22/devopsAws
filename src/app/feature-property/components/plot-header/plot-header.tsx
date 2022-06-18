/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid } from '@mui/material';
import styles from './plot-header.module.scss';
import React from 'react';

export interface PlotHeaderProps {
  title: string;
  builderName: string;
  place: string;
  price: string;
}

export const PlotHeader: React.FC<PlotHeaderProps> = ({ title, builderName, place, price }) => {
  return (
    <div className={styles['_pro_title']}>
      <Grid container>
        <Grid item xs={12} sm={8} md={8} lg={9}>
          <h1>
            <span>{title}</span>
            <p>
              By:
              <a href='#'> {builderName} </a>
              in
              <a href='#'> {place}</a>
            </p>
          </h1>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <h2>
            {price}
            <small>onwards</small>
          </h2>
        </Grid>
      </Grid>
    </div>
  );
};
