import { PlotDetailsCard } from '../plot-details-card/plot-details-card';
import { PlotGallery } from '../plot-gallery/plot-gallery';
import { UnitConfiguration } from '../unit-configuration/unit-configuration';
import styles from './plot-details.module.scss';
import { Grid } from '@mui/material';
import { PlotAmenities } from '../plot-amenities/plot-amenities';
import { PlotHeader } from '../plot-header/plot-header';
import { PlotGalleryModal } from '../plot-gallery-modal/plot-gallery-modal';
import { Button, CallBackCard } from 'components';
import { MasterPlan } from '../master-plan/master-plan';

export const PlotDetails = () => {
  return (
    <Grid container spacing={2} style={{ paddingTop: '20px' }}>
      <Grid item sm={12} md={8}>
        <PlotHeader title={'Nambiar Ellegenza Phase I'} builderName={'Nambiar Builders Pvt. Ltd.'} place={'Anekal'} price={'1.65 Cr'} />
        <div className={styles['plot-image-container']}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
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
              price: '70.11 L - 89.20 L',
            },
            {
              unitType: '2 BHK Apartment',
              availablity: 'YES',
              buitUpAreaInSqft: '984 - 1252 sq.ft',
              buitUpAreaInSqm: '91.42 - 116.31 sq.m',
              price: '70.11 L - 89.20 L',
            },
            {
              unitType: '2 BHK Apartment',
              availablity: 'YES',
              buitUpAreaInSqft: '984 - 1252 sq.ft',
              buitUpAreaInSqm: '91.42 - 116.31 sq.m',
              price: '70.11 L - 89.20 L',
            },
          ]}
        />
        <MasterPlan />
        <PlotAmenities />
        <PlotGalleryModal />
      </Grid>
      <Grid item>
        <div style={{ position: 'sticky', top: '0px' }}>
          <CallBackCard />
        </div>
        <div style={{ position: 'fixed', bottom: 0, width: '100%', left: 0 }}>
          <Button onClick={() => {}} fullWidth buttonType='primary'>
            Contact Us
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
