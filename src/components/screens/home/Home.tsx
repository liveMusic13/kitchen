import { collection, getDocs } from 'firebase/firestore';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, db } from '../../../firebase';
import { useAuth } from '../../../hooks/useAuth';
import { useCheckToken } from '../../../hooks/useCheckToken';
import { useRefreshToken } from '../../../hooks/useRefreshToken';
import { actions as userAction } from '../../../store/user/user.slice';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Main from '../../main/Main';

const Home: FC = () => {
	useCheckToken();
	useRefreshToken();

	const { isAuth } = useAuth();

	const dispatch = useDispatch();

	const test = async () => {
		const querySnapshot = await getDocs(collection(db, 'recipes'));
		querySnapshot.forEach(doc => {
			console.log(doc.data());
		});
	};
	test();

	const getUserInfo = () => {
		const user = auth.currentUser;
		console.log(user);

		return {
			id: user?.uid,
			name:
				user?.displayName === null ? `user - ${user?.uid}` : user?.displayName,
			email: user?.email,
			image: user?.photoURL,
			creationTime: user?.metadata.creationTime,
			lastSignInTime: user?.metadata.lastSignInTime,
		};
	};

	useEffect(() => {
		if (isAuth) {
			dispatch(userAction.addUserInfo(getUserInfo()));
		}
	}, [isAuth]);

	return (
		<Layout bgColor='#87e8c6'>
			<Header />
			<Main page='home' />
			<Footer />
		</Layout>
	);
};

export default Home;
