import React from 'react'
import Image from 'next/image'
import Georgchair from '../../../public/images/mainList/georgchair.webp'
import SeaMainList from '../../../public/images/mainList/sea-main-list.webp'
import style from './style.module.scss'

export default function MainList() {
  return (
    <main className={style['mainblock']}>
      <div className={style['mainblock__box']}>
        <div className={style['circle']}>
          <Image
            className={style['circle__image']}
            alt='georg-chair'
            src={Georgchair}
            /* width={460}
          height={306} */
          />
        </div>
        <div className={style['wrapper']}>
          <p className={style['wrapper__text']}>
            Привет! Рад видеть вас на моем сайте нескучного коучинга. Здесь вы
            найдете полезную информацию по развитию своих профессиональных
            навыков и площадку единомышленников, работающих на удаленке.
          </p>
        </div>
      </div>
      <div className={style['mainblock__box']}>
        <section className={style['mainblock__keywords']}>
          <h1 className={style['mainblock__title']}>Executive Mentor</h1>
          <ul className={style['mainblock__list']}>
            <li className={style['mainblock__item']}>
              Эффективность руководителя
            </li>
            <li className={style['mainblock__item']}>Управление командой</li>
            <li className={style['mainblock__item']}>Распределённая команда</li>
            <li className={style['mainblock__item']}>Удалённая работа</li>
            <li className={style['mainblock__item']}>Управление рисками</li>
            <li className={style['mainblock__item']}>
              Нелинейное планирование
            </li>
          </ul>
        </section>
        <Image
          className={style['mainblock__image']}
          alt='sea-main-list'
          src={SeaMainList}
          /* width={460}
          height={306} */
        />
      </div>
    </main>
  )
}
