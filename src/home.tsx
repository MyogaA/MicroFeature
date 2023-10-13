import { Link } from 'react-router-dom';
import { Box, Button, Center, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Center h="100vh" bgImg="https://wallpapersmug.com/download/1440x900/ba787c/black-dark-cubes-abstract.jpg">
      <Box>
        <Text fontSize="xl"color="white" textAlign="center">MicroFeature</Text>
        <Button as={Link} to="/countdown" variant="outline" colorScheme="blue" _hover={{
              backgroundColor: "red.500",
              color: "black",
            }} m={2} w="100%">
          CountDown
        </Button>
        <Button as={Link} to="/tictactoe" variant="outline" colorScheme="blue" _hover={{
              backgroundColor: "yellow.500",
              color: "black",
            }} m={2} w="100%">
          Tictactoe
        </Button>
        <Button as={Link} to="/wordSramble" variant="outline" colorScheme="blue" _hover={{
              backgroundColor: "green.500",
              color: "black",
            }} m={2} w="100%">
         Word Scramble
        </Button>
        <Button as={Link} to="/memeGenerator" variant="outline" colorScheme="blue" _hover={{
              backgroundColor: "blue.500",
              color: "black",
            }} m={2} w="100%">
         Meme Generator
        </Button>
      </Box>
    </Center>
  );
};

export default Home;
