'use client';
import React from 'react';
import style from './style.module.scss';
import BlogPage from '@/components/BlogPage/BlogPage';
import { useTranslation } from 'next-i18next';
import '../../18n';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <main className={style['blog']}>
      <h1 className={style['heading']}>{t('blog-title')}</h1>
      <BlogPage />
    </main>
  );
}
