let Config = {
  apiUrl: '',
};

if (process.env.APP_ENV === 'production') {
  Config.apiUrl = '';
} else if (process.env.APP_ENV === 'staging') {
  Config.apiUrl = '';
} else if (process.env.APP_ENV === 'development') {
  Config.apiUrl = '';
}

export default () => ({
  expo: {
    name: 'react native typescript template',
    slug: 'react-native-typescript-template',
    version: '1.0.0',
    jsEngine: 'hermes',
    owner: 'shyweirdo',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    privacy: 'public',
    platforms: ['ios', 'android'],
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#CB77EA',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#09163C',
      },
      softwareKeyboardLayoutMode: 'pan',
      package: 'com.reactNative.template',
    },
    description: 'My custom react native typescript template',
    githubUrl:
      'https://github.com/AdamuAbba/react_native_typescript_template.git',
    extra: {
      ...Config,
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
});
