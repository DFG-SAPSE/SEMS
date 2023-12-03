export const camelCaseToNormalText = (camelCaseStr) => {
	// Add a space before each uppercase letter and split into words
	const words = camelCaseStr
		.replace(/([A-Z])/g, " $1")
		.trim()
		.split(" ");

	// Capitalize the first letter of the first word
	words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

	// Join the words back into a string
	return words.join(" ");
};
