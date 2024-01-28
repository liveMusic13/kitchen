import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions as recipeTapeAction } from '../../store/recipe-tape/recipeTape.slice';
import { RootState } from '../../store/store';
import styles from './DetailRecipe.module.scss';

const DetailRecipe: FC = () => {
	const recipeId = useSelector((state: RootState) => state.recipeId);
	const recipeTape = useSelector((state: RootState) => state.recipeTape);
	const user = useSelector((state: RootState) => state.user);

	const dispatch = useDispatch();

	const recipeTarget = recipeTape.find(recipe => recipe.id === recipeId.id);

	return (
		<div className={styles.wrapper_detailRecipe}>
			<Link to={'/'} className={styles.button__exit}>
				<img src='../images/icons/exit.png' alt='exit' />
			</Link>
			<h2 className={styles.title}>{recipeTarget?.name}</h2>
			<div className={styles.block__image}>
				<img src={recipeTarget?.image} alt='img' />
				<div className={styles.block__ingredients}>
					{recipeTarget?.ingredients.map(ingredient => {
						return <p key={ingredient}>{ingredient}</p>;
					})}
				</div>
			</div>
			<p className={styles.description}>{recipeTarget?.description}</p>
			<div className={styles.block__buttons}>
				<button className={styles.button__addFavorite}>
					Сохранить в книге рецептов
				</button>
				<button
					className={styles.button__like}
					onClick={() => {
						dispatch(
							recipeTapeAction.addLike({
								id: recipeTarget?.id,
								userId: user.id,
							}),
						);
					}}
				>
					<img
						className={styles.like__image}
						src='../images/icons/like.png'
						alt='like'
					/>{' '}
					{recipeTarget?.likes.numLikes}
				</button>
			</div>
		</div>
	);
};

export default DetailRecipe;
