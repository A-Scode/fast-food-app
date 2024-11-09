import { PrimaryButton, SecondaryButton } from '@/components/buttons';
import Divider from '@/components/divider';
import { InputLabel, LabelText, LargeHeading, LinkedText } from '@/components/fonts';
import { StyledInput } from '@/components/inputs';
import { Link } from 'expo-router';
import { Image, StyleSheet, Platform } from 'react-native';

import { Input, Label, ScrollView, SizableStack, SizableText, View, XStack, YStack } from 'tamagui';

export default function AdminLoginScreen() {
  return (
    <ScrollView contentContainerStyle={{paddingTop:150}}>
      <View style={styles.loginContainer}>
        <LargeHeading style={{backgroundColor: 'transparent'}}>Admin Login</LargeHeading>
        <YStack style={{gap: 10}}>
          <View>
          <InputLabel>Email</InputLabel>
          <StyledInput  flex={1} size={'$6'} placeholder="Your email" keyboardType='email-address' borderWidth={2}  />
          </View>
          <View>
          <InputLabel>Password</InputLabel>
          <StyledInput  flex={1} size={'$6'} placeholder="Password" borderWidth={2} secureTextEntry  />
          </View>
          <LinkedText style={{alignSelf: 'flex-end'}}>Forgot Password?</LinkedText>
        </YStack>
          <PrimaryButton >Login</PrimaryButton>
          <XStack style={{alignSelf: 'center', gap:10}}><LabelText>Don't have an account?</LabelText><Link href="/(mainStack)/signup"><LinkedText>Sign Up</LinkedText></Link></XStack>
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
  otherLogins:{
    gap:20 , 
    paddingHorizontal: 20,
    marginVertical: 20
  }
});
