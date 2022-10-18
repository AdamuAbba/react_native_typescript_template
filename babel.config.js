module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['.'],
          alias: {
            assets: './src/assets',
            components: './src/components',
            screens: './src/screens',
            utils: './src/utils',
            routes: './src/routes',
            configs: './src/configs',
            features: './src/features',
            services: './src/services',
            helpers: './src/helpers',
            middleware: './src/middleware',
          },
        },
      ],
      '@babel/plugin-proposal-unicode-property-regex',
      'react-native-reanimated/plugin',
    ],
  };
};
