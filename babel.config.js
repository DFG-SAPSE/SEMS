module.exports = function (api) {
	api.cache(true);
	return {
		// added @babel/preset-env under presets for jest unit testing compatibility ES6 modules
		presets: ['babel-preset-expo', '@babel/preset-env'],

		plugins: [
			'@babel/plugin-proposal-export-namespace-from',
			'react-native-reanimated/plugin',
			require.resolve('expo-router/babel'),

			// { loose: true } for jest unit testing compatibility ES6 modules
			// without loose : true setting, the console will give incompatibility warnings
			['@babel/plugin-transform-private-methods', { loose: true }],
			[
				'@babel/plugin-transform-private-property-in-object',
				{ loose: true },
			],
			['@babel/plugin-transform-class-properties', { loose: true }],
			'module:react-native-dotenv',
		],
	};
};
