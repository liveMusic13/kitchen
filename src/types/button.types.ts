import { Dispatch, SetStateAction } from 'react';

export interface IButtonProps {
	buttonFor: string;
	isViewAuth?: boolean;
	setViewIsAuth?: Dispatch<SetStateAction<boolean>>;
}
