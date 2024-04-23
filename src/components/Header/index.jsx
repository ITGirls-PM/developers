'use client';
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import headerLogo from '../../../public/images/Header/header-logo.webp';
import telegramLogo from '../../../public/images/Header/telegram-icon.svg';
import linkedInLogo from '../../../public/images/Header/linkedin-icon.svg';
import facebookLogo from '../../../public/images/Header/facebook-icon.svg';
import setkaLogo from '../../../public/images/Header/setka-icon.svg';
import { useTranslation } from 'next-i18next';

import '../../18n';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={styles['header']}>
      <Link href='/'>
        <Image alt='logo' src={headerLogo} width={70} height={70} />
      </Link>
      <nav>
        <ul className={styles['header__navbar']}>
          <li>
            <Link href='/about'>{t('header-about')}</Link>
          </li>
          <li>
            <Link href='/services'>{t('header-services')}</Link>
          </li>
          <li>
            <Link href='/practice'>{t('header-practice')}</Link>
          </li>
          <li>
            <Link href='/blog'>{t('header-blog')}</Link>
          </li>
          <li>
            <Link href='/community'>{t('header-community')}</Link>
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
            width={30}
            height={30}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/egorkalambert/ '
          target='_blank'
          aria-label='LinkedIn link'
        >
          <Image alt='linkedInIcon' src={linkedInLogo} width={30} height={30} />
        </a>
        <a
          href='https://www.facebook.com/egorkalambert'
          target='_blank'
          aria-label='Facebook link'
        >
          <Image alt='facebookIcon' src={facebookLogo} width={30} height={30} />
        </a>
        <a
          href='https://setka.ru/accounts/4556 '
          target='_blank'
          aria-label='Setka link'
        >
          <Image
            alt='setkaIcon'
            src={setkaLogo}
            width={30}
            height={30}
            style={{ borderRadius: 20 }}
          />
        </a>
      </div>
      <div className={styles['header__buttons']}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
      </div>
    </header>
  );
}
