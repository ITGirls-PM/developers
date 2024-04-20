import Image from 'next/image';
import style from './style.module.scss';
import DescriptionPractice from '../DescriptionPractive';

const PracticeBlog = (props) => {
  return (
    <article className={style['practice__article']}>
      <Image
        className={style['practice__section-image']}
        alt='image-section'
        src={props.image}
        width={460}
        height={306}
      />
      <div className={style['practice__info']}>
        <h2 className={style['practice__title']}>{props.title}</h2>
        <DescriptionPractice text={props.text} />
      </div>
    </article>
  );
};
export default PracticeBlog;
