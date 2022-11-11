import {RootState} from 'features/store/types';
const selectIsLoggedIn = (state: RootState) =>
  state.persistedReducer.auth.isLoggedIn;

export {selectIsLoggedIn};
