module.exports = {
	preset: 'jest-expo',
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	transformIgnorePatterns: [
		'node_modules/(?!(react-native|expo|@react-native|firebase|@firebase|@firebase/rules-unit-testing)/)',
	],
};
