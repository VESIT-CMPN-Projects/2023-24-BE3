import React from 'react'
import { cn } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button'
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

const CalenderRange = () => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2023, 0, 20),
        to: addDays(new Date(2023, 0, 20), 365),
      })

  return (
        <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal border-primary",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
        </Button>
  )
}

export default CalenderRange