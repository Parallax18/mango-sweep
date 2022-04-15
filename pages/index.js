import { Stack } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../components/Nav'
import About from '../sections/about'
import Broker from '../sections/broker'
import Footer from '../sections/footer'
import Home from '../sections/home'
import Plans from '../sections/packages'
import Statistics from '../sections/statistics'
import Testimonials from '../sections/testimonials'

export default function index() {
  return (
    <>
        <NavBar />
        <Home />
        <About />
        <Testimonials />
        <Plans />
        <Broker />
        <Statistics />
        <Footer />
    </>
  )
}
