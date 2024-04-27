'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import style from './style.module.scss';

export default function DescriptionBlog(props) {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [length, setLength] = useState(900);
  useEffect(() => {
    const updateLength = () => {
      if (window.innerWidth >= 960 && window.innerWidth < 1000) {
        setLength(380);
      }
      if (window.innerWidth > 1000 && window.innerWidth < 1050) {
        setLength(450);
      }
      if (window.innerWidth > 1050 && window.innerWidth < 1150) {
        setLength(630);
      }
      if (window.innerWidth > 1150 && window.innerWidth < 1300) {
        setLength(700);
      }
      if (window.innerWidth > 1300 && window.innerWidth < 1350) {
        setLength(750);
      }
      if (window.innerWidth > 1350 && window.innerWidth < 1400) {
        setLength(800);
      }
      if (window.innerWidth > 1400 && window.innerWidth < 1440) {
        setLength(830);
      }
    };

    updateLength();

    const handleResize = () => {
      updateLength();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  let text = props.text;

  const clicedNumber = () => {
    let clicedText = length;
    for (let i = 0; i < 20; i++) {
      if (props.text[clicedText + i] === ' ')
        return (clicedText = clicedText + i);
    }
    return clicedText;
  };
  const clicedNumberValue = clicedNumber();
  let firstPartText = text.slice(0, clicedNumberValue);
  let secondPartText = text.slice(clicedNumberValue + 1);
  if (text.slice(clicedNumberValue + 1)[0] !== ' ') {
    secondPartText = ' ' + text.slice(clicedNumberValue + 1);
  }

  return (
    <p className={style['blog__text']}>
      {firstPartText}
      <span
        className={style['blog__common-text']}
        style={clicked ? { display: 'none' } : { display: 'inline' }}
      >
        <button className={style['blog__button']} onClick={handleClicked}>
          ...
        </button>
      </span>
      <span
        className={style['blog__common-text']}
        style={clicked ? { display: 'inline' } : { display: 'none' }}
      >
        {secondPartText}
        <button className={style['blog__button']} onClick={handleClicked}>
          {t('practice-button')}
        </button>
      </span>
    </p>
  );
}
