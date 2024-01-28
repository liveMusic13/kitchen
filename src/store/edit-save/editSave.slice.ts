import { createSlice } from '@reduxjs/toolkit';
import { IEditSave } from '../../types/slices.types';

const initialState: IEditSave = {
	isEditSave: false,
};

export const editSave = createSlice({
	name: 'editSave',
	initialState,
	reducers: {
		isEditSaveActive: (store, { payload }) => {
			store.isEditSave = true;
		},
		isEditSaveNoActive: (store, { payload }) => {
			store.isEditSave = false;
		},
	},
});

export const { actions, reducer } = editSave;
