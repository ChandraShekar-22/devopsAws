import React, { useState } from 'react';
import { Modal } from 'components';
import styles from './plot-gallery-modal.module.scss';

export const PlotGalleryModal = () => {
  const tabList = ['Gallery', 'Master Plans', 'Floor Plans', 'Route Maps'];
  const [activeTab, setActiveTab] = useState('Gallery');
  const modalRef = React.useRef<any | HTMLDivElement>(null);
  const onClick = (fullscreen = false) => {
    console.log(modalRef.current);
    if (!fullscreen) {
      if (modalRef.current?.requestFullscreen) {
        modalRef.current?.requestFullscreen();
      } else if (modalRef.current?.webkitRequestFullscreen) {
        /* Safari */
        modalRef.current?.webkitRequestFullscreen();
      } else if (modalRef.current?.msRequestFullscreen) {
        /* IE11 */
        modalRef.current?.msRequestFullscreen();
      }
    } else {
      if (modalRef.current?.exitFullscreen) {
        modalRef.current?.exitFullscreen();
      } else if (modalRef.current?.webkitExitFullscreen) {
        /* Safari */
        modalRef.current?.webkitExitFullscreen();
      } else if (modalRef.current?.msExitFullscreen) {
        /* IE11 */
        modalRef.current?.msExitFullscreen();
      }
    }
  };
  return (
    <Modal open={true} maxWidth={'xl'}>
      <div className={styles['modal-body']} ref={modalRef}>
        <button onClick={() => onClick()}>click</button>
        <button onClick={() => onClick(true)}>close</button>
        <section>
          <ul className='modal-nav clearfix'>
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
        </section>
      </div>
    </Modal>
  );
};
