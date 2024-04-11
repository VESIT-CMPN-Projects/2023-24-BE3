import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accord = () => {
  return (
    <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1 ">
              <AccordionTrigger className='text-xl'>🌐 Global Impact</AccordionTrigger>
              <AccordionContent className='text-lg'>
                We are on a mission to fund and support the most promising startups and entrepreneurs worldwide, transcending geographical boundaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-xl'>🤝 Community Collaboration</AccordionTrigger>
              <AccordionContent className='text-lg'>
                Your voice matters. As a member, you actively participate in investment decisions, shaping the future of technology and innovation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='text-xl'>💡 Innovation Catalyst</AccordionTrigger>
              <AccordionContent className='text-lg'>
                We provide startups with more than just capital. We offer mentorship, resources, and a network of experts to fuel their growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className='text-xl'>🔒 Security and Transparency</AccordionTrigger>
              <AccordionContent className='text-lg'>
                Our blockchain-based platform ensures trust, transparency, and security in all transactions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className='text-xl'>💰 Invest with Confidence</AccordionTrigger>
              <AccordionContent className='text-lg'>
              Diversify your portfolio by backing innovative projects handpicked by our community of experts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
  )
}

export default Accord