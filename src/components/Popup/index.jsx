'use client';
import { useState } from 'react';
import ModalBackground from '../ModalBackground';
import styles from './style.module.scss';

export default function Popup({infoMsg}) {
	const [show, setShow] = useState(true);

	const handleClose = () => {
		setTimeout(() => {
			setShow(false);

		}, 300);
	};


	return (
		<>
        {infoMsg && show && (
				<ModalBackground zindex="900" onClick={handleClose}>
					<div className={styles.popup}>
						<div
							className={`${styles['popup__background']} ${show ? styles['popup__background_show'] : styles['popup__background_hiding']}`}
						>
							{/*<button
								onClick={handleClose}
								className={styles['popup__icon_close']}
								aria-label="закрыть"
								type="button"
        ></button>*/}
							<div className={styles['popup__info']}>
								<p
									className={styles['popup__message']}
								>
									{infoMsg}
								</p>
							</div>
						</div>
					</div>
				</ModalBackground>
        )}
		</>
	);
}
