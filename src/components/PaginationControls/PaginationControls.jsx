'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import arrowLeft from '../../../public/images/Blog/arrow-left.svg';
import arrowRight from '../../../public/images/Blog/arrow-right.svg';
import style from './style.module.scss';

export default function PaginationControls({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '4';

  return (
    <span className={style['pagination__container']}>
      <button
        className={style['pagination__button']}
        onClick={() => {
          router.push(`/?page=${+page - 1}`);
        }}
        disabled={!hasPrevPage}
      >
        <Image alt='arrow-left' src={arrowLeft} width={40} height={40} />
      </button>
      <span>
        {page}/{6}
      </span>

      <button
        className={style['pagination__button']}
        onClick={() => {
          router.push(`/?page=${+page + 1}`);
        }}
        disabled={!hasNextPage}
      >
        <Image alt='arrow-rigth' src={arrowRight} width={40} height={40} />
      </button>
    </span>
  );
}
