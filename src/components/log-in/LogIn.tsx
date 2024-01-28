import { Dispatch, FC, SetStateAction } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAuthPage } from '../../hooks/useAuthPage';
import Button from '../ui/button/Button';
import styles from './LogIn.module.scss';

interface ILogIn {
	isViewAuth: boolean;
	setViewIsAuth: Dispatch<SetStateAction<boolean>>;
}

const LogIn: FC<ILogIn> = ({ isViewAuth, setViewIsAuth }) => {
	const { isAuth } = useAuth();

	const { register, handleSubmit, onSubmit, errors } = useAuthPage();

	return (
		<div className={styles.wrapper_auth}>
			<h2 className={styles.h2}>Авторизация</h2>
			{isAuth && <p>okey</p>}
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.block__input}>
					<input
						{...register('email', {
							required: true,
							pattern: {
								value:
									/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
								message: 'Некорректный формат почты',
							},
						})}
						type='text'
						placeholder='Введите вашу почту'
					/>
					{errors.email?.message && (
						<span className={styles.errors}>{errors.email?.message}</span>
					)}
				</div>
				<div className={styles.block__input}>
					<input
						{...register('password', { required: true })}
						type='password'
					/>
					{errors.password && (
						<span className={styles.errors}>Введите пароль</span>
					)}
				</div>
				<div className={styles.block__buttons}>
					<Button buttonFor='auth-in-start-page'>Войти</Button>
					<Button
						buttonFor='switch-auth'
						isViewAuth={isViewAuth}
						setViewIsAuth={setViewIsAuth}
					>
						Нету аккаунта
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
