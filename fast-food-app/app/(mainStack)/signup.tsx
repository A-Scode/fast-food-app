import { PrimaryButton } from '@/components/buttons';
import Divider from '@/components/divider';
import { InputLabel, LabelText, LargeHeading, LinkedText } from '@/components/fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { StyleSheet, Image, Platform } from 'react-native';

import { Input, ScrollView, View, XStack, YStack } from 'tamagui';

export default function SignupScreen() {
  return (
    <ScrollView contentContainerStyle={{paddingTop:150}}>
      <View style={styles.signupContainer}>
        <LargeHeading style={{backgroundColor: 'transparent'}}>Sign up</LargeHeading>
        <YStack style={{gap: 10}}>
          <View>
          <InputLabel>Name</InputLabel>
          <Input flex={1} size={'$6'} placeholder="Name" keyboardType='default' borderWidth={2}  />
          </View>
          <View>
          <InputLabel>Email</InputLabel>
          <Input flex={1} size={'$6'} placeholder="Your email" keyboardType='email-address' borderWidth={2}  />
          </View>
          <View>
          <InputLabel>Password</InputLabel>
          <Input flex={1} size={'$6'} placeholder="Password" borderWidth={2} secureTextEntry  />
          </View>
          {/* <LinkedText style={{alignSelf: 'flex-end'}}>Forgot Password?</LinkedText> */}
        </YStack>
          <PrimaryButton >Sign up</PrimaryButton>
          <XStack style={{alignSelf: 'center'}}><LabelText>Already have an account?</LabelText><Link href="/(mainStack)/login"><LinkedText>Sign Up</LinkedText></Link></XStack>
      </View>
          <XStack style={{alignSelf: 'center' , gap: 10 , marginHorizontal: 20}}>
      <Divider width="20%"/>
            <LabelText>Sign in with </LabelText>
      <Divider width="20%"/>
          </XStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
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

