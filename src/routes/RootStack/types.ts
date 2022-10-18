import {StackScreenProps} from '@react-navigation/stack';
import {Product} from 'features/feed/types';

type IRootStackParamsList = {
  'welcome-screen': undefined;
};

type IRootStackScreenProps<T extends keyof IRootStackParamsList> =
  StackScreenProps<IRootStackParamsList, T>;

export type {IRootStackParamsList, IRootStackScreenProps};
