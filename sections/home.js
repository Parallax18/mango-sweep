import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image,
    HStack,
    VStack
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import TextTransition, { presets } from "react-text-transition";
  import { useRouter } from 'next/router';

  const TEXTS = [
    "$64,000",
    "$128,000",
    "$256,000",
    "$512,000",
  ];
  
  export default function Home() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const router = useRouter()
    const navigateToSignup =() =>{
        router.push("/signup")
    }


    return (
      <Container maxW={'5xl'}>
        <HStack
          textAlign={'left'}
          align={'center'}
          justifyContent={"space-between"}
          flexWrap={["wrap", "nowrap"]}
          spacing={{ base: 8, md: 10 }}
          mt={[20, 0]}
          py={{ base: 20, md: 28 }}>
              <VStack w={"full"}>
              <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Trade up to{' '}
                    <TextTransition
                        style={{color: "#EA3A60", display: "inline-flex", marginRight: "20px"}}
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                    <Text as={'span'}>
                    With mango sweep
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                Revolutionize Your Trading With Our Trading Capital! Receive a 50% split on the profit you make, we cover the losses
                </Text>
                <Stack direction={'row'} w="full" justifyContent="flex-start">
                    <Button
                    rounded={'md'}
                    px={6}
                    as={"a"}
                    color={"white"}
                    bg={'#EA3A60'}
                    variant={"link"}
                    padding={"1rem"}
                    onClick={navigateToSignup}
                    className="cursor-pointer"
                    _hover={{ bg: 'orange.500' }}>
                    Get started
                    </Button>
                   
                </Stack>
              </VStack>
         


          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </HStack>
      </Container>
    );
  }
  
  export const Illustration = (props) => {
    return (
      <Image src='https://res.cloudinary.com/parallaxcloudinary/image/upload/v1649944252/bannerimage_f7mtkj.svg' />
    );
  };