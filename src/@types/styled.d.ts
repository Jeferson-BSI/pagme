import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: string;
      blue: string;
      green: string;
      blueLight: string;
      textTitle: string;
      textBody: string;
      background: string;
      shape: string;
    };

    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
