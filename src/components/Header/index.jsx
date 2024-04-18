import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import headerLogo from '../../../public/images/Header/header-logo.webp'
import telegramLogo from '../../../public/images/Header/telegram-icon.svg'
import linkedInLogo from '../../../public/images/Header/linkedin-icon.svg'
import facebookLogo from '../../../public/images/Header/facebook-icon.svg'



export default function Header() {
  return (
    <div className={styles['header']}>
      <Image alt='logo' src={headerLogo} width={70} height={70}/>
      <nav>
        <ul className={styles['header__navbar']}>
          <li><a href="#">ОБО&nbsp;МНЕ</a></li>
          <li><a href="#">УСЛУГИ</a></li>
          <li><a href="#">ПРАКТИКА</a></li>
          <li><a href="#">БЛОГ</a></li>
          <li><a href="#">КОМЬЮНИТИ</a></li>
          </ul>
          </nav>
        <div className={styles['header__icons']}>
        <Image alt='telegram2Icon' src={telegramLogo} width={30} height={30}/>
        <Image alt='linkedInIcon' src={linkedInLogo} width={30} height={30}/>
        <Image alt='facebookIcon' src={facebookLogo} width={30} height={30}/>
        </div>
        <div className={styles['header__buttons']}>
          <button>EN</button>
          <button>RU</button>
        </div>
    </div>
  )
}
