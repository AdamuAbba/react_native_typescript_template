import WelcomeScreen from './WelcomeScreen';
import {render} from '@testing-library/react-native';

describe('<WelcomeScreen/>', () => {
  test('should at least render', () => {
    const {getByTestId} = render(<WelcomeScreen />);
    const mainView = getByTestId('main-view');
    expect(mainView).toBeTruthy();
  });
});
