import { SpecificationsType } from 'app/feature-plot-details/models';
import { Header } from '../header/header';
import styles from './specifications.module.scss';
export interface SpecificationsProps {
  data: SpecificationsType[];
}

export const Specifications = ({ data }: SpecificationsProps) => {
  return (
    <>
      <Header title='Specifications' />
      <section className={styles['spec-container']}>
        {data.map((specification) => {
          return (
            <div className={styles['spec-deatils']} key={specification.label}>
              <p>
                <strong>{specification.label}</strong>
              </p>
              <ul>
                {specification.data.map((label) => {
                  return <li key={label}>{label}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
};
