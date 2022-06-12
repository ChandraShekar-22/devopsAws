import { useState } from 'react';
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
import { PlotDetailsProps } from 'app/feature-plot-details/models';

export const PlotDetails = ({ media, unit, amenities, area, launched, possession, price, propertyStatus, rera, ...props }: PlotDetailsProps) => {
  const [openModal, setOpenModel] = useState({ isOpen: false, activeTabName: '' });

  return (
    <Grid container spacing={2} style={{ paddingTop: '20px' }} justifyContent='center' alignContent='center'>
      <Grid item md={9}>
        <PlotHeader title={'Nambiar Ellegenza Phase I'} builderName={'Nambiar Builders Pvt. Ltd.'} place={'Anekal'} price={'1.65 Cr'} />
        <div className={styles['plot-image-container']}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <PlotGallery
                openModal={() => {
                  setOpenModel({ isOpen: true, activeTabName: 'gallery' });
                }}
                gallery={media.gallery.slice(0, 3)}
                totalImages={media.gallery.length}
              />
            </Grid>
            <Grid item xs={12} sm={7} className={styles['bgColor']}>
              <PlotDetailsCard
                area={area}
                areaInSqm={{ min: '111.48', max: '202.25' }}
                possession={possession}
                propertyStatus={propertyStatus}
                price={price}
                propertyType={'Plot'}
                launched={launched}
                rera={rera}
              />
            </Grid>
          </Grid>
        </div>
        <UnitConfiguration
          configuarations={unit}
          openModal={() => {
            setOpenModel({ isOpen: true, activeTabName: 'floorPlans' });
          }}
        />
        <MasterPlan
          openModal={() => {
            setOpenModel({ isOpen: true, activeTabName: 'masterPlans' });
          }}
          imageSrc={media.masterPlans[0].path || ''}
        />
        <PlotAmenities amenities={amenities} />
        <PlotGalleryModal
          openModal={openModal.isOpen}
          closeModal={() => {
            setOpenModel({ isOpen: false, activeTabName: '' });
          }}
          activeTabName={openModal.activeTabName}
          slideImages={media}
        />
      </Grid>
      <Grid item className={styles['request-container']}>
        <section>
          <CallBackCard />
        </section>
      </Grid>
      <section className={styles['request-button']}>
        <Button onClick={() => {}} fullWidth buttonType='primary'>
          Contact Us
        </Button>
      </section>
    </Grid>
  );
};
