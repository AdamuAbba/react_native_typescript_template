import React from 'react';
import {render} from '@testing-library/react-native';
import {theme} from 'configs/themeConfig';
import store, {persistor} from 'features/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const renderWithWrappers = renderedComponent => {
  return render(
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          {renderedComponent}
        </PersistGate>
      </PaperProvider>
    </StoreProvider>,
  );
};

export default renderWithWrappers;
