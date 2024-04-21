import React from 'react';
import style from './style.module.scss';
import BlogPage from '@/components/BlogPage/BlogPage';

export default function Blog() {
  return (
    <main className={style['blog']}>
      <h1 className={style['heading']}>Авторский блог</h1>
      <BlogPage />
    </main>
  );
}
