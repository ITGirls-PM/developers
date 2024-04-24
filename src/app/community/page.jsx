import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LamComm from '../../../public/images/community/lam-community.webp'
import style from './style.module.scss'

export default function Community() {
  return (
    <main className={style['community']}>
      <h1 className={style['community__heading']}>Ламы на удаленке</h1>
      <div className={style['community__container']}>
        <article className={style['community__art']}>
          <div className={style['community__wrapper-image']}>
            <Image
              className={style['community__image']}
              alt='llamas-at-laptops'
              src={LamComm}
            />
          </div>

          <div className={style['community__wrapper']}>
            <p className={style['community__text']}>
              Приглашаю вас присоединиться к нашему уютному сообществу
              экспертов-удаленщиков и просто хороших людей, где мы делимся
              полезным опытом, обмениваемся новостями и поддерживаем друг друга
              на увлекательном пути саморазвития
            </p>
          </div>
          <div>
            <Link
              href='https://t.me/remotellamascom'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Telegram link'
            >
              <button className={style['community__btn']}>Хочу к вам!</button>
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
