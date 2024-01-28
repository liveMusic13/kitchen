import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useDescriptionLength from '../../hooks/useDescription';
import { actions as recipeIdAction } from '../../store/recipe-id/recipeId.slice';
import { IRecipeProps } from '../../types/recipe.types';
import styles from './Recipe.module.scss';

const Recipe: FC<IRecipeProps> = ({ recipe }) => {
	const { truncateDescription } = useDescriptionLength();

	const navigate = useNavigate();

	const dispatch = useDispatch();

	let countIngredient: number = 0;

	return (
		<div
			className={styles.wrapper_recipe}
			onClick={() => {
				navigate(`/detail-recipe/${recipe.id}`);
				dispatch(recipeIdAction.addRecipeId(recipe.id));
			}}
		>
			<img
				className={styles.preview__image}
				src='./images/images.jfif'
				alt='test'
			/>
			<div className={styles.block__preview}>
				<h2 className={styles.title}>{recipe.name}</h2>
				<p className={styles.description}>
					{truncateDescription(recipe.description, 155)}
				</p>
				<div className={styles.block__bottom}>
					<div className={styles.block__ingredients}>
						{recipe.ingredients.map(ingredient => {
							++countIngredient;

							if (countIngredient <= 5) {
								return (
									<p key={ingredient} className={styles.ingredient}>
										{ingredient}
									</p>
								);
							}
							if (countIngredient === 6) {
								return (
									<p key='...' className={styles.ingredient}>
										...
									</p>
								);
							}
						})}
					</div>

					<div
						className={styles.like__preview}
						// onClick={() => {
						// 	dispatch(recipeTapeAction.addLike(recipe.id));
						// }}
					>
						<img
							className={styles.like__image}
							src='../images/icons/like.png'
							alt='like'
						/>{' '}
						<p>{recipe.likes.numLikes}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
