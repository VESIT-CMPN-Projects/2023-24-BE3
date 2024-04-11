import Header  from '@/components/Header'
import Hero from './hero'
import Accord from './accord'
import Featured from './featured'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    <div>

      {/* Video background */}
      <div className='absolute h-screen'>
            <video className='w-screen h-2/3 object-cover' src='/back.mp4' loop autoPlay muted></video>
      </div>
      {/* Landing page starts */}
      <div className='relative px-16'>
        
        <div className="hero h-screen">
          <Header />
          <Hero/>
        </div>
        <div className="featured px-10">
          <Featured/>
          
        </div>

        <div className="py-32 flex gap-8 flex-col justify-center items-center text-center">
          <div className="text-5xl font-bold tracking-tight ">Governed by the Community</div>
          <div className="w-1/3 text-muted-foreground">Innovest is a fully Decentralized community driven DAO with over 1000000 tokens locked in it.</div>
          <Button className='bg-secondary'> Governance</Button>
        </div>
        <div className="px-10 mt-10 mb-20">
          <div className="text-4xl font-bold tracking-tight my-12">Join the Revolution</div>
          <div className="grid gap-4 grid-cols-1 mx-10">
            <Accord/>
          </div>
        </div>  
      </div>
      <div className="p-16 bg-secondary">
        <div className="px-10 h-full w-full grid grid-cols-4 text-lg">
          <ul className='flex gap-6 col-span-2 text-2xl'>
            <li><i className="uil uil-github"></i></li>
            <li><i className="uil uil-twitter"></i></li>
            <li><i className="uil uil-discord"></i></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <li>Invest</li>
            <li>Venture</li>
            <li>Submit Idea</li>
            <li>Treasury</li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <li>Smart contract</li>
            <li>Contribute</li>
            <li>Bug report</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
