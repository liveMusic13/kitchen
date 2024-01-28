import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles/global.scss';
import './firebase.ts';
import AuthProvider from './providers/AuthProvider.tsx';
import Router from './routes/Router.tsx';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</Provider>
	</React.StrictMode>,
);
