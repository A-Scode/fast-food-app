import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import defaultConfig from '@tamagui/config/v3'
import { createTamagui, TamaguiProvider, Theme } from 'tamagui';
import config from '@/tamagui.config';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={{...DefaultTheme, colors:{...DefaultTheme.colors, background: '#fff' }}}>
      <TamaguiProvider config={config}>
        <Theme name={"light"}>
      <Stack screenOptions={{ headerShown: false,
        contentStyle:{
          backgroundColor: 'transparent'
        }
       }}>
        <Stack.Screen name="(mainStack)"/>
        <Stack.Screen name="+not-found" />
      </Stack>

        </Theme>
      </TamaguiProvider>
     </ThemeProvider>
  );
}
