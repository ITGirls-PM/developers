'use client'
import React, { useState } from 'react';
import style from './style.module.scss'
import Image from 'next/image'
import shoppingLama from '../../../public/images/Services/lama-shopping.webp'
import treeLama from '../../../public/images/Services/treefull.webp'

export default function Services() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Ваше имя:', name);
      console.log('Электронный адрес:', email);
      console.log('Ваше обращение:', message);
    };
  return (
    <div className={style['services']}>
        <h2 className={style['services__heading']}>Чем я могу быть полезен</h2>
        <div className={style['services__sectionOne']}>
        <Image alt='logo' src={shoppingLama} width={650} height={350}/>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите ваше имя"
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите ваш email"
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите ваше обращение"
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
        </div>
        <div className={style['services__sectionTwo']}>
            <ul>
                <li> Эффективность руководителя</li>
                <li>HR трансформация</li>
                <li>Управление командой</li>
                <li>HR процессы</li>
                <li>Распределённая команда</li>
                <li>Удалённая работа</li>
                <li>HR метрики</li>
                <li>Управление рисками</li>
                <li>Нелинейное планирование</li>
            </ul>
        <Image alt='logo' src={treeLama} width={650} height={350}/>
        </div>
    </div>
  )
}
