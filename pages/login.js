import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, FormControl, FormLabel,Stack, Heading, Text, Input, VStack, HStack, Checkbox, Button, useDisclosure} from '@chakra-ui/react'
import { useState } from 'react'
import { logInWithEmailAndPassword } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import ModalComponent from '../components/modal'
import NavBar from '../components/Nav'
// const Illustration = require("public/user-research-animate.svg")
// const Logo = require("public/mango-log.png")

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [ifLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState("");

  const {login} = useAuth()
  const loginHandler = async (e) =>{
    try {
      e.preventDefault()
      
      if(!email || !password){
        return alert("Please enter all fields")
      }
  
      await login({email, password})
      setModalContent(`${email} Login success!`)
      
        onOpen(true)
        setTimeout(() => {
          onClose(true)
        }, 3000);
    } catch (error) {
      setModalContent("Logged in failure, please confirm you details")
      
        onOpen(true)
        setTimeout(() => {
          onClose(true)
        }, 3000);
      alert(error.message)
    }

  }
  return (
    <div>
      <Head>
        <title>Mango sweep</title>
        <meta name="description" content="Trading platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <NavBar /> */}
        <Flex w="full"  alignItems={'center'}>
          <Box display={['none','block']} className="w-1/2 h-full" >
              <img src={"/user-research-animate.svg"}  className="h-full w-full" alt="illustration"/>
           
          </Box>
          <Box padding={[3, 10]} className="w-full md:w-1/2">
            <Stack  alignItems={"start"}>
              <img src={"/mango-log.png"} width={100} height={50} objectFit="contain" className='m-0' alt='img'/>
              <Text fontWeight={"bold"} margin={0}>Mango Sweep</Text>
            </Stack>
            <Box mb={10}>
              {/* <Heading fontSize={20}>Welcome back</Heading> */}
              <Text color={'#82869A'}>Log in to your account</Text>
            </Box>
            <form className='w-full' onSubmit={loginHandler}>
              <VStack spacing={9}>
                {/* <HStack spacing={5} w="full">
                  <FormControl>
                    <FormLabel htmlFor='firstname' color={'#82869A'} fontSize={13}>First Name</FormLabel>
                    <Input id='firstname' type='text' variant="flushed" placeholder='Enter your first name' _placeholder={{ fontsize: '3' }}/>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor='lastname' color={'#82869A'} fontSize={13}>Last Name</FormLabel>
                    <Input id='lastname' type='text' variant="flushed" placeholder='Enter your last name'/>
                  </FormControl>
                </HStack> */}
                {/* <FormControl>
                  <FormLabel htmlFor='phonenumber' color={'#82869A'} fontSize={13}>Phone Number</FormLabel>
                  <Input id='phonenumber' type='phone' variant="flushed" placeholder='Enter your phone number'/>
                </FormControl> */}
                <FormControl>
                  <FormLabel htmlFor='email' color={'#82869A'} fontSize={13}>Email Address</FormLabel>
                  <Input id='email' type='email' onChange={e => setEmail(e.target.value)} variant="flushed" placeholder='Enter your email'/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='password' color={'#82869A'} fontSize={13}>Password</FormLabel>
                  <Input id='password' type='password' onChange={e => setPassword(e.target.value)}  variant="flushed" placeholder='Enter your password'/>
                </FormControl>

                <Flex justifyContent={'space-between'} w="full">
                  <Checkbox color={'#82869A'} fontSize={15}>Remember me</Checkbox>

                  <Link href='/' className="text-red-900" fontSize={13}>Forgot Password?</Link>
                </Flex>

                {/* <Link href='/dashboard'> */}
                  <Button
                    // isLoading
                    type='submit'
                    loadingText='Signing you in'
                    colorScheme='blue'
                    variant='solid'
                    w={'full'}
                    dropShadow={true}
                    paddingY={7}
                  >
                    Log in
                  </Button>
                {/* </Link> */}

                <HStack spacing={3}>
                  <Text color={'#82869A'} fontSize={15}>Don&apos;t have an Account?</Text>

                  <Link href='/signup' className="text-red-900" >Sign up</Link>
                </HStack>

              </VStack>
            </form>
          </Box>

          <ModalComponent???? isOpen={isOpen} body={modalContent}/>
        </Flex>
      </main>
    </div>
  )
}
