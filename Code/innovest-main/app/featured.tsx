import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
Alert,
AlertDescription,
AlertTitle,
} from "@/components/ui/alert"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'


const Featured = () => {
    const data = ['','','','']
    const cards = data.map((val,index)=>{
        return (
            <Card key={index} className='drop-shadow-sm hover:shadow-stone-600'>
                <CardHeader>
                    <CardDescription>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </CardDescription>
                    <CardTitle className='text-xl'>Indigo</CardTitle>
                </CardHeader>
                <CardContent className='text-card-foreground'>
                    <p>This is the heavan project working out well and rewarding to much.</p>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        )
    })
  return (
    <>
    <div className="text-4xl font-bold tracking-tight my-12">Featured Projects 🚀</div>
    <div className="grid gap-4 grid-cols-4 mx-10">
        {cards}
    </div>
    <div className="m-10">
    <Alert className='p-10 bg-secondary'>
      <AlertTitle className='text-xl'>Many more to come!</AlertTitle>
      <AlertDescription className='text-card-foreground'>
        Submit your idea and get the proper direction
      </AlertDescription>
      <Button className='mt-4 bg-primary-foreground text-gray-950'>
        Submit Idea
      </Button>
    </Alert>
    </div>
    </>
  )
}

export default Featured