import { FC } from 'react';
import styles from './SaveEdit.module.scss';

const SaveEdit: FC = () => {
	return (
		<div className={styles.wrapper_ok}>
			<img src='../images/icons/ok.png' alt='save' />
			<p>Изменения сохранены</p>
		</div>
	);
};

export default SaveEdit;
