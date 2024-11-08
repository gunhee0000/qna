import { Box, Button } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
}

export const GoogleLoginButton = function ({ onClick }: Props) {
  return (
    <Box>
      <Button
        size="lg"
        width="full"
        maxW="md"
        borderRadius="full"
        bgColor="#4285f4"
        color="white"
        colorScheme="blue"
        leftIcon={
          <img
            src="/google.svg"
            alt="google logo"
            style={{ backgroundColor: 'white', padding: '8px', borderRadius: '30px' }}
          />
        }
        onClick={onClick}
      >
        google 계정으로 시작하기
      </Button>
    </Box>
  );
};
