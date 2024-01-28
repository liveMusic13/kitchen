import {
	INewData,
	IObjectMonth,
	IObjectWeek,
	IRusDate,
} from '../types/castomHooks.types';

export const useTranslateDate = () => {
	const transcriptDate = (date: string): INewData => {
		let newData: INewData = {
			dayWeek: '',
			dayNum: '',
			month: '',
			year: '',
			time: '',
		};

		for (let i: number = 0; i <= date.length; i++) {
			if (i <= 2) {
				newData.dayWeek += date[i];
			} else if (i >= 5 && i <= 6) {
				newData.dayNum += date[i];
			} else if (i >= 8 && i <= 10) {
				newData.month += date[i];
			} else if (i >= 12 && i <= 15) {
				newData.year += date[i];
			} else if (i >= 17 && i <= 24) {
				newData.time += date[i];
			}
		}

		const translation = () => {
			let rusDate: IRusDate = {
				week: '',
				month: '',
			};

			const objectWeek: IObjectWeek = {
				Mon: 'Понедельник',
				Tue: 'Вторник',
				Wed: 'Среда',
				Thu: 'Четверг',
				Fri: 'Пятница',
				Sat: 'Суббота',
				Sun: 'Воскресенье',
			};

			const objectMonth: IObjectMonth = {
				Jan: 'Январь',
				Feb: 'Февраль',
				Mar: 'Март',
				Apr: 'Апрель',
				May: 'Май',
				Jun: 'Июнь',
				Jul: 'Июль',
				Aug: 'Август',
				Sep: 'Сентябрь',
				Oct: 'Октябрь',
				Nov: 'Ноябрь',
				Dec: 'Декабрь',
			};

			for (let week in objectWeek) {
				if (week === newData.dayWeek)
					rusDate.week = objectWeek[newData.dayWeek as keyof typeof objectWeek];
			}

			for (let month in objectMonth) {
				if (month === newData.month)
					rusDate.month =
						objectMonth[newData.month as keyof typeof objectMonth];
			}

			return rusDate;
		};

		newData.dayWeek = translation().week;
		newData.month = translation().month;

		return newData;
	};

	return {
		transcriptDate,
	};
};
