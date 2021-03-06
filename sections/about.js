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
            MangoSweep  is a
            Privately ran decentralized Medium  built on Binance Smart Chain, a fast and inexpensive alternative to Ethereum.
            Much like the celebrated Uniswap DeFi AMM protocol running on Ethereum, MangoSweep enables users to swap between cryptocurrency assets by tapping into user-generated liquidity pools.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Text color={'gray.500'} fontSize={'lg'}>
              To create said liquidity pools, Mangosweep offers a plethora of DeFi farming opportunities for liquidity providers. The liquidity grab has so far worked like a charm ??? well over $1 billion in total value locked (TVL) has migrated to Mangosweep since it opened its doors.
               </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
              However, unlike Uniswap and PancakeSwap, Mangosweep  rewards those who stake its native through their private conglometare PNC wealth management. When you stake through PNC MangoSweep, you are entitled to be the first adopters of the virtual reality scene , get in on ICOs and private sales on tokens before they blow up
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