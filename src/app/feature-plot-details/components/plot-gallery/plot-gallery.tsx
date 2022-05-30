import styles from './plot-gallery.module.scss';

export const PlotGallery = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['section-header']}>Gallery</div>
      <div className={`${styles['pro-pnv-img']} ${styles['photo-count_3']} ${styles['clearfix']}`}>
        <div className={`${styles['pnv-img-wraper']} ${styles['img-responsive']} ${styles['bgload']}`}>
          <img
            title='nambiar-ellegenza-phase-i-bangalore'
            alt='nambiar-ellegenza-phase-i-bangalore'
            src='https://teja12.kuikr.com/is/a/c/570x430/gallery_images/original/cf603c96a049543.gif'
          />
        </div>
        <div className={`${styles['pnv-img-wraper']} ${styles['img-responsive']} ${styles['bgload']}`}>
          <img
            title='nambiar-ellegenza-phase-i-bangalore'
            alt='nambiar-ellegenza-phase-i-bangalore'
            src='https://teja12.kuikr.com/is/a/c/280x210/gallery_images/original/cf603c98b615315.gif'
          />
        </div>
        <div className={`${styles['pnv-img-wraper']} ${styles['img-responsive']} ${styles['bgload']}`}>
          <img
            title='nambiar-ellegenza-phase-i-bangalore'
            alt='nambiar-ellegenza-phase-i-bangalore'
            src='https://teja12.kuikr.com/is/a/c/280x210/gallery_images/original/cf603c98b5e8017.gif'
          />
          <div className={styles['grt5']}>
            +14 <span> IMAGES</span>
          </div>
        </div>
      </div>
    </div>
  );
};
