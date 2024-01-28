import { FC } from 'react';
import { IMainProps } from '../../types/screens.types';
import Content from '../content/Content';
import DetailRecipe from '../detail-recipe/DetailRecipe';
import InsideInfo from '../insideInfo/InsideInfo';
import MyFridge from '../my-fridge/MyFridge';
import styles from './Main.module.scss';

const Main: FC<IMainProps> = ({ page }) => {
	return (
		<div
			className={styles.wrapper_main}
			style={page === 'detail-recipe' ? { justifyContent: 'center' } : {}}
		>
			{page === 'home' ? (
				<>
					<MyFridge />
					<Content />
				</>
			) : page === 'detail-recipe' ? (
				<DetailRecipe />
			) : (
				<>
					<MyFridge page={page} />
					<InsideInfo />
				</>
			)}
		</div>
	);
};

export default Main;
