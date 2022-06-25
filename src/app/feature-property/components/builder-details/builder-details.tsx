import { BuilderProps } from 'app/feature-property/models';
import { SubHeader } from '../sub-header/sub-header';
import styles from './builder-details.module.scss';

export const BuilderDetails = ({ name, about }: BuilderProps) => {
  return (
    <div>
      <SubHeader title={name} />
      <section className={styles['details-about']}>{about}</section>
    </div>
  );
};
