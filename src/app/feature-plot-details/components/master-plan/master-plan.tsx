import styles from './master-plan.module.scss';
import { Header } from '../header/header';

export interface MasterPlanProps {
  openModal: () => void;
  imageSrc: string;
}

export const MasterPlan = ({ openModal, imageSrc }: MasterPlanProps) => {
  return (
    <div id={styles['master-plan']}>
      <div className={`${styles['master-plan-outer']} ${styles['bgclolr']}`}>
        <Header title='Master Plan' />
        <div className={styles['master-plan-wrp']}>
          <div className={styles['master-plan-section']}>
            <div
              className={styles['e-model']}
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageSrc})`,
                height: '350px',
              }}></div>
            <div className={styles['e-model-wrp']}>
              <p className={styles['title']}>MASTER PLAN</p>
              <button type='submit' className={styles['btn btn-exp btn-lg']} title='Master Plan - Unishire Belvedere Premia' onClick={openModal}>
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='clearfix'></div>
    </div>
  );
};
