import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import SomeOtherScreen from 'screens/SomeOtherScreen';
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
        }}
        initialRouteName="welcome-screen">
        <Screen
          name="welcome-screen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Screen
          name="some-other-screen"
          component={SomeOtherScreen}
          options={{
            title: 'Other Screen',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
