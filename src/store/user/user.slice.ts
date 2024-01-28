import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/slices.types';

const initialState: IUser = {
	id: 0,
	name: 'Test',
	email: 'test@test.by',
	image: '',
	creationTime: 'Sat, 30 Dec 2023 20:34:38 GMT',
	lastSignInTime: 'Thu, 04 Jan 2024 13:24:10 GMT',
};

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserInfo: (state, { payload }) => {
			return {
				id: payload.id,
				name: payload.name,
				email: payload.email,
				image: payload.image,
				creationTime: payload.creationTime,
				lastSignInTime: payload.lastSignInTime,
			};
		},
		addPhoto: (state, { payload }) => {
			return { ...state, image: payload };
		},
		editName: (state, { payload }) => {
			state.name = payload;
		},
		editEmail: (state, { payload }) => {
			state.email = payload;
		},
	},
});

export const { actions, reducer } = user;
