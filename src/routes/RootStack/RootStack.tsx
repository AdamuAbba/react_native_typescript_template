import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from 'screens/WelcomeScreen';
import {IRootStackParamsList} from './types';

const Tabs = createStackNavigator<IRootStackParamsList>();

const {Navigator, Screen} = Tabs;

const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}>
        <Screen name="welcome-screen" component={WelcomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
