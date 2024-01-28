import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as editPassAction } from '../../../store/edit-password/editPassword';
import { RootState } from '../../../store/store';
import { actions as userAction } from '../../../store/user/user.slice';
import { IInputProps } from '../../../types/input.types';
import styles from './Input.module.scss';

const Input: FC<IInputProps> = ({ inputFor }) => {
	const newPassword = useSelector((state: RootState) => state.editPassword);
	const user = useSelector((state: RootState) => state.user);
	const [isViewPassword, setIsViewPassword] = useState(false);

	const dispatch = useDispatch();

	return (
		<>
			{inputFor === 'edit-password' ? (
				<div className={styles.block__password}>
					<input
						className={styles.password}
						type={isViewPassword ? 'text' : 'password'}
						placeholder='Введите новый пароль'
						value={newPassword.password}
						onChange={event =>
							dispatch(editPassAction.addNewPassword(event.target.value))
						}
					/>
					<button
						className={styles.view__password}
						onClick={() => setIsViewPassword(!isViewPassword)}
					>
						Показать пароль
					</button>
				</div>
			) : inputFor === 'edit-profile_name' || 'edit-profile_email' ? (
				<input
					className={styles.password}
					type='text'
					value={inputFor === 'edit-profile_name' ? user.name : user.email}
					onChange={event =>
						inputFor === 'edit-profile_name'
							? dispatch(userAction.editName(event.target.value))
							: dispatch(userAction.editEmail(event.target.value))
					}
				/>
			) : (
				<input type='text' />
			)}
		</>
	);
};

export default Input;
