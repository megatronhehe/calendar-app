export const upperCaseFirstLetter = (string) => {
	const firstStringUpperCased = string[0].toUpperCase();
	const restOfTheString = string.slice(1);
	return `${firstStringUpperCased}${restOfTheString}`;
};
