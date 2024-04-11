'use client'

import Header  from '@/components/Header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
// import buildings from "../../public/buildings.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'

import { ethers } from "ethers";
import abi from "../../lib/Stake.json"
import axios from 'axios';
const cors = require('cors');

const formSchema = z.object({
  sector: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  ebidta: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  entrprenuer_background: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  city_expansion: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  market_size: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  sale_prev_year: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  sale_prev_month: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  profit: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  gross_margin: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  amount_for_equity: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  equity_ask: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  valuation: z.coerce.number().min(1, {
    message: "Username must be at least 2 characters.",
  })
})





export default function Home() {

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  const contractABI = abi.abi

  const list = async (val: z.infer<typeof formSchema>) => {
    console.log(val)
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stake = new ethers.Contract(contractAddress, contractABI, signer);
        

          const txn = await stake.listProject(1,val.name,val.sector,val.city, val.entrprenuer_background, val.city_expansion, val.market_size, "Listed");
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sector: "",
      
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)

    let verdict = await Submit(values);
    if(verdict==="True"){
      list(values)
    }else{
      alert(`Not eligible`)
    }

    // Submit(values)
      
    };
    async function Submit(values: z.infer<typeof formSchema>) {
      
      try {
        const response = await axios.post("//localhost:5000/predict", values);
        const response1 = await axios.post("//localhost:5000/probabiity", values);
        console.log(response1.data)
        return response.data
      } catch (error) {
        console.error('Error:', error);
        alert("An error occurred ");
      }
    }

  return (
    <div>
      <div className="absolute h-screen w-full ">
        <div className="relative px-16 py-10 h-2/6 bg-gradient-to-tl from-orange-300 to-orange-800">

        </div>
      </div>
      <div className="relative px-16 py-10 h-full " >
          <div className="grid grid-cols-4">
            <div>
              <Link href="/" className="text-2xl flex gap-2 font-semibold tracking-tight my-6">
              <i className="uil uil-arrow-circle-left"></i>
                Go Back
              </Link>
            </div>
            <div className='col-span-2 h-fit p-10 bg-gradient-to-tl from-secondary to-black rounded-lg  hover:from-10%'>
              <div className="text-3xl flex justify-between font-bold tracking-tight my-6">Project listing application form</div>
                    

                    
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Watchout" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sector</FormLabel>
              <FormControl>
                <Input placeholder="Electronics" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input placeholder="Mumbai" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> <FormField
      control={form.control}
      name="entrprenuer_background"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Entrprenuer background</FormLabel>
          <FormControl>
            <Input placeholder="MBA" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    /> <FormField
    control={form.control}
    name="city_expansion"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Total outlet</FormLabel>
        <FormControl>
          <Input placeholder="7" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  /> <FormField
  control={form.control}
  name="market_size"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Market size</FormLabel>
      <FormControl>
        <Input placeholder="100000000" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/> <FormField
          control={form.control}
          name="sale_prev_year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous year sales</FormLabel>
              <FormControl>
                <Input placeholder="10000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> <FormField
        control={form.control}
        name="sale_prev_month"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous month sales</FormLabel>
            <FormControl>
              <Input placeholder="2000000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> <FormField
      control={form.control}
      name="profit"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Profit in %</FormLabel>
          <FormControl>
            <Input placeholder="12" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    /> <FormField
    control={form.control}
    name="ebidta"
    render={({ field }) => (
      <FormItem>
        <FormLabel>EBIDTA</FormLabel>
        <FormControl>
          <Input placeholder="21" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  /> <FormField
  control={form.control}
  name="gross_margin"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Gross margin</FormLabel>
      <FormControl>
        <Input placeholder="14" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
    <FormField
          control={form.control}
          name="amount_for_equity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount for Equity</FormLabel>
              <FormControl>
                <Input placeholder="3000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="equity_ask"
          render={({ field }) => (
            <FormItem>
              <FormLabel>% of Equity ask</FormLabel>
              <FormControl>
                <Input placeholder="5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /><FormField
        control={form.control}
        name="valuation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valuarion</FormLabel>
            <FormControl>
              <Input placeholder="400000000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
            
            </div>
            <div className='flex justify-end my-6'>
              <Button variant={'ghost'} className='p-6'>
              <Link href="/inspection" className="text-2xl flex text-primary-foreground gap-2 font-semibold tracking-tight ">
              <i className="uil uil-newspaper"></i>
                Check status
              </Link>
              </Button>
            </div>
          </div>
    </div>
    </div>
  )
}