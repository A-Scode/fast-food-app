import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
    
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Log In',
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: 'Sign Up',
        }}
      />
      <Stack.Screen
        name="adminLogin"
        options={{
          title: 'Admin Login',
        }}
      />
    </Stack>
  );
}
