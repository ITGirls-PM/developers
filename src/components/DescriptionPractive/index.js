'use client';

import { useState } from 'react';
import style from './style.module.scss';

export default function DescriptionPractice(props) {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };

  let text = props.text;

  const clicedNumber = () => {
    let clicedText = 205;
    for (let i = 0; i < 20; i++) {
      if (props.text[clicedText + i] === ' ')
        return (clicedText = clicedText + i);
    }
    return clicedText;
  };
  const clicedNumberValue = clicedNumber();
  let firstPartText = text.slice(0, clicedNumberValue) + '  ';
  let secondPartText = text.slice(clicedNumberValue + 1);
  if (text.slice(clicedNumberValue + 1)[0] !== ' ') {
    secondPartText = ' ' + text.slice(clicedNumberValue + 1);
  }

  return (
    <span className={style['practice__text']}>
      {firstPartText}
      <span style={clicked ? { display: 'none' } : { display: 'inline' }}>
        <bottom className={style['practice__bottom']} onClick={handleClicked}>
          ...
        </bottom>
      </span>
      <span style={clicked ? { display: 'inline' } : { display: 'none' }}>
        {secondPartText}
      </span>
    </span>
  );
}
