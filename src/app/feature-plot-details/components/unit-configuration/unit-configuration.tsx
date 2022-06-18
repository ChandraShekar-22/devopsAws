import React from 'react';
import styles from './unit-configuration.module.scss';
import { Header } from '../header/header';
import { UnitProps } from 'app/feature-plot-details/models';

export interface UnitConfigurationProps {
  configuarations: UnitProps[];
  openModal: () => void;
}
export const UnitConfiguration: React.FC<UnitConfigurationProps> = ({ configuarations, openModal }) => {
  return (
    <>
      <Header title='Unit Configuration' />
      <div className={styles['prounitdls']}>
        <div className={styles['unitdetails']}>
          <div className={styles['header']}>
            <div className={styles['col']}>Unit Types</div>
            <div className={styles['col']}>Super Built-Up Area</div>
            <div className={styles['col']}>Carpet Area</div>
            <div className={styles['col']}>Price</div>
            <div className={styles['col']}>Floor Plans | Live-in Tour</div>
          </div>
          {configuarations.map((configure, index) => {
            return (
              <div className={styles['body']} key={`${configure.type}-${index}`}>
                <div className={styles['col']}>
                  <span>{configure.type}</span>
                  <small>
                    Availability*: <b>{configure.available ? 'Yes' : 'Sold Out'}</b>
                  </small>
                </div>
                <div className={styles['col']}>
                  {configure.builtUpArea.min.toLowerCase() !== 'na' ? (
                    <>
                      {configure.builtUpArea.min} - {configure.builtUpArea.max} sq.ft.
                    </>
                  ) : (
                    'Na'
                  )}
                  {configure.buitUpAreaInSqm && configure.buitUpAreaInSqm.min.toLowerCase() !== 'na' && (
                    <small className={styles['smtext']}>
                      ({configure.buitUpAreaInSqm.min} - {configure.buitUpAreaInSqm.max} sq.m)
                    </small>
                  )}
                </div>
                <div className={styles['col']}>
                  {configure.carpetArea.min.toLowerCase() !== 'na' ? (
                    <>
                      {configure.carpetArea.min} - {configure.carpetArea.max} sq.ft.
                    </>
                  ) : (
                    'NA'
                  )}
                  {configure.carpetAreaInSqm && configure.carpetAreaInSqm.min.toLowerCase() !== 'na' && (
                    <small className={styles['smtext']}>
                      {' '}
                      ({configure.carpetAreaInSqm.min} - {configure.carpetAreaInSqm.max} sq.m)
                    </small>
                  )}
                </div>
                <div className={styles['col']}>
                  {configure.price.min} - {configure.price.max}
                </div>
                <div className={styles['col']}>
                  <div className={styles['cell']}>
                    <small>
                      <p key='floorplanApartment2 BHK' className={styles['floorplans']} onClick={openModal}>
                        <span className={styles['icon-floorplan-01']}></span>
                      </p>
                    </small>
                  </div>
                  <div>
                    <small>NA</small>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles['avlabel']}>
            *Availability <b>Yes/Sold Out</b> depicts Availability with Builder only.Taxes and other charges may apply.
            <span>Last Updated on 02-Jun-2022 </span>
          </div>
        </div>
      </div>
    </>
  );
};
