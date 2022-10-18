declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      success: '#4ECDC4';
      primary: '#CB77EA';
      surface: '#09163C';
      tertiary: '#474076';
      accent: '#1f1f1f';
      background: '#ffff';
      text: '#fff';
      placeholder: '#fff';
    }
  }
}

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
