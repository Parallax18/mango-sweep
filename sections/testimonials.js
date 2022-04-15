import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';

const Testimonial = ({ children } ) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children } ) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box  id="testimonials">
      <Container maxW={'7xl'} py={16} px={[3, 14]} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>Don't just take our word for it, below are a few words from our investors and their experience investing with us.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent >
              <TestimonialHeading>Satisfied</TestimonialHeading>
              <TestimonialText>
              I work as a Soft ware Engineer in IBM, I also live in New York and everyone that has lived in New York can vouch how the cost of living is pretty high. MangoSweep services have aided me learn discipline and boosted my financial literacy especially in taxes and other privileges because as I invested, I am being advised and the consultancy advisors are top tier
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/parallaxcloudinary/image/upload/v1650059629/face-paint_syhwsr.jpg'
              }
              name={'RYAN BELL'}
              title={'Investor'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Awesome Support!</TestimonialHeading>
              <TestimonialText>
              It wasn’t so long after my husband Chris for almost 22 years got divorced and I have to say it left me devastated. The emotional distress weighed me down but I knew I had to get back on feet whilst trying to keep in contact and provide for my children because Chris was a dead beat who missed on owning up to supporting our 3 daughters, Sarah, Kate and Emily. It was on winter in 2018 when Bitcoin crashed, I had been advised to take upbPnc’s subsidiary MangoS weep to aid manage my assets as I have a trust fund of over $120,000 for my kids future and colleges. I have to say the growth has been incredible, the dividend and annual returns on my portfolio is one thing that pushed me to be becoming a better mum unbeknownst to me.  Thank you Pnc MangoSweep
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/parallaxcloudinary/image/upload/v1650059630/whitelady_krz4rt.jpg'
              }
              name={'BETTY DENSMORE'}
              title={'Investor'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Pleasant experience</TestimonialHeading>
              <TestimonialText>
              Coming from a family in Mumbai with parents that believe so much in the Analog Stone Age way of living and making money. I'm glad Mangosweep could aid me understand at the brink of financial break down how NFTs are profitable and I can make good acquisition of digital land on which I host events, yield , stake and carry out our other profitable practices.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/parallaxcloudinary/image/upload/v1650059629/nft_ukglv7.jpg'
              }
              name={'SIVA SANKALP'}
              title={'Investor'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}