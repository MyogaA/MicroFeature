import { useState, useEffect } from 'react';
import { Flex, Button, Image, Spinner,Box } from "@chakra-ui/react";
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const MemeGenerator = () => {
  const [memeUrl, setMemeUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateMeme = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://meme-api.com/gimme');
      setMemeUrl(response.data.url);
    } catch (error) {
      console.error('Error fetching meme:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateMeme();
  }, []);

  return (
       <><Box>
          <Link to="/"> 
              <FaArrowLeft size={24} color="white" style={{ position: 'absolute', top: '10px', left: '10px', cursor: 'pointer' }} />
          </Link>
      </Box><Flex
          bgImg="https://wallpapersmug.com/download/1440x900/ba787c/black-dark-cubes-abstract.jpg"
          minHeight="100vh"
          flexDirection="column"
          alignItems="center"
          border="4px"
          justifyContent="center"
          gap={4}
      >

              {loading ? (
                  <Spinner size="xl" />
              ) : (
                  <>
                      <Image
                          src={memeUrl}
                          alt="Random Meme"
                          maxWidth="500px"
                          maxHeight="500px"
                          objectFit="cover" />
                      <Button colorScheme="teal" onClick={generateMeme}>
                          Generate Meme
                      </Button>
                  </>
              )}
          </Flex></>
  );
};

export default MemeGenerator;
