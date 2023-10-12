import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

const WordScrambleGame: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fruits] = useState([
    'apple',
    'banana',
    'cherry',
    'date',
    "goji berry",
    "pineapple",
    "plum",
    "grapefruit",
    "guava",
    "watermelon",
    "tomato",
    "lychee",
    "gooseberry",
    "grape",
    "mango",
  ]);
  const [currentFruitIndex, setCurrentFruitIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  useEffect(() => {
    getRandomWord();
  }, [currentFruitIndex]);

  const getRandomWord = () => {
    if (currentFruitIndex < fruits.length) {
      const currentFruit = fruits[currentFruitIndex];
      setScrambledWord(shuffleWord(currentFruit));
    } else {
      window.alert('You Win!!');
    }
  };

  const shuffleWord = (word: string) => {
    const wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
  };

  const checkAnswer = () => {
    const currentFruit = fruits[currentFruitIndex];
    if (userAnswer === currentFruit) {
      setScore(score + 1);
      setCurrentFruitIndex(currentFruitIndex + 1);
      setUserAnswer('');
      setWrongAttempts(0);
    } else {
      setWrongAttempts(wrongAttempts + 1);
      setUserAnswer('');
      if (wrongAttempts >= 2) {
        window.alert('Game over! You have reached the maximum wrong attempts.');
      } else {
        onOpen();
      }
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      bgImg="https://wallpapersmug.com/download/1440x900/ba787c/black-dark-cubes-abstract.jpg"
      alignItems="center"
      height="100vh" 
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)" 
      padding="16px"
    >
      <Box
        width="400px" 
        padding="16px"
        backgroundColor="white"
        borderRadius="8px"
      >
        <h1>Word Scramble Game</h1>
        <Text>Score: {score}</Text>
        <Text>Unscramble this word: {scrambledWord}</Text>
        <Input
          placeholder="Your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <Button _hover={{
              backgroundColor: "green.500",
              color: "black",
            }}colorScheme="teal" mt="10px" variant="outline" color="green" onClick={checkAnswer}>Check Answer</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wrong Answer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your answer is incorrect. You have {3 - wrongAttempts} attempts left.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default WordScrambleGame;
