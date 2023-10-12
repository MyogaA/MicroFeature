import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  Button,
  Text,
  Center,
} from '@chakra-ui/react';

const CountdownTimer: React.FC = () => {
  const [inputDate, setInputDate] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [alertText, setAlertText] = useState('Ayo memulai hitungan mundur');

  const calculateTimeRemaining = () => {
    const targetDate = new Date(inputDate).getTime();
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    if (remainingTime <= 0) {
      setIsCounting(false);
      setTimeRemaining(0);
      setAlertText("Time's up!");
      return 0;
    }

    return remainingTime;
  };

  const startCountdown = () => {
    if (!inputDate) {
      setAlertText('Masukkan waktu terlebih dahulu');
      return;
    }

    setAlertText('');

    const remainingTime = calculateTimeRemaining();

    if (remainingTime <= 0) {
      setIsCounting(false);
      setTimeRemaining(0);
      return;
    }

    setIsCounting(true);
  };

  const resetCountdown = () => {
    setInputDate('');
    setIsCounting(false);
    setTimeRemaining(0);
    setAlertText('Ayo memulai hitungan mundur');
  };

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (isCounting) {
      countdownInterval = setInterval(() => {
        const remainingTime = calculateTimeRemaining();

        if (remainingTime <= 0) {
          setIsCounting(false);
          clearInterval(countdownInterval);
        } else {
          setTimeRemaining(remainingTime);
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCounting]);

  const formatTimeRemaining = (remainingTime: number): string => {
    if (remainingTime <= 0) {
      return '0s';
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Center w="full" minH="100vh" bgImage="https://wallpapersmug.com/download/1440x900/ba787c/black-dark-cubes-abstract.jpg">
      <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <Text fontSize="xl" color="white" fontWeight="bold">Countdown Timer</Text>
        <Input
          type="datetime-local"
          onChange={(e) => setInputDate(e.target.value)}
          value={inputDate}
          color="white"
          my={2}
        />
        <Button
          onClick={isCounting ? resetCountdown : startCountdown}
          colorScheme={isCounting ? 'red' : 'green'}
        >
          {isCounting ? "Reset" : "Start"}
        </Button>
        <Box mt={2}>
          <Text color={isCounting && timeRemaining > 0 ? 'green' : 'red'}>
            {isCounting && timeRemaining > 0
              ? formatTimeRemaining(timeRemaining)
              : alertText}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default CountdownTimer;
