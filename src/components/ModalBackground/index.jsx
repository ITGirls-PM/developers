import styles from './style.module.scss';

export default function ModalBackground({
	children,
	onClick,
	zindex,
}) {
	const handlerClick = (
		event
	) => {
		if (event.target === event.currentTarget && onClick) {
			onClick();
		}
	};

	return (
		<div
			onClick={(event) => handlerClick(event)}
			className={`${styles['modal-background']} ${styles['modal-background_show']}`}
			style={{ zIndex: zindex }}
		>
			{children}
		</div>
	);
}
