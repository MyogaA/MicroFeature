import { ChakraProvider, Box } from '@chakra-ui/react';
import CountdownTimer from './page/countdown';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center">
        <CountdownTimer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
