import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import headerLogo from '../../../public/images/Header/header-logo.webp';
import telegramLogo from '../../../public/images/Header/telegram-icon.svg';
import linkedInLogo from '../../../public/images/Header/linkedin-icon.svg';
import facebookLogo from '../../../public/images/Header/facebook-icon.svg';
import setkaLogo from '../../../public/images/Header/setka-icon.svg';

export default function Header() {
  return (
    <header className={styles['header']}>
      <Link href='/'>
        <Image alt='logo' src={headerLogo} width={70} height={70} />
      </Link>
      <nav>
        <ul className={styles['header__navbar']}>
          <li>
            <Link href='/about'>ОБО МНЕ</Link>
          </li>
          <li>
            <Link href='/services'>УСЛУГИ</Link>
          </li>
          <li>
            <Link href='/practice'>ПРАКТИКА</Link>
          </li>
          <li>
            <Link href='/blog'>БЛОГ</Link>
          </li>
          <li>
            <Link href='/community'>КОМЬЮНИТИ</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['header__icons']}>
        <a
          href='https://t.me/remotellamas'
          target='_blank'
          aria-label='Telegram link'
        >
          <Image
            alt='telegram2Icon'
            src={telegramLogo}
            width={27}
            height={27}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/egorkalambert/ '
          target='_blank'
          aria-label='LinkedIn link'
        >
          <Image alt='linkedInIcon' src={linkedInLogo} width={27} height={27} />
        </a>
        <a
          href='https://www.facebook.com/egorkalambert'
          target='_blank'
          aria-label='Facebook link'
        >
          <Image alt='facebookIcon' src={facebookLogo} width={27} height={27} />
        </a>
        <a
          href='https://setka.ru/accounts/4556 '
          target='_blank'
          aria-label='Setka link'
        >
          <Image
            alt='setkaIcon'
            src={setkaLogo}
            width={27}
            height={27}
            style={{ borderRadius: 20 }}
          />
        </a>
      </div>
      <div className={styles['header__buttons']}>
        <button>EN</button>
        <button>RU</button>
      </div>
    </header>
  );
}
