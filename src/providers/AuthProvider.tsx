import Cookies from 'js-cookie';
import { FC, PropsWithChildren, createContext, useState } from 'react';
import { IAuthContext } from '../types/providers.types';

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuth, setIsAuth] = useState<boolean>(!!Cookies.get('token'));
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<AuthContext.Provider
			value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
