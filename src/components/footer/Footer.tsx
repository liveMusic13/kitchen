import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<footer
			className={styles.wrapper_footer}
			style={{ backgroundColor: '#8bcbde', width: '100%' }}
		>
			<div className={styles.block__content}>
				<div className={styles.contacts}>
					<div className={styles.block__mail}>
						<img src='../images/icons/message.png' alt='message' />
						<a href='mailto:aegis.ko20@mail.ru'>
							Вопросы и предложения, пишите на эту почту
						</a>
					</div>
					<div className={styles.block__mail}>
						<img src='../images/icons/message.png' alt='message' />
						<a href='mailto:aegis.ko20@mail.ru'>
							По поводу сотрудничества, пишите сюда
						</a>
					</div>
				</div>
				<a className={styles.icons8} href='https://icons8.ru/'>
					Иконки получены здесь
				</a>
			</div>
			<p className={styles.author}>
				<img src='../images/icons/author1.png' alt='author' />
				WebKitchen 2023
			</p>
		</footer>
	);
};

export default Footer;
