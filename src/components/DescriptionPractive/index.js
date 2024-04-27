'use client';

import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import style from './style.module.scss';

export default function DescriptionPractice(props) {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };

  let text = props.text;

  const clicedNumber = () => {
    let clicedText = 405;
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
    <p className={style['practice__text']}>
      {firstPartText}
      <span
        className={style['practice__common-text']}
        style={clicked ? { display: 'none' } : { display: 'inline' }}
      >
        <button className={style['practice__button']} onClick={handleClicked}>
          ...
        </button>
      </span>
      <span
        className={style['practice__common-text']}
        style={clicked ? { display: 'inline' } : { display: 'none' }}
      >
        {secondPartText}
        <button className={style['practice__button']} onClick={handleClicked}>
          {t('practice-button')}
        </button>
      </span>
    </p>
  );
}
