import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isEditProfile: false,
};

export const editProfile = createSlice({
	name: 'editProfile',
	initialState,
	reducers: {
		isEditProfile: (state, { payload }) => {
			state.isEditProfile = !state.isEditProfile;
		},
	},
});

export const { actions, reducer } = editProfile;
