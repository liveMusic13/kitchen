import { SubmitHandler, useForm } from 'react-hook-form';
import { authService } from '../services/auth.service';
import { IInputs } from '../types/hookForm.types';
import { useAuth } from './useAuth';

export const useRegisterPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IInputs>({
		mode: 'onChange',
	});

	const { setIsLoading } = useAuth();

	const onSubmit: SubmitHandler<IInputs> = async data => {
		authService.signIn(data.email, data.password, setIsLoading);

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
