import {fireEvent, render} from '@testing-library/react-native';
import RootStack from 'routes/RootStack/RootStack';

describe('Testing RootStack', () => {
  it('it should render', () => {
    const {getByText} = render(<RootStack />);
    const header = getByText('Welcome');
    const body = getByText('Welcome...😭 let us be lazy');
    expect(header).toBeTruthy();
    expect(body).toBeTruthy();
  });
  it('clicking on a button takes you to SomeOtherScreen', () => {
    const {getByTestId, queryByText} = render(<RootStack />);
    const navigationButton = getByTestId('navigationButton');
    fireEvent.press(navigationButton);
    const newHeader = queryByText('Other Screen');
    const newBody = queryByText('some Random text');
    expect(newHeader).toBeTruthy();
    expect(newBody).toBeTruthy();
  });
});
