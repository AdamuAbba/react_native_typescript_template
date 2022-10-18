import {Dimensions, StatusBar} from 'react-native';
import {MessageOptions} from 'react-native-flash-message';

const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const SCREEN_WIDTH: number = Dimensions.get('window').width;
const NINETY_PERCENT_WIDTH = 0.9 * SCREEN_WIDTH;

const successConfig: MessageOptions = {
  type: 'success',
  duration: 2500,
  animated: true,
  icon: 'success',
  hideOnPress: true,
  autoHide: true,
  hideStatusBar: false,
  message: 'Success',
  statusBarHeight: StatusBar.currentHeight,
};

const errorConfig: MessageOptions = {
  ...successConfig,
  type: 'danger',
  icon: 'danger',
  message: 'Error',
};

export {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  successConfig,
  errorConfig,
  NINETY_PERCENT_WIDTH,
};
