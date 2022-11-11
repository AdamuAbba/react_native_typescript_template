import {IRootStackScreenProps} from 'routes/RootStack/types';

type ISomeOtherScreenProps = {
  navigation: {
    goBack: IRootStackScreenProps<'some-other-screen', 'navigation'>['goBack'];
  };
};

export type {ISomeOtherScreenProps};
