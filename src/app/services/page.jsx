'use client';
import React, { useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import shoppingLama from '../../../public/images/Services/lama-shopping.webp';
import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(name) && validateEmail(email)) {
      console.log('Ваше имя:', name);
      console.log('Электронный адрес:', email);
      console.log('Ваше обращение:', message);
    }
  };

  const validateName = (value) => {
    const regex = /^[a-zA-Zа-яА-Я\s]*$/;
    if (!regex.test(value)) {
      setNameError('Пожалуйста, введите только буквы и пробелы');
      return false;
    } else {
      setNameError('');
      return true;
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
    <div className={style['services']}>
      <h2 className={style['services__heading']}>{t('services-title')}</h2>
      <div className={style['services__sectionOne']}>
        <Image alt='logo' src={shoppingLama} width={650} height={350} />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'></label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
              placeholder={t('services-placeholder-name')}
            />
          </div>
          {nameError && (
            <span style={{ fontSize: 12, color: 'green' }}>{nameError}</span>
          )}
          <div>
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder={t('services-placeholder-email')}
            />
          </div>
          {emailError && <span>{emailError}</span>}
          <div>
            <label htmlFor='message'></label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('services-placeholder-message')}
            />
          </div>
          <button type='submit'>{t('services-button')}</button>
          <span>✓{t('services-policy')}</span>
        </form>
      </div>
      <div className={style['services__sectionTwo']}>
        <ul>
          <li> {t('services-li-1')}</li>
          <span>{t('services-li-1-1')}</span>
          <li>{t('services-li-2')}</li>
          <span>{t('services-li-2-1')}</span>
          <li>{t('services-li-3')}</li>
          <li>{t('services-li-4')}</li>
          <span>{t('services-li-4-1')}</span>
          <li>{t('services-li-5')}</li>
          <li>{t('services-li-6')}</li>
        </ul>
      </div>
    </div>
  );
}
