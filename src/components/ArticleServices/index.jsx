'use client';
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

const ArticleServices = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  const { t } = useTranslation();
  return (
    <li className={style['services__info']} key={props.id}>
      <h2 className={style['services__title']}>{props.title}</h2>
      <span className={style['services__subtitle']}>{props.subtitle}</span>
      <div>
        {active ? (
          <p className={style['services__text']}>{props.text}</p>
        ) : (
          <button
            className={style['services__button-info']}
            onClick={props.handleChange}
          >
            {t('services-button-info')}
          </button>
        )}
      </div>
    </li>
  );
};
export default ArticleServices;
