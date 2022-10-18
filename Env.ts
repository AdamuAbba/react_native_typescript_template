import Constants from 'expo-constants';

const getApiUrl = () => {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl;

  if (!apiUrl) {
    throw new Error('apiUrl is missing.');
  } else {
    return apiUrl;
  }
};

export const Env = {
  BASE_URL: getApiUrl(),
};
