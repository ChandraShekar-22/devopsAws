import React from 'react';
import styles from './unit-configuration.module.scss';
import { Header } from '../header/header';

export interface ConfigurationProps {
  unitType: string;
  availablity: string;
  buitUpAreaInSqft: string;
  buitUpAreaInSqm: string;
  carpetAreaInSqft?: string;
  carpetAreaInSqm?: string;
  price: string;
}

export interface UnitConfigurationProps {
  configuarations: ConfigurationProps[];
}
export const UnitConfiguration: React.FC<UnitConfigurationProps> = ({ configuarations }) => {
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
              <div className={styles['body']} key={`${configure.unitType}-${index}`}>
                <div className={styles['col']}>
                  <span>{configure.unitType}</span>
                  <small>
                    Availability*: <b>{configure.availablity}</b>
                  </small>
                </div>
                <div className={styles['col']}>
                  {configure.buitUpAreaInSqft || 'NA'}
                  {configure.buitUpAreaInSqm && <small className={styles['smtext']}> ({configure.buitUpAreaInSqm})</small>}
                </div>
                <div className={styles['col']}>
                  {configure.carpetAreaInSqft || 'NA'}
                  {configure.carpetAreaInSqm && <small className={styles['smtext']}> ({configure.carpetAreaInSqm}) </small>}
                </div>
                <div className={styles['col']}>{configure.price} </div>
                <div className={styles['col']}>
                  <div className={styles['cell']}>
                    <small>
                      <p key='floorplanApartment2 BHK' className={styles['floorplans']}>
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
