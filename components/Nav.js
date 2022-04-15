import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
  
  export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
    const router = useRouter()

    const navigateToSignup =() =>{
        router.push("/signup")
    }
    const navToLogin = () => {
        router.push("/login")
    }
  
    return (
      <Box className='fixed w-full z-50 top-0 left-0'>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 14 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text> */}
            <Link href="/" >
                <Stack  alignItems={"center"} justifyContent="center" flexDir="row">
                <img src={"/mango-log.png"} width={50} height={50} objectFit="contain" className='m-0' alt='img'/>
                <Text fontWeight={"bold"} margin={0} color={"#000"}>Mango Sweep</Text>
                </Stack>
            </Link>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              display={{ base: 'none', md: 'inline-flex' }}
              className="cursor-pointer"
              fontWeight={400}
              variant={'link'}
              onClick={navToLogin}>
              Log In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              padding={"1rem"}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              className="cursor-pointer"
              bg={'#EA3A60'}
              variant={'link'}
              onClick={navigateToSignup}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem, index) => (
          <Box key={navItem.label}>
     
{/*          
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link> */}

                <ScrollLink
                activeClass= "text-red-400"
                to={navItem.href}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className="text-[#56534F] font-semibold p-2 md:text-base text-xs rounded-lg flex justify-center items-center cursor-pointer"
                key={index}
                >
                    {navItem.label}
                </ScrollLink>

          </Box>
        ))}
      </Stack>
    );
  };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     );
//   };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <ScrollLink
        activeClass= "text-red-400"
        to={href}
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        className="text-[#56534F] font-semibold p-2 md:text-base text-xs rounded-lg flex justify-center items-center cursor-pointer"
        
        >
            {label}
        </ScrollLink>

      </Stack>
    );
  };
  
//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }
  
  const NAV_ITEMS = [
    {
      label: 'About',
        href: 'about'
    },
    {
      label: 'Testimonials',
      href: 'testimonials'
    },
    {
      label: 'Plans',
      href: 'plans',
    },
    {
      label: 'Our broker',
      href: 'broker',
    },
  ];