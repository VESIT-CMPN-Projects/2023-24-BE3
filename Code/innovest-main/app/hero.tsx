import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const Hero = () => {
  return (
    <div className="h-5/6 hero  text-primary-foreground">
      <div className="h-3/5 flex justify-start items-end p-10 text-left">
        <div className=" space-y-4 pt-6 w-1/2 ">
          <h2 className="text-2xl font-bold tracking-tight">Innovest Venture Capital protocol</h2>
          <div className="text-4xl font-bold">
            {/* <div className="font-semibold">Unlocking the Future of Investment</div> */}
            {/* <div className="">
                At Innovest, we are pioneering a new era of venture capital. We are a community-driven Decentralized Autonomous Organization, 
                powered by blockchain technology, where innovation knows no bounds.
            </div> */}
            Earn high interest, fund projects,<br />
            and build applications
          </div>
          
        </div>
      </div>
      <div className="h-2/5 flex flex-col justify-evenly">
        <div className="mx-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className='hover:shadow-base hover:shadow-primary'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last year
                </p>
              </CardContent>
            </Card>
            <Card className='hover:shadow-base hover:shadow-primary'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Investors
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last year
                </p>
              </CardContent>
            </Card>
            <Card className='hover:shadow-base hover:shadow-primary'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Listed Projects</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+234</div>
                <p className="text-xs text-muted-foreground">
                  30 listed on binance
                </p>
              </CardContent>
            </Card>
            <Card className='hover:shadow-base hover:shadow-primary'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Validators
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +20 since last cohort
                </p>
              </CardContent>
            </Card>
        </div>
        <i className="uil uil-angle-down text-6xl text-center"></i>
      </div>
    </div>
  )
}

export default Hero