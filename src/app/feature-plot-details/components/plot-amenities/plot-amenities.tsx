import { Grid } from '@mui/material';
import styles from './plot-amenities.module.scss';

export const PlotAmenities = () => {
  return (
    <>
      <div className={`${styles['bgclolr']} ${styles['amenitiesb']} ${styles['mmrbtnone']}`}>
        <Grid container>
          <Grid item xs={12}>
            <h2 className={styles['section-header']}>Amenities - Nambiar Ellegenza Phase I </h2>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className={styles['contenttext']}>
              <div className={styles['amtlist']}>
                <ul>
                  <li>
                    <span className={styles['title']}> Society</span>
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    24Hrs Water Supply
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}>
                      <svg className='amphitheater' width='25px' height='25px'></svg>
                    </i>
                    Amphitheater
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    Basket Ball Court
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    CCTV Cameras
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    Club House
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    Basket Ball Court
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    CCTV Cameras
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    Club House
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    Basket Ball Court
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    CCTV Cameras
                  </li>
                  <li>
                    <i className={styles['amenities-icon']}></i>
                    Club House
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
