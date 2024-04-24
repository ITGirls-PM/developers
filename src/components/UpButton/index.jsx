import Link from 'next/link';
import Image from 'next/image';
import UpButtonIcon from '../../../public/images/icons/button-up.svg';

import style from './style.module.scss';


export default function UpButton(inView, showButton) {
	return (
		<Link
			className={`${style['up-btn']} ${inView && showButton ? style['up-btn_inview'] : ''}`}
			aria-label="Up"
		>
			<Image src={UpButtonIcon} alt='GoUp'/>
		</Link>
	);
}
