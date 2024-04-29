'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Georgchair from '../../../public/images/mainList/georgchair.webp'
import SeaMainList from '../../../public/images/mainList/sea-main-list.webp'
import style from './style.module.scss'
import Popup from '@/components/Popup'
import { useTranslation } from 'next-i18next'
import '../../18n'

export default function MainList() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [infoMsg, setInfoMsg] = useState('')

  const sendMail = async () => {
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })
      console.log(await response.json())
    } catch (error) {
      console.error('Failed to send email:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      try {
        await sendMail(email)
        setInfoMsg('Заявка успешно отправлена!')
        setEmail('')
      } catch (error) {
        console.error('Failed to send email:', error)
        setInfoMsg('Ошибка отправки!')
      }
    }
  }

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value == '') {
      setEmailError(t('services-error-input'))
      return false
    } else if (!regex.test(value)) {
      setEmailError('')
      setEmailError(t('services-error-email'))
      return false
    } else {
      setEmailError('')
      return true
    }
  }

  return (
    <main className={style['mainblock']}>
      <div className={style['mainblock__box']}>
        <div className={style['circle']}>
          <Image
            className={style['circle__image']}
            alt='georg-chair'
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
          alt='sea-main-list'
          src={SeaMainList}
        />
      </div>
      <div className={style['mainblock__sub']}>
        <textarea
          type='text'
          name='email'
          className={style['mainblock__email']}
          placeholder={t('main-input')}
          required
          onChange={(e) => {
            setEmail(e.target.value)
            validateEmail(e.target.value)
          }}
        />
        {emailError && (
          <div style={{ fontSize: 12, color: 'green' }}>{emailError}</div>
        )}
        <div>
          <button className={style['mainblock__btn']} onClick={handleSubmit}>
            {t('main-button')}
          </button>
        </div>
      </div>
      <Popup infoMsg={infoMsg} />
    </main>
  )
}
