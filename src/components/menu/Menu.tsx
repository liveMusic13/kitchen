import { FC } from 'react';
import styles from './Menu.module.scss';
import { menuData } from './menu.data';

const Menu: FC = () => {
	return (
		<ul className={styles.block__menu}>
			<li className={styles.menu__recipe}>
				Рецепты
				<ul className={styles.block__recipe}>
					{menuData.recipe.map(recipe => {
						return <li key={recipe}>{recipe}</li>;
					})}
				</ul>
			</li>
			<li className={styles.menu__kitchen}>
				Кухни
				<ul className={styles.block__kitchen}>
					{menuData.kitchen.map(kitchen => {
						return <li key={kitchen}>{kitchen}</li>;
					})}
				</ul>
			</li>
		</ul>
	);
};

export default Menu;
