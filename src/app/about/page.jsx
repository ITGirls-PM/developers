import React from 'react'
import style from './style.module.scss'
import Meeting from '../../../public/images/About/meeting.webp'
import Image from 'next/image'

export default function About() {
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

                <div>
                    <span>
                        
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                        <div></div>
                    </span>
                </div>

                <div>
                    <span>
                        <div></div>
                        <div></div>
                        <div></div>
                    </span>
                    <span>
                        
                    </span>
                </div>

            </div>
        </div>
    )
}