const useDescriptionLength = () => {
	const truncateDescription = (
		description: string,
		maxLength: number,
	): string => {
		if (description.length <= maxLength) {
			return description;
		}

		return description.slice(0, maxLength) + '...';
	};

	return {
		truncateDescription,
	};
};

export default useDescriptionLength;
