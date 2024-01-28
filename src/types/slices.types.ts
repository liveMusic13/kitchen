export interface ILikes {
	numLikes: number;
	usersLikes: string[];
}

export interface IRecipeTape {
	id: number;
	name: string;
	image: string;
	description: string;
	likes: ILikes;
	ingredients: string[];
}

export interface IRecipeId {
	id: number;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	image: string;
	creationTime: string;
	lastSignInTime: string;
}

export interface IEditPassword {
	password: string;
	isPassword: boolean;
}

export interface IEditSave {
	isEditSave: boolean;
}
