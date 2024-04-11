'use client'

import Header  from '@/components/Header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Alert,
    AlertDescription,
    AlertTitle,
    } from "@/components/ui/alert"
import { Button } from '@/components/ui/button'
import buildings from "../../public/buildings.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <div className="absolute h-screen w-full ">
        <div className="relative px-16 py-10 h-2/6 bg-gradient-to-tl from-orange-300 to-orange-800">

        </div>
      </div>
      <div className="relative px-16 py-4 pb-10 h-full w-full " >
        <div>
          <Link href="/fund" className="text-2xl flex gap-2 font-semibold tracking-tight my-6">
            <i className="uil uil-arrow-circle-left"></i>Go Back
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4 ">  
          <div className='h-96 p-10 bg-gradient-to-tl from-secondary to-black rounded-lg  hover:from-10%'>
              USer
              
          </div>
          <div className=' h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg  hover:from-10%'>
              <div className="text-3xl flex justify-between font-bold tracking-tight my-6">Project listing application form</div>
                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>

                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>
                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>
                    <Button className='mt-4 w-full font-bold'>Vote</Button>
          </div>
            
        </div>
        <hr/>
        <div className=' h-fit p-10 '>
              <div className="text-3xl flex justify-between font-bold tracking-tight my-6">Project listing application form</div>
                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>

                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>
                    <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
                    <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                        <p className=''>Amount ready to unstake</p>
                    </div>
                    <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                      
                        <p className='mr-auto'>Ethereum</p>
                        <p>500</p>

                    </div>
                    <div className="flex flex-col my-2 text-base">
                        <p className='flex justify-between'>Invest
                        </p>
                    </div>
                    
          </div>
          <div className="mx-10">
                <Alert className='p-10 bg-secondary flex flex-col justify-center items-center'>
                    <AlertTitle className='text-2xl'>Vote on the Proposal</AlertTitle>
                    <AlertDescription className='text-card-foreground'>
                    </AlertDescription>
                    <div className="flex mt-4 gap-4">
                        <Button  className=' bg-green-800 hover:bg-green-900  '>
                            Fund Project
                        </Button>
                        <Button  variant={'destructive'} className=''>
                            Reject
                        </Button>
                    </div>
                </Alert>
            </div>

          

    </div>
    </div>
  )
}
