import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins';
import { theme } from './src/theme';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({  
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_600SemiBold 
  });

    if(!fontsLoaded) {
      return null;
    }
    SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}
