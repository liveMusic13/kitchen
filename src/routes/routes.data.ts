import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import PersonalArea from '../components/screens/personal-area/PersonalArea';
import RecipePage from '../components/screens/recipe-page/RecipePage';

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false,
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false,
	},
	{
		path: '/personal-area',
		component: PersonalArea,
		isAuth: true,
	},
	{
		path: '/detail-recipe/:id',
		component: RecipePage,
		isAuth: false,
	},
];
