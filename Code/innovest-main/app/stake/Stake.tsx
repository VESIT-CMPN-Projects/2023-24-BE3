import React, { useState } from 'react'
import CalenderRange from './CalenderRange'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Button } from '@/components/ui/button'
import { ethers } from "ethers";
import abi from "../../lib/Stake.json"




const Stake = () => {

    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    const contractABI = abi.abi
    
    const [amount,setAmount] = useState(360)
    let steps = [
        {
            id:1,
            title:"Get our token",
            description:"Get our token so that you can participate in our 2023 cohort"
        },{
            id:2,
            title:"Stake",
            description:"Stake a minimum of 60 eth to any numbers"
        },{
            id:3,
            title:"Venture partner",
            description:"Invest more than 600 eth to become a VC partner"
        }
    ]

    const stepsArr = steps.map((val,index)=>{
        if(index===2){
            return (
                <div key={index} className="flex gap-4">
                <Avatar className='bg-primary'>
                    <AvatarFallback className='bg-primary font-bold'>{val.id}</AvatarFallback>
                </Avatar>
                <div className="">
                    <div className="text-2xl font-bold mb-4">{val.title}</div>
                    <div className="">{val.description}</div>
                </div>
            </div>
            )
        }
        return (
            <div key={index} className="relative flex gap-4">
                <Avatar className='bg-primary'>
                    <AvatarFallback className='bg-primary font-bold'>{val.id}</AvatarFallback>
                </Avatar>
                <span className=" absolute w-[2px] bg-primary h-full left-5 top-10"></span>
                <div className="">
                    <div className="text-2xl font-bold mb-4">{val.title}</div>
                    <div className="">{val.description}</div>
                </div>
            </div>
        )
        })
    
    const handleChange = (e: React.SetStateAction<number>)=>{
        console.log(e);
        setAmount(e)
    }


    const deposit = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const stake = new ethers.Contract(contractAddress, contractABI, signer);
    
            const valueInWei = ethers.utils.parseEther(""+amount);
    
            const txn = await stake.deposit({value: valueInWei});
            console.log('Mining...',txn.hash);
    
            await txn.wait();
            console.log('Mined', txn.hash);
    
          } else {
            console.log("Ethereum object doesn't exist!");
          }
        } catch (error) {
          console.log(error);
        }
      }

    return (
    <div className="">
        <div className="text-4xl font-bold tracking-tight my-4">Staking</div> 
        <section className="grid grid-cols-6 gap-4 ">
            <div className='col-span-3 py-4 '>
                <div className="steps flex flex-col gap-8 mb-12  ">
                    {stepsArr}
                </div>
                <div className="governance-info">
                    <div className="text-3xl font-semibold">Innovest partners</div>
                    <div className=" text-gray-500 my-2">Became a partner by investing more than 600 eth. <br />
                        you can participate in DAO activities, evaluate projects, create proposals for investing and vote for them.</div>
                </div>
            </div>    
            <div className='col-span-3 h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg border-primary border-[1px] hover:from-10%'>
                <h3 className='text-2xl font-semibold my-auto pb-4'>Invest and fly</h3>
                <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
                    <p className=''>Amount</p>
                </div>
                <div className="text-2xl flex gap-3 items-center mt-2 mb-6">
                    <Avatar className='inline-block'>
                        <AvatarImage src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-colored.svg?v=026" />
                    </Avatar>
                    <p className='mr-auto'>Ethereum</p>
                    <p>{amount}</p>

                </div>
                <Slider className='bg-primary-foreground rounded my-auto' onValueChange={handleChange} defaultValue={[amount]} value={[amount]} max={1000} min={60} step={10} />
                <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
                    <p className=''>Lockin period</p>
                    <p>1 year</p>
                </div>
                <div className="flex justify-between items-center my-2 text-gray-500 text-sm">
                    <p className=''>Network fee</p>
                    <p>~ 1.5 eth</p>
                </div>
                <Button className='mt-4 w-full font-bold' onClick={deposit}>Stake and Earn</Button>
            </div>
        </section> 
    </div>
    )
}

export default Stake