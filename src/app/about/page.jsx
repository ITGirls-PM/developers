'use client'
import React, { useState } from 'react'
import style from './style.module.scss'
import Meeting from '../../../public/images/About/meeting.webp'
import Library from '../../../public/images/About/library.webp'
import Coffee from '../../../public/images/About/coffee.webp'
import Popup from '@/components/Popup'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import '../../18n'
import imageStyle from './imgStyle.scss'

export default function About() {
  const { t } = useTranslation()
  const [infoMsg, setInfoMsg] = useState('')

  return (
    <div className={style['about']}>
      <div className={style['about__title']}>{t('about-title')}</div>
      <div className={style['about__title_description']}>
        {t('about-subheading')}{' '}
      </div>
      <div className={style['about__title_content']}>
        {t('about-description')}{' '}
      </div>

      <div className={style['about__sectitle']}>{t('about-sectitle')}</div>
      <div className={style['about__cards']}>
        <div className={style['about__cards_cardCont']}>
          <span>
            <div className={style['about__cards_title']}>
              {t('about-cards-title-1')}
            </div>
            <div className={style['about__cards_text']}>
              {t('about-cards-text-1')}
            </div>
            <div>
              <Link
                href='https://t.me/remotellamas'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Telegram link'
              >
                <button className={style['about__cards_btn']}>
                  {' '}
                  {t('about-button-1')}
                </button>
              </Link>
            </div>
          </span>
          <span className={style['about__cards_img']}>
            <Image
              className='about__cards_image'
              alt='meeting image'
              src={Meeting}
            />
          </span>
        </div>

        <div className={style['about__cards_cardCont']}>
          <span className={style['about__cards_img']}>
            <Image
              alt='meeting image'
              src={Library}
              className='about__cards_image'
            />
          </span>
          <span>
            <div className={style['about__cards_title']}>
              {t('about-cards-title-2')}
            </div>
            <div className={style['about__cards_text']}>
              <ul>
                <li> {t('about-cards-text-2-li-1')}</li>
                <li> {t('about-cards-text-2-li-2')}</li>
                <li> {t('about-cards-text-2-li-3')}</li>
                <li> {t('about-cards-text-2-li-4')}</li>
              </ul>
            </div>
            <div>
              <Link
                href='https://www.linkedin.com/in/egorkalambert/'
                target='_blank'
                aria-label='Linkedin link'
              >
                <button className={style['about__cards_btn']}>
                  {' '}
                  {t('about-button-4')}
                </button>
              </Link>
            </div>
          </span>
        </div>

        <div className={style['about__cards_cardCont']}>
          <span>
            <div className={style['about__cards_title']}>
              {t('about-cards-title-3')}
            </div>
            <div className={style['about__cards_text']}>
              {t('about-cards-text-3')}
              <ul>
                <li> {t('about-cards-text-3-li-1')}</li>
                <li> {t('about-cards-text-3-li-2')}</li>
                <li> {t('about-cards-text-3-li-3')}</li>
              </ul>
            </div>
            <div>
              <Link href='/practice'>
                <button className={style['about__cards_btn']}>
                  {t('about-button-3')}
                </button>
              </Link>
            </div>
          </span>
          <span className={style['about__cards_img']}>
            <Image
              alt='meeting image'
              src={Coffee}
              className='about__cards_image'
            />
          </span>
        </div>
      </div>
      <Popup infoMsg={infoMsg} />
    </div>
  )
}
