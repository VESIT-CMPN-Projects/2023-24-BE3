'use client'

import Header  from '@/components/Header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import buildings from "../../public/buildings.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Stake from './Stake'
import Unstake from './Unstake'
import CalenderRange from './CalenderRange'
import Portfolio from './Portfolio'




export default function Home() {

  return (
    <div>
      {/* <div className="absolute blur-sm h-screen w-screen bg-cover bg-[url('../public/buildings.jpg')]"></div> */}
      <div className="relative px-16 h-screen  bg-gradient-to-tl from-secondary to-black" >
        <Header />
          <div className=" ">
            <Tabs defaultValue="stake" className="w-full h-full px-10">
              <div className="stake-head flex justify-between items-center ">
                <TabsList className=''>
                  <TabsTrigger  value="stake">Stake</TabsTrigger>
                  <TabsTrigger  value="unstake">Un-Stake</TabsTrigger>
                  <TabsTrigger  value="portfolio">Portfolio</TabsTrigger>
                </TabsList>
                <CalenderRange/>
              </div>
              <TabsContent value="stake">
                <Stake/>
              </TabsContent>
              <TabsContent value="unstake">
                <Unstake/>
              </TabsContent>
              <TabsContent value="portfolio">
                <Portfolio/>
              </TabsContent>
            </Tabs>

          
          {/* <Button onClick={deposit}>
            Invest
          </Button>  */}
          {/* <Button onClick={withdraw}>
            Withdraw
          </Button>  */}
          </div>
    </div>
    </div>
  )
}
