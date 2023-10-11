import { useState } from 'react';
import { ChakraProvider, Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

type KotakValue = 'X' | 'O' | 'draw' | null;

interface KotakProps {
  value: KotakValue;
  onClick: () => void;
}

function Kotak({ value, onClick }: KotakProps) {
  return (
    <Button
      size="md"
      variant="outline"
      fontSize="2xl"
      width="100px"
      height="100px"
      color="white"
      onClick={onClick}
      isDisabled={value !== null}
    >
      {value}
    </Button>
  );
}

function hitungPemenang(kotaks: KotakValue[]): KotakValue | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (kotaks[a] && kotaks[a] === kotaks[b] && kotaks[a] === kotaks[c]) {
      return kotaks[a];
    }
  }
  if (kotaks.every((kotak) => kotak !== null)) {
    return 'draw';
  }
  return null;
}

function App() {
  const [Kotaks, setKotaks] = useState<Array<KotakValue>>(Array(9).fill(null));
  const [giliran, setGiliran] = useState<boolean>(true);

  const winner = hitungPemenang(Kotaks);

  const handleClick = (i: number) => {
    if (winner || Kotaks[i]) {
      return;
    }
    const kotaksBaru = Kotaks.slice();
    kotaksBaru[i] = giliran ? 'X' : 'O';
    setKotaks(kotaksBaru);
    setGiliran(!giliran);
  };

  const renderKotak = (i: number) => {
  return <Kotak key={i} value={Kotaks[i]} onClick={() => handleClick(i)} />;
};


  const resetGame = () => {
    setKotaks(Array(9).fill(null));
    setGiliran(true);
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${giliran ? 'X' : 'O'}`;

  return (
    <Center h="100vh" bgImg="https://wallpapersmug.com/download/1440x900/ba787c/black-dark-cubes-abstract.jpg">
      <VStack spacing={4} align="center">
        <Text fontSize="3xl" color="white">{status}</Text>
        <Box
          boxShadow="lg"
          p="4" 
          borderRadius="lg" 
        >
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={2}>
            {Array.from({ length: 9 }, (_, i) => renderKotak(i))}
          </Box>
        </Box>
        <Button leftIcon={<RepeatIcon />} onClick={resetGame}>
          Reset Game
        </Button>
      </VStack>
    </Center>
  );
  
}

function AppWrapper() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

export default AppWrapper;
