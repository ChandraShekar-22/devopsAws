import { PlotDetailsCard } from '../plot-details-card/plot-details-card';
import { PlotGallery } from '../plot-gallery/plot-gallery';
import { UnitConfiguration } from '../unit-configuration/unit-configuration';
import styles from './plot-details.module.scss';
import { Grid } from '@mui/material';
import { PlotAmenities } from '../plot-amenities/plot-amenities';
import { PlotHeader } from '../plot-header/plot-header';

export const PlotDetails = () => {
  return (
    <div>
      <PlotHeader title={'Nambiar Ellegenza Phase I'} builderName={'Nambiar Builders Pvt. Ltd.'} place={'Anekal'} price={'1.65 Cr'} />
      <div className={styles['plot-image-container']}>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={5}>
            <PlotGallery />
          </Grid>
          <Grid item xs={12} sm={7} className={styles['bgColor']}>
            <PlotDetailsCard
              areaInSqFt={'1200 - 2177 sq.ft.'}
              areaInSqm={'111.48 - 202.25 sq.m'}
              possession={'Dec-2025 '}
              possessionTag={'Ongoing'}
              priceRange={'43.15 L - 1.20 Cr'}
              propertyType={'Plot'}
              launchDate={'Dec-2020'}
            />
          </Grid>
        </Grid>
      </div>
      <UnitConfiguration
        configuarations={[
          {
            unitType: '2 BHK Apartment',
            availablity: 'YES',
            buitUpAreaInSqft: '984 - 1252 sq.ft',
            buitUpAreaInSqm: '91.42 - 116.31 sq.m',
            carpetArea: '',
            price: '70.11 L - 89.20 L',
          },
          {
            unitType: '2 BHK Apartment',
            availablity: 'YES',
            buitUpAreaInSqft: '984 - 1252 sq.ft',
            buitUpAreaInSqm: '91.42 - 116.31 sq.m',
            carpetArea: '',
            price: '70.11 L - 89.20 L',
          },
        ]}
      />
      <PlotAmenities />
    </div>
  );
};
