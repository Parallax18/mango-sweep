import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
//   interface FeatureProps {
//     text: string;
//     iconBg: string;
//     icon?: ReactElement;
//   }
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function About() {
    return (
      <Container maxW={'5xl'} py={12} mb={12} id="about">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'red.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('pink.50', 'pink.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>What we do</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                Our office in the states has a dual purpose. Firstly, to give International traders access to thousands of financial markets, and secondly, to provide an operations hub that provides services to the wider Mango sweep group.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Text color={'gray.500'} fontSize={'lg'}>
                  Based in the States and staffed by several countries, over the last few years we have successfully grown to meet the needs of International clients, receiving numerous awards in recognition.
               </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
                Our board and senior management in America consist of largely south Americans making us a truly international operation. As one of the biggest employers in the online broking category, we are proud to be playing a leading role in the growing financial services industry in the World.
            </Text>
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }