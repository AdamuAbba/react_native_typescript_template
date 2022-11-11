import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './SomeOtherScreen.styles';
import {ISomeOtherScreenProps} from 'screens/SomeOtherScreen/types';
import {Button} from 'react-native-paper';

const SomeOtherScreen = ({navigation}: ISomeOtherScreenProps) => {
  const handleOnPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>some Random text</Text>
      <Button onPress={handleOnPress}>Go Back</Button>
    </View>
  );
};

export default SomeOtherScreen;
