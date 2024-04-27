'use client';
import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import shoppingLama from '../../../public/images/Services/lama-shopping.webp';
import Link from 'next/link';
import ArticleServices from '@/components/ArticleServices';
import Popup from '@/components/Popup';
import {
  serviceData,
  serviceDataEn,
} from '../../constants/service/serviceData.js';
import { useTranslation } from 'next-i18next';
import '../../18n';


export default function Services() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [consentError, setConsentError] = useState('');
  const [activeArticles, setActiveArticles] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const sendMail = async () => {
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
      console.log(await response.json());
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setConsentError(t('services-error-consent'));
      return;
    }
    if (validateName(name) && validateEmail(email)) {
      try {
        await sendMail(name, email, message);
        setInfoMsg('Заявка успешно отправлена!');
        setName('');
        setEmail('');
        setMessage('');
        setIsChecked(false);
      } catch (error) {
        console.error('Failed to send email:', error);
        setInfoMsg('Ошибка отправки!');
      }
    }
  };

  const validateName = (value) => {
    const regex = /^[a-zA-Zа-яА-Я\s]*$/;
    if (!regex.test(value)) {
      setNameError(t('services-error-name'));
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError(t('services-error-email'));
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  let data;
  useEffect(() => {
    if (i18n.language === 'ru') {
      data = serviceData;
    } else {
      data = serviceDataEn;
    }
  }, []);

  useEffect(() => {
    if (i18n.language === 'ru') {
      data = serviceData;
    } else {
      data = serviceDataEn;
    }
  }, [i18n.language]);

  if (i18n.language === 'ru') {
    data = serviceData;
  } else {
    data = serviceDataEn;
  }

  const handleChange = (id) => {
    let newArray = [...activeArticles];
    for (let i = 0; i < activeArticles.length; i++) {
      if (id !== i + 1) {
        newArray[i] = false;
      }

      if (+id === i + 1) {
        newArray[i] = true;
      }
    }
    setActiveArticles(newArray);
  };

  return (
    <div className={style['services']}>
      <h2 className={style['services__heading']}>{t('services-title')}</h2>
      <div className={style['services__sectionOne']}>
        <Image alt="logo" src={shoppingLama} width={650} height={350} />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
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
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder={t('services-placeholder-email')}
            />
          </div>
          {emailError && (
            <span style={{ fontSize: 12, color: 'green' }}>{emailError}</span>
          )}
          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('services-placeholder-message')}
            />
          </div>
          <button type="submit">{t('services-button')}</button>
          {consentError && (
            <span style={{ fontSize: 12, color: 'green' }}>{consentError}</span>
          )}
          <div>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              style={{ width: 'auto', margin: 5 }}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label for="agree">
              {t('services-policy')}
              <Link href="/privacy-policy"> {t('services-policy-a')}</Link>
            </label>
          </div>
        </form>
      </div>
      <ul>
        {data.map((item) => {
          return (
            <ArticleServices
              handleChange={() => {
                handleChange(item.id);
              }}
              active={activeArticles[item.id - 1]}
              {...item}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className={style['services__sectionTwo']}></div>
      <Popup infoMsg={infoMsg} />
    </div>
  );
}
