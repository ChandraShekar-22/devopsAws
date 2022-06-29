import { useState } from 'react';
import styles from './home.module.scss';
export const FeatureHome = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onDelete = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...[...prev].slice(0, index), ...[...prev].slice(index + 1)];
      return newFiles;
    });
  };
  return (
    <div className={styles['grid-layout']}>
      {files.map((file, index) => {
        const image = URL.createObjectURL(file);
        return (
          <section className={styles['image-container']}>
            <img src={image} alt='kite-1' key={image} />
            <i className='material-icons' onClick={() => onDelete(index)}>
              delete
            </i>
          </section>
        );
      })}
      <div className={styles['file-area']}>
        <input
          type='file'
          value={''}
          onChange={(e) => {
            if (e.target?.files?.[0]) {
              const file = e.target.files[0];
              setFiles((prev) => [...prev, file]);
            }
          }}
        />
        <section>
          <i className='material-icons'>add</i>
        </section>
      </div>
    </div>
  );
};
