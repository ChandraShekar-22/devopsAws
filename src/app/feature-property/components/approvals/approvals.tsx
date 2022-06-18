import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { SubHeader } from '../sub-header/sub-header';
import styles from './approvals.module.scss';

export interface ApprovalsProps {
  checkList: { loan: string[]; legal: string[] };
}

export const Approvals = ({ checkList, ...props }: ApprovalsProps) => {
  const tabList = [
    { id: 'loan', name: 'loan' },
    { id: 'legal', name: 'legal approval' },
  ];
  const [activeTab, setActiveTab] = useState('loan');
  const [activeCheckList, setActiveCheckList] = useState<string[]>([]);

  useEffect(() => {
    const newCheckList = checkList[activeTab as keyof typeof checkList] || [];
    setActiveCheckList(newCheckList);
  }, [checkList, activeTab]);
  return (
    <>
      <SubHeader title='Home Loans & Legal Approvals' />
      <section className={styles['container']}>
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
      <section className={styles['check-list']}>
        <Grid container>
          {activeCheckList.map((list) => {
            return (
              <Grid item xs={6} sm={4} key={list}>
                <span>
                  <i className='material-icons'>done</i>
                  {list}
                </span>
              </Grid>
            );
          })}
        </Grid>
      </section>
    </>
  );
};
