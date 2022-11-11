import {IRootStackScreenProps} from 'routes/RootStack/types';

type IWelcomeScreenProps = {
  navigation: {
    navigate: IRootStackScreenProps<'welcome-screen', 'navigation'>['navigate'];
  };
};

export type {IWelcomeScreenProps};
