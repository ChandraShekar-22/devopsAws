import { Checkbox } from '@mui/material';
import { TextInput, Button } from 'components';
import { useState } from 'react';
import styles from './call-back-card.module.scss';

export const CallBackCard = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className={styles['container']}>
        <h3>Request a Call Back</h3>
        <TextInput
          label={'NAME'}
          value={''}
          onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {}}
          errorMessage={''}
          error={false}
        />
        <TextInput
          label={'EMAIL ID'}
          value={''}
          onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {}}
          errorMessage={''}
          error={false}
        />
        <TextInput
          label={'PHONE NUMBER'}
          value={''}
          onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {}}
          errorMessage={''}
          error={false}
          prefix={'+91'}
        />
        <div className={styles['notification-container']}>
          <Checkbox />
          <section>
            Allow Gmp to send notifications
            <p>You will recieve notifications via SMS, Whatsapp, Email. You can change your preference later.</p>
          </section>
        </div>
        <Button onClick={() => {}} fullWidth buttonType='primary'>
          Request Call Back
        </Button>
        <div className={styles['buttoncl']}>
          I authorise gmpweb.com
          {!showMore && (
            <span
              onClick={() => {
                setShowMore(true);
              }}>
              {' '}
              Read More...
            </span>
          )}
          {showMore && (
            <span>
              {' '}
              (Quikr India Pvt. Ltd.) and its business associates, partners and/or affiliates to call, sms or email me in connection with my
              application or for offering other products and services and I agree to the
              <span
                onClick={() => {
                  setShowMore(false);
                }}>
                {' '}
                ... Less
              </span>
            </span>
          )}
        </div>
      </div>
    </>
  );
};
