import { SubmitHandler, useForm } from 'react-hook-form';
import { authService } from '../services/auth.service';
import { IInputs } from '../types/hookForm.types';
import { useAuth } from './useAuth';

export const useAuthPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IInputs>({
		mode: 'onChange',
	});

	const { setIsAuth, setIsLoading } = useAuth();

	const onSubmit: SubmitHandler<IInputs> = async data => {
		authService.logIn(data.email, data.password, setIsAuth, setIsLoading);

		reset();
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		reset,
		errors,
	};
};
