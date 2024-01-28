import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslateDate } from '../../hooks/useTranslateDate';
import { RootState } from '../../store/store';
import { IDateProps } from '../../types/date.types';
import styles from './DateRegister.module.scss';

const DateRegister: FC<IDateProps> = ({ date }) => {
	const user = useSelector((state: RootState) => state.user);
	const { transcriptDate } = useTranslateDate();

	return (
		<div className={styles.wrapper__date}>
			<h2 className={styles.title}>{date}</h2>
			<p className={styles.paragraph}>
				<span>День недели: </span>
				{
					transcriptDate(
						date === 'Дата регистрации'
							? user.creationTime
							: user.lastSignInTime,
					).dayWeek
				}
			</p>
			<p className={styles.paragraph}>
				<span>День: </span>
				{
					transcriptDate(
						date === 'Дата регистрации'
							? user.creationTime
							: user.lastSignInTime,
					).dayNum
				}
			</p>
			<p className={styles.paragraph}>
				<span>Месяц: </span>
				{
					transcriptDate(
						date === 'Дата регистрации'
							? user.creationTime
							: user.lastSignInTime,
					).month
				}
			</p>
			<p className={styles.paragraph}>
				<span>Год: </span>
				{
					transcriptDate(
						date === 'Дата регистрации'
							? user.creationTime
							: user.lastSignInTime,
					).year
				}
			</p>
			<p className={styles.paragraph}>
				<span>Время: </span>
				{
					transcriptDate(
						date === 'Дата регистрации'
							? user.creationTime
							: user.lastSignInTime,
					).time
				}
			</p>
		</div>
	);
};

export default DateRegister;
