'use client'
import React, { useState } from 'react';
import style from './style.module.scss'
import Meeting from '../../../public/images/About/meeting.webp'
import Library from '../../../public/images/About/library.webp'
import Coffee from '../../../public/images/About/coffee.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateEmail(email)) {
          console.log('Электронный адрес:', email);
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
        <div className={style['about']}>
            <div className={style['about__title']}>Георгий Ламберт</div>
            <div className={style['about__title_description']}>Профессиональный ментор руководителей и специалистов среднего звена</div>
            <div className={style['about__title_content']}>Так сложилось, что я втянулся в дистанционную работу ещё до времён, когда стало популярным само слово «удалёнка», уже несколько лет создаю комфортные условия для работы распределенной команды и десятков тысяч удалёнщиков</div>

            <div className={style['about__sectitle']}>Почему выбирают меня</div>
            <div className={style['about__cards']}>
                <div className={style['about__cards_cardCont']}>
                    <span>
                        <div className={style['about__cards_title']}>Нестандартный подход</div>
                        <div className={style['about__cards_text']}>Здесь мы пропишем все конкурентные преимущества, отличающие автора от других менторов</div>
                        <div ><button className={style['about__cards_btn']}>Читать на канале</button></div>
                    </span>
                    <span className={style['about__cards_img']}>
                        <Image alt='meeting image' src={Meeting} width={470} height={340}/>
                    </span>
                </div>

                <div className={style['about__cards_cardCont']}>
                    <span className={style['about__cards_img']}>
                        <Image alt='meeting image' src={Library} width={470} height={340}/>
                    </span>
                    <span>
                        <div className={style['about__cards_title']}>Практикующий ментор</div>
                        <div className={style['about__cards_text']}>
                            <ul>
                                <li>HR CPO | Crowd</li>
                                <li>Remote Employees Lifecycle | Yandex</li>
                                <li>HR PO Lecturer | HR-kafedra</li>
                                <li>Ex Yandex SMM-support & InterCom</li>
                            </ul>
                        </div>
                        <div>
                            <input type="text" name="email" className={style['about__cards_email']} placeholder='Ваш email для рассылки' onChange={(e) => {setEmail(e.target.value);
          validateEmail(e.target.value)}}/> 
          <button className={style['about__cards_btn']} onClick={handleSubmit}>Подписаться</button>
          {emailError && <div>{emailError}</div>}
                           
                        </div>
                    </span>
                </div>

                <div className={style['about__cards_cardCont']}>
                    <span>
                        <div className={style['about__cards_title']}>Реальные результаты</div>
                        <div className={style['about__cards_text']}>
                        Делюсь тем, что:
                            <ul>
                                <li>работать вне офиса и стабильно — можно</li>
                                <li>распределённая команда — это сложно, но эффективно</li>
                                <li>самому выбирать где, когда и сколько работать — в кайф</li>
                            </ul>
                        </div>
                        <div ><Link href="/practice"><button className={style['about__cards_btn']}>Смотреть кейсы</button></Link></div>
                    </span>
                    <span className={style['about__cards_img']}>
                        <Image alt='meeting image' src={Coffee} width={470} height={340}/>
                    </span>
                </div>

            </div>
        </div>
    )
}

function Email(){
    console.log('ti smog')
}