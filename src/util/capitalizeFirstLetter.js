/*
    Devolve a primeira letra da string maiuscula
    ex: miguel -> Miguel
*/

const capitalizeFirstLetter = string => {
	return string[0].toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter