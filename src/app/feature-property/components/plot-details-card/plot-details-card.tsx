import styles from './plot-details-card.module.scss';
import { MaxMinProps } from 'app/feature-property/models';

export interface PlotDetailsCardProps {
  area: MaxMinProps;
  areaInSqm: MaxMinProps;
  possession: string;
  propertyStatus: string;
  price: MaxMinProps;
  propertyType: string;
  launched: string;
  rera: string;
}

export const PlotDetailsCard = ({ areaInSqm, area, possession, propertyStatus, price, propertyType, launched, rera }: PlotDetailsCardProps) => {
  return (
    <div>
      <div className={styles['pro_dls_info']}>
        <ul>
          <li>
            <small>Area</small>
            <span>
              {area.max} - {area.min} sq.ft.
              <small className={styles['smtext']}>
                ({area.min} - {area.max} sq.m)
              </small>
            </span>
          </li>
          <li>
            <small>Possession</small>
            <span>
              {possession} ({propertyStatus})
            </span>
          </li>
          <li>
            <small>Price Range</small>
            <span>
              ₹ {price.max} - {price.min}
            </span>
          </li>
          <li>
            <small>Property Type</small>
            <span>{propertyType}</span>
          </li>
          <li>
            <small>Launched Date</small>
            <span>{launched}</span>
          </li>
        </ul>
        <div className={styles['clearfix']}></div>
        <div className={styles['colds']}>
          <div className={styles['rara_info']}>RERA ID </div>
          <span className={styles['rera_dls']}>{rera}</span>
        </div>
      </div>
    </div>
  );
};
