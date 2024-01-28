import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { routes } from './routes.data';

const Router: FC = () => {
	const { isAuth } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false;
					}

					return (
						<Route
							key={route.path}
							element={<route.component />}
							path={route.path}
						/>
					);
				})}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
