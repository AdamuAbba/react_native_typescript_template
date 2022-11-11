import 'react-native-gesture-handler';
import {theme} from 'configs/themeConfig';
import store, {persistor} from 'features/store';
import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FlashMessage from 'react-native-flash-message';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
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
          <PersistGate loading={null} persistor={persistor}>
            <RootStack />
          </PersistGate>
        </PaperProvider>
        <FlashMessage position="top" />
      </StoreProvider>
    );
  }
};

export default App;
