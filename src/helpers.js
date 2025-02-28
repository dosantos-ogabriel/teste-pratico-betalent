export const formatPhone = (phone) => {
	const phoneRegex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
	const formattedPhone = phone.replace(phoneRegex, "+$1 ($2) $3-$4");
	return formattedPhone;
};

export const formatDate = (date) => {
	const _date = new Date(date);
	const formattedDate = _date.toLocaleDateString("pt-BR");
	return formattedDate;
};
