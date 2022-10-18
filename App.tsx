import {theme} from 'configs/themeConfig';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import store from 'features/store';
import React, {useEffect, useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import RootStack from 'routes/RootStack';

const App = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState(false);

  const fontConfig = {
    'FuzzyBubbles-Regular': require('./src/assets/fonts/FuzzyBubbles_Regular.ttf'),
    'FuzzyBubbles-Bold': require('./src/assets/fonts/FuzzyBubbles_Bold.ttf'),
  };

  const prepareApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(fontConfig);
    } catch (error) {
      console.warn(error);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    prepareApp();
  }, []);

  if (!appIsReady) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <RootStack />
        </PaperProvider>
        <FlashMessage position="top" />
      </StoreProvider>
    );
  }
};

export default App;
