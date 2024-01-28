import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as editSaveAction } from '../../store/edit-save/editSave.slice';
import { RootState } from '../../store/store';
import { actions as userAction } from '../../store/user/user.slice';
import DateRegister from '../date-register/DateRegister';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import SaveEdit from '../ui/save-edit/SaveEdit';
import styles from './InsideInfo.module.scss';

const InsideInfo: FC = () => {
	const user = useSelector((state: RootState) => state.user);
	const editProfile = useSelector((state: RootState) => state.editProfile);
	const isEditSave = useSelector((state: RootState) => state.editSave);

	const editPassword = useSelector((state: RootState) => state.editPassword);

	const dispatch = useDispatch();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const imageUrl = URL.createObjectURL(file);
			dispatch(userAction.addPhoto(imageUrl));
		}
	};

	useEffect(() => {
		if (isEditSave) {
			setTimeout(() => {
				dispatch(editSaveAction.isEditSaveNoActive(''));
			}, 3000);
		}
	}, [isEditSave]);

	return (
		<div className={styles.wrapper_inside}>
			{isEditSave.isEditSave && <SaveEdit />}
			<div className={styles.block__image}>
				<img
					className={styles.image}
					src={
						user.image === null || ''
							? '../images/image_profile.png'
							: user.image
					}
					alt='image'
				/>
				<input type='file' accept='image/*' onChange={handleFileChange} />
			</div>
			<div className={styles.block__info}>
				{editProfile.isEditProfile ? (
					<Input inputFor='edit-profile_name' />
				) : (
					<h2 className={styles.title}>{user.name}</h2>
				)}
				{editProfile.isEditProfile ? (
					<Input inputFor='edit-profile_email' />
				) : (
					<p className={styles.email}>{user.email}</p>
				)}

				<div className={styles.block__date}>
					<DateRegister date='Дата регистрации' />
					<DateRegister date='Последний вход' />
				</div>
				<Button buttonFor='profile-button'>Сохранить изменения</Button>
			</div>
			<div className={styles.block__buttons}>
				<Button buttonFor='profile-button-edit'>Изменить информацию</Button>
				<Button buttonFor='verify-email'>Подтвердить почту</Button>
				<div className={styles.block__password}>
					{editPassword.isPassword && (
						<>
							<Input inputFor='edit-password' />
							<Button buttonFor='profile-button-password-save'>
								Сохранить
							</Button>
						</>
					)}
					<Button buttonFor='profile-button-password'>
						{editPassword.isPassword ? 'Отменить' : 'Изменить пароль'}
					</Button>
				</div>
			</div>
			<Button buttonFor='to-home'>На главную</Button>
		</div>
	);
};

export default InsideInfo;
