import styles from './plot-details-card.module.scss';

export interface PlotDetailsCardProps {
  areaInSqFt: string;
  areaInSqm: string;
  possession: string;
  possessionTag: string;
  priceRange: string;
  propertyType: string;
  launchDate: string;
}

export const PlotDetailsCard = ({ areaInSqFt, areaInSqm, possession, possessionTag, priceRange, propertyType, launchDate }: PlotDetailsCardProps) => {
  return (
    <div>
      <div className={styles['pro_dls_info']}>
        <ul>
          <li>
            <small>Area</small>
            <span>
              {areaInSqFt}
              <small className={styles['smtext']}>({areaInSqm})</small>
            </span>
          </li>
          <li>
            <small>Possession</small>
            <span>
              {possession} <i>({possessionTag})</i>
            </span>
          </li>
          <li>
            <small>Price Range</small>
            <span>₹ {priceRange}</span>
          </li>
          <li>
            <small>Property Type</small>
            <span>{propertyType}</span>
          </li>
          <li>
            <small>Launched Date</small>
            <span>{launchDate}</span>
          </li>
        </ul>
        <div className={styles['clearfix']}></div>
        {/* <div className={styles['colds']}>
          <div className={styles['rara_info']}>RERA ID </div>
          <span className={styles['rera_dls']}>
            PRM/KA/RERA/1251/308/PR/2 ...
            <span data-toggle='modal' data-target='#reraModal'>
              Show More
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
};
