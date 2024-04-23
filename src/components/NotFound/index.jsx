'use client';
import Link from 'next/link';

import style from './style.module.scss';
import { useTranslation } from 'react-i18next';
export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className={style['not-found']}>
      <h1 className={style['not-found__name']}>404</h1>
      <p className={style['not-found__text']}>{t('not-found-title')}</p>
      <button type='button' className={style['not-found__btn']}>
        <Link href='/' className={style['not-found__link']}>
          {t('not-found-button')}
        </Link>
      </button>
    </div>
  );
}
