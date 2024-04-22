'use client';
import React, { useState } from 'react';
import style from './style.module.scss';
import Meeting from '../../../public/images/About/meeting.webp';
import Library from '../../../public/images/About/library.webp';
import Coffee from '../../../public/images/About/coffee.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../../18n';

export default function About() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log('Электронный адрес:', email);
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError('Введите корректный email');
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
            <div>
              <button className={style['about__cards_btn']}>
                {t('about-button-1')}
              </button>
            </div>
          </span>
          <span className={style['about__cards_img']}>
            <Image alt='meeting image' src={Meeting} width={470} height={340} />
          </span>
        </div>

        <div className={style['about__cards_cardCont']}>
          <span className={style['about__cards_img']}>
            <Image alt='meeting image' src={Library} width={470} height={340} />
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
                type='text'
                name='email'
                className={style['about__cards_email']}
                placeholder={t('about-input-2')}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              <button
                className={style['about__cards_btn']}
                onClick={handleSubmit}
              >
                {t('about-button-2')}
              </button>
              {emailError && <div>{emailError}</div>}
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
            <Image alt='meeting image' src={Coffee} width={470} height={340} />
          </span>
        </div>
      </div>
    </div>
  );
}

function Email() {
  console.log('ti smog');
}
