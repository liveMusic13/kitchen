import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as editPassword } from './edit-password/editPassword';
import { reducer as editProfile } from './edit-profile/editProfile.slice';
import { reducer as editSave } from './edit-save/editSave.slice';
import { reducer as recipeId } from './recipe-id/recipeId.slice';
import { reducer as recipeTape } from './recipe-tape/recipeTape.slice';
import { reducer as user } from './user/user.slice';

const reducers = combineReducers({
	recipeTape: recipeTape,
	recipeId: recipeId,
	user: user,
	editPassword: editPassword,
	editSave: editSave,
	editProfile: editProfile,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
