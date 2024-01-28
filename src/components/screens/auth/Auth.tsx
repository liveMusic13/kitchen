import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Layout from '../../layout/Layout';
import LogIn from '../../log-in/LogIn';
import SignUp from '../../sign-up/SignUp';

const Auth: FC = () => {
	const [isViewAuth, setViewIsAuth] = useState(false);
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) navigate('/');
	}, [isAuth]);

	return (
		<Layout bgColor='#8fa8f6' justifyContent='center'>
			{isViewAuth ? (
				<LogIn isViewAuth={isViewAuth} setViewIsAuth={setViewIsAuth} />
			) : (
				<SignUp isViewAuth={isViewAuth} setViewIsAuth={setViewIsAuth} />
			)}
		</Layout>
	);
};

export default Auth;
