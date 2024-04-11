'use client'

import Header  from '@/components/Header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import buildings from "../../public/buildings.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

import { ethers } from "ethers";
import abi from "../../lib/Stake.json"
import { useEffect, useState } from 'react'




export default function Home() {

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  const contractABI = abi.abi

  const [proj, setProj] = useState([])


  interface Startup {
    title: string;
  }
  
  
  
  function EgComponent({ title }: Startup) {
    return (
      <div className=' h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg border-primary border-[1px] hover:from-10%'>
        <h3 className='text-2xl font-semibold my-auto pb-4'>{title}</h3>
        <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
          <p className=''>Amount ready to unstake</p>
        </div>
        <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
          
       
  
        </div>
        <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
          <p className=''>Principal amount</p>
          <p>{}</p>
        </div>
        <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
          <p className=''>DAO fees</p>
          <p>{}</p>
        </div>
        <Button className='mt-4 w-full font-bold'  >
          <Link href='/inspection/validate'>Validate</Link>
        </Button>
      </div>
    );
  }

  const allProjects = proj.map((val,index)=>{
    return <EgComponent title={val[1]} key={index}/>
  })


  const list = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stake = new ethers.Contract(contractAddress, contractABI, signer);
        

          const txn = await stake.getAllProject();
        console.log('Mining...',txn.hash);

        console.log('Mined', txn);
        setProj(txn);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    list()
  },[])

  
  return (
    <div>
      {/* <div className="absolute blur-sm h-screen w-screen bg-cover bg-[url('../public/buildings.jpg')]"></div> */}
      <div className="relative px-16 h-screen pb-10 bg-gradient-to-tl from-secondary to-black" >
        <Header className='h-32'/>
          <div className="px-10">
            <div className="text-3xl flex justify-between font-bold tracking-tight my-6">New Projects
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="project" placeholder="Project" />
                <Button type="submit">Search</Button>
              </div>
            </div> 
            <div className="grid gap-4 grid-cols-4">
              {allProjects}
            </div>
          </div>
    </div>
    </div>
  )
}

    // const eg = (
    //   <div className=' h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg border-primary border-[1px] hover:from-10%'>
    //                 <h3 className='text-2xl font-semibold my-auto pb-4'>Earnings</h3>
    //                 <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
    //                     <p className=''>Amount ready to unstake</p>
    //                 </div>
    //                 <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
    //                     <Avatar className='inline-block'>
    //                         <AvatarImage src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-colored.svg?v=026" />
    //                     </Avatar>
    //                     <p className='mr-auto'>Ethereum</p>
    //                     <p>500</p>
  
    //                 </div>
    //                 <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
    //                     <p className=''>Principal amount</p>
    //                     <p>450</p>
    //                 </div>
    //                 <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
    //                     <p className=''>DAO fees</p>
    //                     <p>~ 50 eth</p>
    //                 </div>
    //                 <Button className='mt-4 w-full font-bold'  >
    //                   <Link href='/inspection/validate'>Unstake</Link>
    //                 </Button>
    //             </div>
    // )