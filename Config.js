import * as Updates from 'expo-updates';

let Config = {
  apiUrl: '',
};

if (Updates.channel === 'production') {
  Config.apiUrl = '';
} else if (Updates.channel === 'staging') {
  Config.apiUrl = '';
} else if (Updates.channel === 'development') {
  Config.apiUrl = '';
}

export default Config;
