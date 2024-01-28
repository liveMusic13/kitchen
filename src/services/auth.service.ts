import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'js-cookie';
import { auth } from '../firebase';

export const authService = {
	logIn: async (
		email: string,
		password: string,
		setIsAuth: (value: boolean) => void,
		setIsLoading: (value: boolean) => void,
	) => {
		setIsLoading(true);

		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);

			const token = await user.getIdToken(true);
			const refreshToken = user.refreshToken;
			Cookies.set('token', token);
			Cookies.set('refreshToken', refreshToken);

			setIsAuth(true);
		} catch (error: any) {
			console.log(error.code, error.message);
		} finally {
			setIsLoading(false);
		}
	},
	signIn: async (
		email: string,
		password: string,
		setIsLoading: (value: boolean) => void,
	) => {
		setIsLoading(true);

		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error: any) {
			console.log(error.code, error.message);
		} finally {
			setIsLoading(false);
		}
	},
};
