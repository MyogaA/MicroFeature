import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import WordScrambleGame from './pages/wordSramble';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Gunakan Routes

import CountdownTimer from './pages/countdown';
import Tictactoe from './pages/tictactoe';
import Home from './home';
import MemeGenerator from './pages/memeGenerator';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes> {/* Gunakan Routes di sini */}
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<CountdownTimer />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="/wordSramble" element={<WordScrambleGame />} />
          <Route path="/memeGenerator" element={<MemeGenerator />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
