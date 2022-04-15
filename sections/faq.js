import React from 'react'
import {
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'


const Faqs = [
    {
        title: "How to start?",
        text: "Before you decide to accept the Evaluations Or Direct Model, we want to make sure that you know what you are up against. When you are ready to accept the Evaluation Or Direct, you will receive an email from us. CapitalCorp's evaluation programme are in stages and shall be used to determine your competency as a trader. Once you passed all the stages, you will be given an account where you will be entitled to profit-split.CapitalCorp's Direct programme is a direct account which does not include any evaluation, you get to straight trade the market without any kind of assessments. CapitalCorp is the star model of our firm.Please note you can’t receive our funding based on your past performance or any other external track record. Our evaluation process is designed in a way to provide us with sufficient grounds to ascertain your trading skills and allow you to trade our capital."
    },
    {
        title: "Why does mango sweep exist?",
        text: "We started operating successfully since 2020 and we have funded local traders in New York. We strive to retain our prime spot of being part of the industry leader in funding good traders all over the world. Since trading can be done remotely, we decided to open our door and welcome traders internationally. We know that reputation is the most valuable aspect of this business."
    },
    {
        title: "What is Mango sweep?",
        text: "Mango sweep is looking for successful traders around the world. To ascertain if a trader has all the qualities we seek, we developed a evaluation process to distinguish and identify them. Traders who passed the evaluation programme will become Mango sweep Junior Trader and has the opportunity to trade our company's live account. CapitalCorp's goal is to break the entry barriers into the online proprietary industry. If you can show us you have the qualities by displaying your trading skills, we are happy to let you trade our capital. Upon successful completion, traders are offered a placement in the Mango sweep Proprietary Trading firm, where they can remotely manage up to USD 100,000 and continuously grow the account according to our Scaling Plan (Evaluation). As a Mango sweep Trader, you are eligible to keep up to 70% of the profits you generate. Our company covers all losses, if any."
    },
    {
        title:"Who can join Mango sweep",
        text: "We accept traders from all around the world who are at least 18 years old. If you know how to trade profitably and with proper risk management, that is all we care about. There is no other qualification required."
    },
    
]


const FaqComponent = ({title, text}) => {
    return(
        <>
            <AccordionItem sx={{border: '1px solid grey'}}  rounded={'md'} mb={7}>
                <h2>
                <AccordionButton _active={{outline: "none"}} _focus={{outline: "none"}} py={4}>
                    <Box flex='1' textAlign='left' color={"grey.500"}>
                        <Text fontWeight={"bold"} color="grey.500">{title}</Text>
                    
                    </Box>
                    <AccordionIcon color={"grey"}/>
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} p={5} color="grey.300" fontWeight={"bold"}>{text}</AccordionPanel>
            </AccordionItem>
        </>
    )
}

export default function Faq() {
  return (
    <section className='p-3 md:p-20' id='faq'>
        <Heading color={"grey.600"} ml={16}>FAQs</Heading>

        <Box padding={["1rem","4rem"]}>
            <Accordion allowToggle >
                {Faqs.map((item, index) => (
                    <FaqComponent key={index} title={item.title} text={item.text}/>
                ))}
            </Accordion>
        </Box>
    </section>
  )
}
