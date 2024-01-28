import { FC } from 'react';
import { IPaginationProps } from '../../types/pagination.types';
import styles from './Pagination.module.scss';

const Pagination: FC<IPaginationProps> = ({
	itemsPerPage,
	totalItems,
	paginate,
}) => {
	const pageNumbers: number[] = [];

	for (let i: number = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className={styles.pagination}>
				{pageNumbers.map(number => {
					return (
						<li
							key={number}
							className={styles['page-item']}
							onClick={() => paginate(number)}
						>
							{number}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
