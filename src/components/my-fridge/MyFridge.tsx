import { FC } from 'react';
import { IFridgeProps } from '../../types/fridge.types';
import styles from './MyFridge.module.scss';

const MyFridge: FC<IFridgeProps> = ({ page }) => {
	return (
		<div
			className={styles.wrapper_fridge}
			style={page === 'personal-area' ? { backgroundColor: '#87e8c6' } : {}}
		>
			<h2 className={styles.h2}>Мой холодильник</h2>
			<button>
				<img src='../images/fridge.png' alt='fridge' />
			</button>
		</div>
	);
};

export default MyFridge;
