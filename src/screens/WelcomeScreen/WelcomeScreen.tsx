import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './WelcomeScreen.styles';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import {selectIsLoggedIn} from 'features/auth/selectors';
import {setIsLoggedIn} from 'features/auth/authSlice';
import {Button} from 'react-native-paper';
import {IWelcomeScreenProps} from './types';
const WelcomeScreen = ({navigation}: IWelcomeScreenProps) => {
  // const isLoggedIn = useAppSelector(selectIsLoggedIn);
  // const dispatch = useAppDispatch();
  const handleBtnPress = (): void => {
    navigation.navigate('some-other-screen');
  };
  // useEffect(() => {
  //   dispatch(setIsLoggedIn(true));
  // }, []);

  return (
    <View style={styles.container} testID="main-view">
      <Text>Welcome...😭 let us be lazy</Text>
      {/* {isLoggedIn ? <Text>Redux persist works</Text> : null} */}
      <Button testID="navigationButton" onPress={handleBtnPress}>
        Go to next screen
      </Button>
    </View>
  );
};

export default WelcomeScreen;
