module.exports = function (api) {
	api.cache(true);
	const isExpoGo = !process.env.EXPO_TARGET;

	return {
		presets: [
			'babel-preset-expo',
			...(isExpoGo ? [] : ['@babel/preset-env']),
		],
		plugins: [
			'@babel/plugin-proposal-export-namespace-from',
			'react-native-reanimated/plugin',
			require.resolve('expo-router/babel'),
			'module:react-native-dotenv',
			...(isExpoGo
				? []
				: [
						[
							'@babel/plugin-transform-private-methods',
							{ loose: true },
						],
						[
							'@babel/plugin-transform-private-property-in-object',
							{ loose: true },
						],
						[
							'@babel/plugin-transform-class-properties',
							{ loose: true },
						],
					]),
		],
	};
};
