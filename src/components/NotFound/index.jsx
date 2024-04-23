import Link from 'next/link';

import style from './style.module.scss';

export default function NotFound() {
	return (
		<div className={style['not-found']}>
				<h1 className={style['not-found__name']}>404</h1>
				<p className={style['not-found__text']}>Такой страницы не существует.</p>
				<button type="button" className={style['not-found__btn']}>
					<Link href="/" className={style['not-found__link']}>
						Вернуться на главную
					</Link>
				</button>
			</div>
	);
}