'use client'
import React from 'react'
import Image from 'next/image'
import Georgchair from '../../../public/images/mainList/georgchair.webp'
import SeaMainList from '../../../public/images/mainList/sea-main-list.webp'
import style from './style.module.scss'
import { useTranslation } from 'next-i18next'

export default function MainList() {
  const { t } = useTranslation()
  return (
    <main className={style['mainblock']}>
      <div className={style['mainblock__box']}>
        <div className={style['circle']}>
          <Image
            className={style['circle__image']}
            alt="georg-chair"
            src={Georgchair}
          />
        </div>
        <div className={style['wrapper']}>
          <p className={style['wrapper__text']}>{t('main-description')}</p>
        </div>
      </div>
      <div className={style['mainblock__key']}>
        <section className={style['mainblock__keywords']}>
          <h1 className={style['mainblock__title']}>Executive Mentor</h1>
          <ul className={style['mainblock__list']}>
            <li className={style['mainblock__item']}>{t('main-li-1')}</li>
            <li className={style['mainblock__item']}>{t('main-li-2')}</li>
            <li className={style['mainblock__item']}>{t('main-li-3')}</li>
            <li className={style['mainblock__item']}>{t('main-li-4')}</li>
            <li className={style['mainblock__item']}>{t('main-li-5')}</li>
            <li className={style['mainblock__item']}>{t('main-li-6')}</li>
          </ul>
        </section>
        <Image
          className={style['mainblock__image']}
          alt="sea-main-list"
          src={SeaMainList}
        />
      </div>
    </main>
  )
}
