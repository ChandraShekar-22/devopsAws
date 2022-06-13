import React, { useEffect, useState } from 'react';
import { Modal } from 'components';
import styles from './plot-gallery-modal.module.scss';
import { MediaProps, SlideProps } from 'app/feature-plot-details/models';

export interface PlotGalleryModalProps {
  openModal: boolean;
  closeModal: () => void;
  slideImages: MediaProps;
  activeTabName: string;
}

export const PlotGalleryModal = ({ openModal, closeModal, slideImages, activeTabName = 'gallery' }: PlotGalleryModalProps) => {
  const tabList = [
    { name: 'Gallery', id: 'gallery' },
    { name: 'Master Plans', id: 'masterPlans' },
    { name: 'Floor Plans', id: 'floorPlans' },
    { name: 'Route Maps', id: 'routeMaps' },
  ];
  const [activeTab, setActiveTab] = useState(activeTabName);
  const modalRef = React.useRef<any | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<SlideProps[]>([]);
  // const fullscreen = () => {
  //   if (document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement) {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     } else if ((document as any).webkitExitFullscreen) {
  //       (document as any).webkitExitFullscreen();
  //     } else if ((document as any).msExitFullscreen) {
  //       (document as any).msExitFullscreen();
  //     }
  //   } else {
  //     if (modalRef.current?.requestFullscreen) {
  //       modalRef.current?.requestFullscreen();
  //     } else if (modalRef.current?.webkitRequestFullscreen) {
  //       modalRef.current?.webkitRequestFullscreen();
  //     } else if (modalRef.current?.msRequestFullscreen) {
  //       modalRef.current?.msRequestFullscreen();
  //     }
  //   }
  // };
  useEffect(() => {
    if (activeTab) {
      setImages(slideImages[activeTab as keyof MediaProps] as SlideProps[]);
      setActiveIndex(0);
    }
  }, [activeTab, slideImages]);
  useEffect(() => {
    setActiveTab(activeTabName);
  }, [activeTabName]);

  const changeImage = (index: number) => {
    setActiveIndex((preIndex) => {
      const newActiceIndex = preIndex + index;
      if (newActiceIndex + 1 > images.length) {
        return 0;
      } else if (newActiceIndex === -1) {
        return images.length - 1;
      } else {
        return newActiceIndex;
      }
    });
  };
  return (
    <Modal open={openModal} maxWidth={'xl'}>
      <div className={styles['modal-body']} ref={modalRef}>
        <section>
          <button type='button' className={styles['closegallery']} onClick={closeModal}>
            <span aria-hidden='true'>×</span>
          </button>
          <ul>
            {tabList.map((tab) => {
              return (
                <li
                  className={styles[activeTab === tab.id ? 'active' : '']}
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}>
                  <span>{tab.name}</span>
                  <div className='material-ripple-wrapper'>
                    <span className='ripple'></span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <i className='material-icons' onClick={() => changeImage(-1)}>
          arrow_back_ios
        </i>
        <div className={styles['carousel']}>
          <div className={styles['inner']} style={{ transform: `translateX(${activeIndex * -100}%)` }}>
            {images.map((image) => {
              return image.path ? (
                <div className={styles['item-container']}>
                  <img src={image.path} alt={image.caption} />
                </div>
              ) : (
                <></>
              );
            })}
          </div>
          <div className={styles['caption-wrapper']}>
            <p className='caption'>
              {activeIndex + 1}/{images.length}
            </p>
          </div>
        </div>

        <i className='material-icons' onClick={() => changeImage(1)}>
          arrow_forward_ios
        </i>
      </div>
    </Modal>
  );
};
