import { InputLabel, LargeHeading, LinkedText } from '@/components/fonts';
import { Image, StyleSheet, Platform } from 'react-native';

import { Input, Label, ScrollView, SizableStack, SizableText, View, YStack } from 'tamagui';

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={{paddingTop:200 , }}>
      <View style={styles.loginContainer}>
        <LargeHeading style={{backgroundColor: 'transparent'}}>Login</LargeHeading>
        <YStack>
          <View>
          <InputLabel>Email</InputLabel>
          <Input flex={1} size={'$6'} placeholder="Your email" keyboardType='email-address' borderWidth={2}  />
          </View>
          <View>
          <InputLabel>Password</InputLabel>
          <Input flex={1} size={'$6'} placeholder="Password" borderWidth={2} />
          </View>

        </YStack>
          <LinkedText style={{alignSelf: 'flex-end'}}>Forgot Password?</LinkedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding:20,
    gap:30
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
