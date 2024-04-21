import React from 'react';
import style from './style.module.scss';
import { blogData } from '../../constants/blog/blogData.js';
import ArticleBlog from '@/components/ArticleBlog/ArticleBlog';
import PaginationControls from '@/components/PaginationControls/PaginationControls';

export default function Blog({ searchParams }) {
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '4';
  const start = (+page - 1) * +per_page;
  const end = start + +per_page;
  const entries = blogData.slice(start, end);

  return (
    <main className={style['blog']}>
      <h1 className={style['heading']}>Авторский блог</h1>
      {entries.map((item) => {
        return <ArticleBlog {...item} key={item.id} />;
      })}
      <PaginationControls
        hasNextPage={end < blogData.length}
        hasPrevPage={start > 0}
      />
    </main>
  );
}
