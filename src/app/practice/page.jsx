import React from 'react';
import style from './style.module.scss';
import { practiceData } from '../../constants/practice/practiceData.js';
import PracticeBlog from '@/components/ArticlePractice';

export default function Practice() {
  return (
    <main className={style['practice']}>
      <h1 className={style['heading']}>Кейсы из практики</h1>
      <div className={style['practice__container']}>
        {practiceData.map((item) => {
          return <PracticeBlog {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
