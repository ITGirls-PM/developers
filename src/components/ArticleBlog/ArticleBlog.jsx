import Image from 'next/image';
import style from './style.module.scss';
import '../../18n';

const formatedDate = (date) => {
  const time = new Date(date);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  if (month < 10) return `${day}.0${month}.${year}`;
  else {
    return `${day}.${month}.${year}`;
  }
};

const ArticleBlog = (props) => {
  return (
    <article className={style['blog__article']}>
      <Image
        className={style['blog__section-image']}
        alt='image-section'
        src={props.image}
        width={460}
        height={306}
      />
      <div className={style['blog__info']}>
        <h2 className={style['blog__title']}>{props.title}</h2>
        <span className={style['blog__time']}>{formatedDate(props.time)}</span>
        <p className={style['blog__text']}>{props.text}</p>
      </div>
    </article>
  );
};
export default ArticleBlog;
