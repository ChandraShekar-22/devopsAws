import { Grid } from '@mui/material';
import { Amenities } from 'app/feature-plot-details/models';
import { Header } from '../header/header';
import styles from './plot-amenities.module.scss';

export interface PlotAmenitiesProps {
  amenities: Amenities[];
}

export const PlotAmenities = ({ amenities }: PlotAmenitiesProps) => {
  return (
    <div className={styles['container']}>
      <div className={`${styles['bgclolr']} ${styles['amenitiesb']} ${styles['mmrbtnone']}`}>
        <Header title={'Amenities - Nambiar Ellegenza Phase I'} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={styles['contenttext']}>
              {amenities.map((amenity) => {
                return (
                  <div key={amenity.label} className={styles['amtlist']}>
                    <ul>
                      <li>{<span className={styles['title']}>{amenity.label}</span>}</li>
                      {amenity.data.map((list, index) => {
                        return (
                          <li key={list + index}>
                            <i className={styles['amenities-icon']}></i>
                            {list}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
