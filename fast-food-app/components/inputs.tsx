import { Input, styled } from "tamagui";

export const StyledInput = styled(Input, {
    borderWidth: 1,
    borderColor: '#C0C0C0', // Default gray border
    padding: '$2',          // Padding based on your token configuration
    borderRadius: '$3',     // Adjust radius as needed
    color: '$color',
    backgroundColor: '$background',
  
    // Apply focus styles
    focusStyle: {
      borderColor: '$primary', // Changes border color to primary on focus
    },
  });