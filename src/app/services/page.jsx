'use client'
import React, { useState } from 'react';
import style from './style.module.scss'
import Image from 'next/image'
import shoppingLama from '../../../public/images/Services/lama-shopping.webp'

export default function Services() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateName(name) && validateEmail(email)) {
          console.log('Ваше имя:', name);
          console.log('Электронный адрес:', email);
          console.log('Ваше обращение:', message);
      }
  };

    const validateName = (value) => {
      const regex = /^[a-zA-Zа-яА-Я\s]*$/;
      if (!regex.test(value)) {
          setNameError('Пожалуйста, введите только буквы и пробелы');
          return false;
      } else {
          setNameError('');
          return true;
      }
  };

  const validateEmail = (value) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
          setEmailError('Введите корректный email');
          return false;
      } else {
          setEmailError('');
          return true;
      }
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
          onChange={(e) => {setName(e.target.value);
          validateName(e.target.value)}}
          placeholder="Ваше имя"
        />
      </div>
      {nameError && <span style={{ fontSize: 12, color: 'green' }}>{nameError}</span>}
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value);
          validateEmail(e.target.value)}}
          placeholder="Электронный адрес"
        />
      </div>
      {emailError && <span>{emailError}</span>}
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
      <span>✓нажимая на кнопку, вы соглашаетесь с <a>Политикой</a> обработки персональных данных</span>
    </form>
        </div>
        <div className={style['services__sectionTwo']}>
            <ul>
                <li> Эффективность руководителя</li>
                <span>&#40;HR трансформация&#41;</span>
                <li>Управление командой</li>
                <span>&#40;HR процессы&#41;</span>
                <li>Распределённая команда</li>
                <li>Удалённая работа</li>
                <span>&#40;HR метрики&#41;</span>
                <li>Управление рисками</li>
                <li>Нелинейное планирование</li>
            </ul>
        </div>
    </div>
  )
}
