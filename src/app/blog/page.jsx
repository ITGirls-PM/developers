import React from 'react';
import style from './style.module.scss';
import { blogData } from '../../constants/blog/blogData.js';
import ArticleBlog from '@/components/ArticleBlog/ArticleBlog';

export default function Blog() {

  return (
    <main className={style['blog']}>
      <h1 className={style['heading']}>Авторский блог</h1>
      {blogData.map((item) => {
        return <ArticleBlog {...item} key={item.id} />;
      })}
    </main>
  );
}
