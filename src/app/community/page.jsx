'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LamComm from '../../../public/images/community/llamas-community.webp';
import style from './style.module.scss';
import { useTranslation } from 'react-i18next';

export default function Community() {
  const { t } = useTranslation();
  return (
    <main className={style['community']}>
      <h1 className={style['community__heading']}>{t('community-title')}</h1>
      <div className={style['community__container']}>
        <article className={style['community__art']}>
          <div className={style['community__wrapper-image']}>
            <Image
              className={style['community__image']}
              alt="llamas-at-laptops"
              src={LamComm}
            />
          </div>

          <div className={style['community__wrapper']}>
            <p className={style['community__text']}>{t('community-text')}</p>
          </div>
          <div>
            <Link
              href="https://t.me/remotellamascom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram link"
            >
              <button className={style['community__btn']}>
                {t('community-button')}
              </button>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
