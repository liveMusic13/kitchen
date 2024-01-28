import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import Main from '../../main/Main';

const RecipePage: FC = () => {
	const recipeId = useSelector((state: RootState) => state.recipeId);
	const recipeTape = useSelector((state: RootState) => state.recipeTape);

	console.log(recipeTape.find(recipe => recipe.id === recipeId.id));

	return (
		<Layout bgColor='#8fa8f6'>
			<Header />
			<Main page='detail-recipe' />
			<Footer />
		</Layout>
	);
};

export default RecipePage;
