import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useCheckToken } from '../../../hooks/useCheckToken';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Main from '../../main/Main';

const PersonalArea: FC = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	useCheckToken();
	useEffect(() => {
		if (!isAuth) {
			navigate('/');
		}
	}, [isAuth]);

	return (
		<Layout bgColor='#8fa8f6'>
			<Header page='personal-area' />
			<Main page='personal-area' />
			<Footer />
		</Layout>
	);
};

export default PersonalArea;
