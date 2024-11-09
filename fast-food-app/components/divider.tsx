import { YStack } from 'tamagui';

export default function Divider({width}:{width:string}) {
  return (
    <YStack
      width={width}
      height={1}
      alignSelf='center'
      backgroundColor="black" // Use your desired color here
    //   marginVertical="$4"
    />
  );
}