import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px="4">
            <Heading size={'md'} textTransform={'uppercase'} textAlign={["center",'left']}>
              Write To Us....
            </Heading>
            <HStack borderBottom={'2px solid white'} py="2">
              <Input
                placeholder="Enter Email Here"
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor={'noneX'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading
              textTransform={'uppercase'}
              textAlign={'center'}
              fontFamily={'cursive'}
            >
              VIDEO HUB
            </Heading>
            <Text> ALl right reserved</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading
              size={'md'}
              textTransform={'uppercase'}
              fontFamily={'cursive'}
            >
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/amit-kumar-0b0540234/">
                LinkedIn
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/amit_rohila33/">
                Instagram
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={"_blank"} rel="noreferrer" href="https://github.com/Amit-Rohila33">
                Github
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
