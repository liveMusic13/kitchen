import {
	sendEmailVerification,
	updateEmail,
	updatePassword,
	updateProfile,
	verifyBeforeUpdateEmail,
} from 'firebase/auth';
import { FC, PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { actions as editPassAction } from '../../../store/edit-password/editPassword';
import { actions as editProfileAction } from '../../../store/edit-profile/editProfile.slice';
import { actions as editSaveAction } from '../../../store/edit-save/editSave.slice';
import { RootState } from '../../../store/store';
import { IButtonProps } from '../../../types/button.types';
import styles from './Button.module.scss';

const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	buttonFor,
	isViewAuth,
	setViewIsAuth,
}) => {
	const editPassword = useSelector((state: RootState) => state.editPassword);
	const user = useSelector((state: RootState) => state.user);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const newPassword = async () => {
		const user = auth.currentUser;

		if (user) {
			try {
				const responce = await updatePassword(user, editPassword.password);
				dispatch(editSaveAction.isEditSaveActive(''));
				dispatch(editPassAction.switchViewPass(''));
				dispatch(editPassAction.addNewPassword(''));
				console.log(responce);
			} catch (error: any) {
				console.log(error);
			}
		}
	};

	const newUserProfile = async () => {
		try {
			if (auth.currentUser) {
				const nameAndPhoto = await updateProfile(auth.currentUser, {
					displayName: user.name,
					photoURL: user.image,
				});

				console.log(nameAndPhoto, ' nameAndPhoto - ok');

				await verifyBeforeUpdateEmail(auth.currentUser, user.email);
				const email = await updateEmail(auth.currentUser, user.email);
				console.log(email, ' email - ok');
				dispatch(editSaveAction.isEditSaveActive(''));
				dispatch(editProfileAction.isEditProfile(''));
			}
		} catch (error: any) {
			console.log(error);
		}
	};

	const emailVerification = async () => {
		try {
			if (auth.currentUser) {
				const responce = await sendEmailVerification(auth.currentUser);
				dispatch(editSaveAction.isEditSaveActive(''));
				console.log(responce, 'ok verify');
			}
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<>
			{buttonFor === 'auth' ? (
				<button
					className={styles.button__auth}
					onClick={() => navigate('/auth')}
				>
					{children}
				</button>
			) : buttonFor === 'auth-in-start-page' ? (
				<button type='submit' className={styles.button__auth_in_start_page}>
					{children}
				</button>
			) : buttonFor === 'register-in-start-page' ? (
				<button type='submit' className={styles.button__auth_in_start_page}>
					{children}
				</button>
			) : buttonFor === 'switch-auth' ? (
				<button
					type='submit'
					className={styles.button__auth_in_start_page}
					onClick={() => {
						if (setViewIsAuth) setViewIsAuth(!isViewAuth);
					}}
				>
					{children}
				</button>
			) : buttonFor === 'personal-area' ? (
				<button
					className={styles.button__auth}
					onClick={() => navigate('./personal-area')}
				>
					{children}
				</button>
			) : buttonFor === 'profile-button' ? (
				<button
					className={styles.button__auth_in_start_page}
					onClick={newUserProfile}
				>
					{children}
				</button>
			) : buttonFor === 'profile-button-edit' ? (
				<button
					className={styles.button__auth_in_start_page}
					onClick={() => dispatch(editProfileAction.isEditProfile(''))}
				>
					{children}
				</button>
			) : buttonFor === 'profile-button-password' ? (
				<button
					className={styles.button__auth_in_start_page}
					onClick={() => {
						dispatch(editPassAction.addNewPassword(''));
						dispatch(editPassAction.switchViewPass(''));
					}}
				>
					{children}
				</button>
			) : buttonFor === 'profile-button-password-save' ? (
				<button
					className={styles.button__auth_in_start_page}
					onClick={newPassword}
				>
					{children}
				</button>
			) : buttonFor === 'verify-email' ? (
				<button
					className={styles.button__auth_in_start_page}
					onClick={emailVerification}
				>
					{children}
				</button>
			) : buttonFor === 'to-home' ? (
				<button
					className={styles.button__to_home}
					onClick={() => navigate('/')}
				>
					<img src='../images/icons/exit.png' alt='exit' />
					{children}
				</button>
			) : (
				<button>{children}</button>
			)}
		</>
	);
};

export default Button;
