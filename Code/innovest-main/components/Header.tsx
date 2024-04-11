"use client"

import React from 'react'
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import {  useState } from "react"


const Header = ({  className,...props}: React.HTMLAttributes<HTMLElement>) => {
  
  const getEther= ()=>window.ethereum;

  const [user, setUser] = useState("")

  const connectWallet= async ()=>{
    try {
      const ether = getEther()
      if(!ether){
        alert("Get MetaMask")
        return;
      }

      const accounts = await ether.request({
        method:"eth_requestAccounts",
      })

      console.log("Connected",accounts[0])
      setUser(accounts[0])

    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="header flex items-center h-1/6">
      <nav className={cn("flex justify-between items-center space-x-4 lg:space-x-6 w-full", className)}{...props}>
        <Link
          href="/"
          className="font-medium transition-colors text-primary-foreground text-4xl"
        >
          Innovest
        </Link>
        <div className="flex gap-8 text-base">
          <Link
            href="stake"
            className="font-medium text-primary-foreground transition-colors hover:text-primary"
          >
            Invest with us
          </Link>
          <Link
            href="/project"
            className="font-medium text-primary-foreground transition-colors hover:text-primary"
          >
            Get funded
          </Link>
          <Link
            href="/inspection"
            className="font-medium text-primary-foreground transition-colors hover:text-primary"
          >
            Participate
          </Link>
          <Link
            href="/fund"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            Treasury
          </Link>
        </div>
        {!user ? (
            <Button variant="outline"  className="connect-button text-base " onClick={connectWallet}>
              Connect
            </Button>
          ): (
            <Button variant="outline" className="connect-button text-base ">
              {user.substring(0,5)+"..."+user.substring(39,42)}
            </Button>
          )}
      </nav>
    </div>
  )
}

export default Header