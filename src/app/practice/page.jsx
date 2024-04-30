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
import { useEffect, useState } from 'react';

export default function Practice() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (i18n.language === 'ru') {
      setData(practiceData);
    } else {
      setData(practiceDataEn);
    }
  }, []);
  useEffect(() => {
    if (i18n.language === 'ru') {
      setData(practiceData);
    } else {
      setData(practiceDataEn);
    }
  }, [i18n.language]);

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
