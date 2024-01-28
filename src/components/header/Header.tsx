import Cookies from 'js-cookie';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { RootState } from '../../store/store';
import { IHeaderProps } from '../../types/header.types';
import Menu from '../menu/Menu';
import Button from '../ui/button/Button';
import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({ page }) => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	const user = useSelector((state: RootState) => state.user);

	const { setIsAuth } = useAuth();

	const handleLogout = () => {
		Cookies.remove('token');
		setIsAuth(false);
		navigate('/');
	};

	return (
		<header className={styles.wrapper_header}>
			<div className={styles.block__logo}>
				<img src='../logo.png' alt='logo' />
				<h1 className={styles.logo}>WebKitchen</h1>
			</div>
			<Menu />
			{page === 'personal-area' ? (
				<>
					<div className={styles.block__menu}>
						<h2 className={styles.title__menu}>Меню</h2>
						<ul>
							<li className={styles.list__menu}>Книга рецептов</li>
							<li className={styles.list__menu}>Создать рецепт</li>
							<li className={styles.list__menu}>Информация о профиле</li>
							<li className={styles.list__menu} onClick={handleLogout}>
								Выйти из профиля
							</li>
						</ul>
					</div>
					<p className={styles.welcome__name}>
						Добро пожаловать <span>{user?.name}</span>!
					</p>
				</>
			) : (
				<>
					{' '}
					{isAuth ? (
						<Button buttonFor='personal-area'>
							<img src='../images/icons/user.png' alt='user' />
							Личный кабинет
						</Button>
					) : (
						<Button buttonFor='auth'>
							<img src='../images/icons/user.png' alt='user' />
							Войти / Зарегистрироваться
						</Button>
					)}
				</>
			)}
		</header>
	);
};

export default Header;
