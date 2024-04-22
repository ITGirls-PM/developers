'use client';
import ArticleBlog from '../ArticleBlog/ArticleBlog';
import Image from 'next/image';
import arrowLeft from '../../../public/images/Blog/arrow-left.svg';
import arrowRight from '../../../public/images/Blog/arrow-right.svg';
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import React from 'react';
import { blogData } from '../../constants/blog/blogData.js';

const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export default function BlogPage() {
  const items = blogData;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [paginatedPosts, setPaginatedPosts] = useState(
    paginate(items, currentPage, pageSize)
  );
  const pagesCount = Math.ceil(items.length / pageSize);

  useEffect(() => {
    setPaginatedPosts(paginate(items, currentPage, pageSize));
  }, [currentPage]);

  return (
    <>
      {paginatedPosts.map((item) => {
        return <ArticleBlog {...item} key={item.id} />;
      })}
      {pagesCount === 1 ? null : (
        <span className={style['pagination__container']}>
          <button
            className={style['pagination__button']}
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage - 1 <= 0}
          >
            <Image alt='arrow-left' src={arrowLeft} width={50} height={50} />
          </button>
          <span className={style['pagination__text']}>
            {currentPage}/{pagesCount}
          </span>

          <button
            className={style['pagination__button']}
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage + 1 > pagesCount}
          >
            <Image alt='arrow-rigth' src={arrowRight} width={50} height={50} />
          </button>
        </span>
      )}
    </>
  );
}
