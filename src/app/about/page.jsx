'use client';
import React, { useState } from 'react';
import style from './style.module.scss';
import Meeting from '../../../public/images/About/meeting.webp';
import Library from '../../../public/images/About/library.webp';
import Coffee from '../../../public/images/About/coffee.webp';
import Popup from '@/components/Popup';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import '../../18n';
const imageStyle = {
    width: '320px',
    height: '225px',
  }
export default function About() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  const sendMail = async () => {
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
        })
      });
      console.log(await response.json());
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        await sendMail(email);
        setInfoMsg('Заявка успешно отправлена!');
        setEmail('');
      } catch (error) {
        console.error('Failed to send email:', error);
        setInfoMsg('Ошибка отправки!');
      }
    }
  };

  

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(value == ''){
      setEmailError(t('services-error-input'));
        return false;
    }
    else if (!regex.test(value)) {
      setEmailError('');
      setEmailError(t('services-error-email'));
      return false;
    } else {
        setEmailError('');
        return true;
    }

};
  return (
    <div className={style['about']}>
      <div className={style['about__title']}>{t('about-title')}</div>
      <div className={style['about__title_description']}>
        {t('about-subheading')}{' '}
      </div>
      <div className={style['about__title_content']}>
        {t('about-description')}{' '}
      </div>

      <div className={style['about__sectitle']}>{t('about-sectitle')}</div>
      <div className={style['about__cards']}>
        <div className={style['about__cards_cardCont']}>
          <span>
            <div className={style['about__cards_title']}>
              {t('about-cards-title-1')}
            </div>
            <div className={style['about__cards_text']}>
              {t('about-cards-text-1')}
            </div>
            <div >
              <Link
              href='https://t.me/remotellamas'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Telegram link'>
              <button className={style['about__cards_btn']}> {t('about-button-1')}</button>
              </Link>
              </div>
          </span>
          <span className={style['about__cards_img']}>
            <Image alt='meeting image' src={Meeting} style={imageStyle} />
          </span>
        </div>

        <div className={style['about__cards_cardCont']}>
          <span className={style['about__cards_img']}>
            <Image alt='meeting image' src={Library} style={imageStyle} />
          </span>
          <span>
            <div className={style['about__cards_title']}>
              {t('about-cards-title-2')}
            </div>
            <div className={style['about__cards_text']}>
              <ul>
                <li> {t('about-cards-text-2-li-1')}</li>
                <li> {t('about-cards-text-2-li-2')}</li>
                <li> {t('about-cards-text-2-li-3')}</li>
                <li> {t('about-cards-text-2-li-4')}</li>
              </ul>
            </div>
            <div>
            <input 
            type="text" 
            name="email" 
            className={style['about__cards_email']} 
            placeholder={t('about-input-2')}
            required
            onChange={(e) => {setEmail(e.target.value);
            validateEmail(e.target.value)}}/> 
            {emailError && <div style={{ fontSize: 12, color: 'green' }}>{emailError}</div>} 
            <div><button className={style['about__cards_btn']} onClick={handleSubmit}>{t('about-button-2')}</button></div>
            </div>
          </span>
        </div>

        <div className={style['about__cards_cardCont']}>
          <span>
            <div className={style['about__cards_title']}>
              {t('about-cards-title-3')}
            </div>
            <div className={style['about__cards_text']}>
              {t('about-cards-text-3')}
              <ul>
                <li> {t('about-cards-text-3-li-1')}</li>
                <li> {t('about-cards-text-3-li-2')}</li>
                <li> {t('about-cards-text-3-li-3')}</li>
              </ul>
            </div>
            <div>
              <Link href='/practice'>
                <button className={style['about__cards_btn']}>
                  {t('about-button-3')}
                </button>
              </Link>
            </div>
          </span>
          <span className={style['about__cards_img']}>
            <Image alt='meeting image' src={Coffee} style={imageStyle} />
          </span>
        </div>
      </div>
      <Popup infoMsg={infoMsg} />
    </div>
  );
}

