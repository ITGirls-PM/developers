import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import headerLogo from '../../../public/images/Header/header-logo.webp'
import telegramLogo from '../../../public/images/Header/telegram-icon.svg'
import linkedInLogo from '../../../public/images/Header/linkedin-icon.svg'
import facebookLogo from '../../../public/images/Header/facebook-icon.svg'
import setkaLogo from '../../../public/images/Header/setka-icon.svg'



export default function Header() {
  return (
    <header className={styles['header']}>
        <Link href="/"><Image alt='logo' src={headerLogo} width={70} height={70}/></Link>
      <nav>
        <ul className={styles['header__navbar']}>
          <li><Link href="/about">ОБО МНЕ</Link></li>
          <li><Link href="/services">УСЛУГИ</Link></li>
          <li><Link href="/practice">ПРАКТИКА</Link></li>
          <li><Link href="/blog">БЛОГ</Link></li>
          <li><Link href="/community">КОМЬЮНИТИ</Link></li>
        </ul>
          </nav>
        <div className={styles['header__icons']}>
        <Image alt='telegram2Icon' src={telegramLogo} width={30} height={30}/>
        <Image alt='linkedInIcon' src={linkedInLogo} width={30} height={30}/>
        <Image alt='facebookIcon' src={facebookLogo} width={30} height={30}/>
        <Image alt='setkaIcon' src={setkaLogo} width={30} height={30} style={{borderRadius: 20}} />
        </div>
        <div className={styles['header__buttons']}>
          <button>EN</button>
          <button>RU</button>
        </div>
    </header>
  )
}
