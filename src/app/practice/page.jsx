'use client';
import React from 'react';
import style from './style.module.scss';
import {
  practiceData,
  practiceDataEn,
} from '../../constants/practice/practiceData.js';
import ArticlePractice from '@/components/ArticlePractice';
import { useTranslation } from 'next-i18next';
import '../../18n';
import { useEffect } from 'react';

export default function Practice() {
  const { t, i18n } = useTranslation();
  let data;
  useEffect(() => {
    if (i18n.language === 'ru') {
      data = practiceData;
    } else {
      data = practiceDataEn;
    }
  }, []);
  useEffect(() => {
    if (i18n.language === 'ru') {
      data = practiceData;
    } else {
      data = practiceDataEn;
    }
  }, [i18n.language]);

  if (i18n.language === 'ru') {
    data = practiceData;
  } else {
    data = practiceDataEn;
  }
  return (
    <main className={style['practice']}>
      <h1 className={style['heading']}>{t('practice-title')}</h1>
      <div className={style['practice__container']}>
        {data.map((item) => {
          return <ArticlePractice {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
