import Image from 'next/image';
import style from './style.module.scss';

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
        <span className={style['blog__text']}>{props.text}</span>
      </div>
    </article>
  );
};
export default ArticleBlog;
