'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import UpButton from '../../components/UpButton/index';
import styles from './style.module.scss';

const ThirdParagraph = () => {
  const [showButton, setShowButton] = useState(true);
  const [timer, setTimer] = useState(undefined);
  const [width, setWidth] = useState(1440);
  const { t } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(true);
      if (timer !== undefined) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => setShowButton(false), 3000);
      setTimer(newTimer);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <div className={styles['privacy__content_block']} ref={ref}>
      <UpButton inView={inView} showButton={showButton} />
      <h3>{t('policy-common-3')}</h3>
      <p>{t('policy-common-3-about-1')}</p>
      <p>{t('policy-common-3-about-1-li-1')}</p>
      <p>{t('policy-common-3-about-1-li-2')}</p>
      <p>{t('policy-common-3-about-1-li-3')}</p>
      <p>{t('policy-common-3-about-2')}</p>
      <p>{t('policy-common-3-about-2-li-1')}</p>
      <p>{t('policy-common-3-about-2-li-2')}</p>
      <p>{t('policy-common-3-about-2-li-3')}</p>
      <p>{t('policy-common-3-about-2-li-4')}</p>
      <p>{t('policy-common-3-about-2-li-5')}</p>
      <p>{t('policy-common-3-about-2-li-6')}</p>
      <p>{t('policy-common-3-about-2-li-7')}</p>
      <p>{t('policy-common-3-about-2-li-8')}</p>
    </div>
  );
};

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <main className={styles['privacy']}>
      <div className={styles['privacy__container']}>
        <div className={styles['privacy__title']}>
          <h2>{t('policy-title')}</h2>
          <h3>{t('policy-subtitle')}</h3>
        </div>
        <div className={styles['privacy__content']}>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-1')}</h3>
            <p>{t('policy-common-1-about')}</p>
            <p>{t('policy-common-1-about-1')}</p>
            <p>{t('policy-common-1-about-2')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-2')}</h3>
            <p>{t('policy-common-2-about-1')}</p>
            <p>{t('policy-common-2-about-2')}</p>
            <p>{t('policy-common-2-about-3')}</p>
            <p>{t('policy-common-2-about-4')}</p>
            <p>{t('policy-common-2-about-5')}</p>
            <p>{t('policy-common-2-about-6')}</p>
            <p>{t('policy-common-2-about-7')}</p>
            <p>{t('policy-common-2-about-8')}</p>
            <p>{t('policy-common-2-about-9')}</p>
            <p>{t('policy-common-2-about-10')}</p>
            <p>{t('policy-common-2-about-11')}</p>
            <p>{t('policy-common-2-about-12')}</p>
            <p>{t('policy-common-2-about-13')}</p>
            <p>{t('policy-common-2-about-14')}</p>
          </div>
          <ThirdParagraph />
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-4')}</h3>
            <p>{t('policy-common-4-about-1')}</p>
            <p>{t('policy-common-4-about-1-li-1')}</p>
            <p>{t('policy-common-4-about-1-li-2')}</p>
            <p>{t('policy-common-4-about-1-li-3')}</p>
            <p>{t('policy-common-4-about-1-li-4')}</p>
            <p>{t('policy-common-4-about-1-li-5')}</p>
            <p>{t('policy-common-4-about-1-li-6')}</p>
            <p>{t('policy-common-4-about-2')}</p>
            <p>{t('policy-common-4-about-2-li-1')}</p>
            <p>{t('policy-common-4-about-2-li-2')}</p>
            <p>{t('policy-common-4-about-3')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-5')}</h3>
            <p>{t('policy-common-5-li-1')}</p>
            <p>{t('policy-common-5-li-2')}</p>
            <p>{t('policy-common-5-li-3')}</p>
            <p>{t('policy-common-5-li-4')}</p>
            <p>{t('policy-common-5-li-5')}</p>
            <p>{t('policy-common-5-li-6')}</p>
            <p>{t('policy-common-5-li-7')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-6')}</h3>
            <p>{t('policy-common-6-li-1')}</p>
            <p>{t('policy-common-6-li-2')}</p>
            <p>{t('policy-common-6-li-3')}</p>
            <p>{t('policy-common-6-li-4')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-7')}</h3>
            <p>{t('policy-common-7-li-1')}</p>
            <p>{t('policy-common-7-li-2')}</p>
            <p>{t('policy-common-7-li-3')}</p>
            <p>{t('policy-common-7-li-4')}</p>
            <p>{t('policy-common-7-li-5')}</p>
            <p>{t('policy-common-7-li-6')}</p>
            <p>{t('policy-common-7-li-7')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-8')}</h3>
            <p>{t('policy-common-8-about')}</p>
            <p>{t('policy-common-8-li-1')}</p>
            <p>{t('policy-common-8-li-2')}</p>
            <p>{t('policy-common-8-li-3')}</p>
            <p>{t('policy-common-8-li-4')}</p>
            <p>{t('policy-common-8-li-5')}</p>
            <p>{t('policy-common-8-li-6')}</p>
            <p>{t('policy-common-8-li-7')}</p>
            <p>{t('policy-common-8-li-8')}</p>
            <p>{t('policy-common-8-li-9')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-9')}</h3>
            <p>{t('policy-common-9-li-1')}</p>
            <p>{t('policy-common-9-li-2')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-10')}</h3>
            <p>{t('policy-common-10-li-1')}</p>
            <p>{t('policy-common-10-li-2')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-11')}</h3>
            <p>{t('policy-common-11-about')}</p>
          </div>
          <div className={styles['privacy__content_block']}>
            <h3>{t('policy-common-12')}</h3>
            <p>{t('policy-common-12-li-1')}</p>
            <p>{t('policy-common-12-li-2')}</p>
            <p>{t('policy-common-12-li-3')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
