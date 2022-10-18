import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './WelcomeScreen.styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.container} testID="main-view">
      <Text>Welcome...😭 let us be lazy</Text>
    </View>
  );
};

export default WelcomeScreen;
