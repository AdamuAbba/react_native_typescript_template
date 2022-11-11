import renderWithWrappers from 'helpers/testHelpers/renderWithWrappers';
import React from 'react';
import {IWelcomeScreenProps} from './types';
import WelcomeScreen from './WelcomeScreen';

describe('Testing WelcomeScreen', () => {
  var WelcomeNavigation: IWelcomeScreenProps['navigation'] = {
    navigate: jest.fn(),
  };
  it('renders the component correctly', () => {
    renderWithWrappers(<WelcomeScreen navigation={WelcomeNavigation} />);
  });
});
