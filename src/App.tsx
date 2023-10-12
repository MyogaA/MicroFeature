import { ChakraProvider, CSSReset, extendTheme, ThemeConfig, theme } from '@chakra-ui/react';
import WordScrambleGame from './pages/wordSramble';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <div className="App">
        <WordScrambleGame />
      </div>
    </ChakraProvider>
  );
}

export default App;
