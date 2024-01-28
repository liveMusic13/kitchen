import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { auth } from '../firebase';

export const useRefreshToken = () => {
	const token = Cookies.get('token');

	const refreshFunction = async () => {
		try {
			const newToken = await auth.currentUser?.getIdToken(true);

			if (typeof newToken === 'string') Cookies.set('token', newToken);
		} catch (error: any) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!token) {
			refreshFunction();
		}
	}, [token]);
};
