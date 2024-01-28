import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IRecipeTape } from '../../types/slices.types';
import Pagination from '../pagination/Pagination';
import Recipe from '../recipe/Recipe';
import styles from './Content.module.scss';

const Content: FC = () => {
	const recipeTape = useSelector((state: RootState) => state.recipeTape);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [itemsPerPage, setItemsPerPage] = useState<number>(8);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = recipeTape.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div className={styles.wrapper_content}>
			<h2 className={styles.title}>Лента рецептов</h2>
			<div className={styles.block__recipes}>
				{currentItems.map((recipe: IRecipeTape) => {
					return <Recipe key={recipe.id} recipe={recipe} />;
				})}
			</div>
			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={recipeTape.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default Content;
