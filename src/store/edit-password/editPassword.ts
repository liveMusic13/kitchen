import { createSlice } from '@reduxjs/toolkit';
import { IEditPassword } from '../../types/slices.types';

const initialState: IEditPassword = {
	password: '',
	isPassword: false,
};

export const editPassword = createSlice({
	name: 'editPassword',
	initialState,
	reducers: {
		addNewPassword: (state, { payload }) => {
			return { ...state, password: payload };
		},
		switchViewPass: (state, { payload }) => {
			return { ...state, isPassword: !state.isPassword };
		},
	},
});

export const { actions, reducer } = editPassword;
