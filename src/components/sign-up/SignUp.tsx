import { Dispatch, FC, SetStateAction } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRegisterPage } from '../../hooks/useRegisterPage';
import Button from '../ui/button/Button';
import styles from './SignUp.module.scss';

interface ISignUp {
	isViewAuth: boolean;
	setViewIsAuth: Dispatch<SetStateAction<boolean>>;
}

const SignUp: FC<ISignUp> = ({ isViewAuth, setViewIsAuth }) => {
	const { isLoading } = useAuth();

	const { register, handleSubmit, onSubmit, errors } = useRegisterPage();

	return (
		<div className={styles.wrapper_register}>
			<h2 className={styles.h2}>Зарегистрироваться</h2>
			{isLoading && <p>Loading</p>}
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
					<Button buttonFor='register-in-start-page'>Зарегистрироваться</Button>
					<Button
						buttonFor='switch-auth'
						isViewAuth={isViewAuth}
						setViewIsAuth={setViewIsAuth}
					>
						Есть аккаунт
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
