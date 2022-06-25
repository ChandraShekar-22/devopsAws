import { SpecificationsType } from 'app/feature-property/models';
import { useState } from 'react';
import { SubHeader } from '../sub-header/sub-header';
import styles from './specifications.module.scss';
export interface SpecificationsProps {
  data: SpecificationsType[];
}

export const Specifications = ({ data }: SpecificationsProps) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <SubHeader title='Specifications' />
      <section className={styles['spec-container']} data-expand={`${expand}`}>
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
      <div className={styles['view-more']}>
        <p onClick={() => setExpand((prev) => !prev)}> {expand ? 'View Less' : 'View More'}</p>
      </div>
    </>
  );
};
