import {StackScreenProps} from '@react-navigation/stack';

type IRootStackParamsList = {
  'welcome-screen': undefined;
  'some-other-screen': undefined;
};

type IRootStackScreenProps<
  T extends keyof IRootStackParamsList,
  K extends keyof StackScreenProps<IRootStackParamsList>,
> = StackScreenProps<IRootStackParamsList, T>[K];

export type {IRootStackParamsList, IRootStackScreenProps};
