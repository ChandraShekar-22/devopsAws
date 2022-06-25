import { AboutThePropertyProps } from 'app/feature-property/models';
import { SubHeader } from '../sub-header/sub-header';
import styles from './about-property.module.scss';

export const AboutProperty = ({ more, summary, ...props }: AboutThePropertyProps) => {
  return (
    <div className={styles['container']}>
      <SubHeader title='About The Property' />
      <section className={styles['summary-style']}>{summary}</section>
      <section className={styles['list-container']}>
        {more.map((list) => {
          return (
            <div>
              <p>{list.label}</p>
              {list.elType === 'list' ? (
                <ul>
                  {list.data.map((el) => {
                    return <li>{el}</li>;
                  })}
                </ul>
              ) : list.elType === 'text' ? (
                <span>: {list.data[0]}</span>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
