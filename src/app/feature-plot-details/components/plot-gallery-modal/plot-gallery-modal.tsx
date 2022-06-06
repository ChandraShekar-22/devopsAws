import React, { useState } from 'react';
import { Modal, Button } from 'components';
import styles from './plot-gallery-modal.module.scss';

export interface PlotGalleryModalProps {
  openModal: boolean;
  closeModal: () => void;
}

export const PlotGalleryModal = ({ openModal, closeModal }: PlotGalleryModalProps) => {
  const tabList = ['Gallery', 'Master Plans', 'Floor Plans', 'Route Maps'];
  const [activeTab, setActiveTab] = useState('Gallery');
  const modalRef = React.useRef<any | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const fullscreen = () => {
    if (document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    } else {
      if (modalRef.current?.requestFullscreen) {
        modalRef.current?.requestFullscreen();
      } else if (modalRef.current?.webkitRequestFullscreen) {
        modalRef.current?.webkitRequestFullscreen();
      } else if (modalRef.current?.msRequestFullscreen) {
        modalRef.current?.msRequestFullscreen();
      }
    }
  };
  return (
    <Modal open={openModal} maxWidth={'xl'}>
      <div className={styles['modal-body']} ref={modalRef}>
        <button type='button' className={styles['closegallery']} onClick={closeModal}>
          <span aria-hidden='true'>×</span>
        </button>
        <section>
          <ul>
            {tabList.map((tab) => {
              return (
                <li
                  className={styles[activeTab === tab ? 'active' : '']}
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                  }}>
                  <span>{tab}</span>
                  <div className='material-ripple-wrapper'>
                    <span className='ripple'></span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div>
            <Button
              buttonType='secondary'
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}>
              Contact
            </Button>
          </div>
        </section>

        <i className='material-icons' onClick={() => setActiveIndex((prevIndex) => prevIndex - 1)}>
          arrow_back_ios
        </i>
        <div className={styles['carousel']}>
          <div className={styles['inner']} style={{ transform: `translateX(${activeIndex * -100}%)` }}>
            <div className={styles['item-container']}>
              <img src='https://teja13.kuikr.com/is/a/f/800x600/gallery_images/original/cf5dde6a634566e.gif' alt='' />
            </div>
            <div className={styles['item-container']}>
              <img src='https://teja12.kuikr.com/is/a/f/800x600/gallery_images/original/563a538350cd1.jpg' alt='' />
            </div>
            <div className={styles['item-container']}>
              <img
                src=' https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/1-tourists-at-eiffel-tower-paris-panoramic-images.jpg'
                alt=''
              />
            </div>
            <div className={styles['item-container']}>
              <img src='https://dmasia.travel/wp-content/uploads/2019/09/vit3-1000x350.jpg' alt='' />
            </div>
          </div>
          <div className={styles['caption-wrapper']}>
            <p className='caption'>{activeIndex + 1}/19:Other</p>
          </div>
        </div>

        <i className='material-icons' onClick={() => setActiveIndex((prevIndex) => prevIndex + 1)}>
          arrow_forward_ios
        </i>
      </div>
    </Modal>
  );
};
