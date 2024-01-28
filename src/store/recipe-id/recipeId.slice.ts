import { createSlice } from '@reduxjs/toolkit';
import { IRecipeId } from '../../types/slices.types';

const initialState: IRecipeId = {
	id: 0,
};

export const recipeId = createSlice({
	name: 'recipeId',
	initialState,
	reducers: {
		addRecipeId: (state, { payload }) => {
			state.id = payload;
		},
	},
});

export const { actions, reducer } = recipeId;
