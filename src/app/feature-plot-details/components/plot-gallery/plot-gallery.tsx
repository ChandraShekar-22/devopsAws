import { SlideProps } from 'app/feature-plot-details/models';
import styles from './plot-gallery.module.scss';
import noImage from 'libs/shared/assets/no-image.webp';

export interface PlotGalleryProps {
  openModal: () => void;
  gallery: SlideProps[];
  totalImages: number;
}

export const PlotGallery = ({ openModal, gallery, totalImages }: PlotGalleryProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['section-header']}>Gallery</div>
      <div className={`${styles['pro-pnv-img']} ${styles[`photo-count_${gallery.length || 1}`]} ${styles['clearfix']}`}>
        {gallery.length ? (
          gallery.map((image, index) => {
            return (
              <div key={image.id} className={`${styles['pnv-img-wraper']} ${styles['img-responsive']} ${styles['bgload']}`} onClick={openModal}>
                <img title='nambiar-ellegenza-phase-i-bangalore' alt={image.caption} src={image.path} />
                {index === gallery.length - 1 && (
                  <div className={styles['grt5']}>
                    +{totalImages} <span> IMAGES</span>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className={`${styles['pnv-img-wraper']} ${styles['img-responsive']} ${styles['bgload']}`}>
            <img title='nambiar-ellegenza-phase-i-bangalore' alt={''} src={noImage} />
          </div>
        )}
      </div>
    </div>
  );
};
