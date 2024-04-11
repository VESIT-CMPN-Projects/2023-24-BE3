import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function RecentSales() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OW</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Over Watch</p>
            <p className="text-sm text-muted-foreground">
              investment amount : 12089.00$
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Bravefx</p>
            <p className="text-sm text-muted-foreground">investment amount : 24388.00$</p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">EV.IO</p>
            <p className="text-sm text-muted-foreground">
            investment amount : 42084.00$
            </p>
          </div>
          <div className="ml-auto font-medium">+$299.00</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/04.png" alt="Avatar" />
            <AvatarFallback>BN</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Biconomy</p>
            <p className="text-sm text-muted-foreground">investment amount : 22057.00$</p>
          </div>
          <div className="ml-auto font-medium">+$99.00</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/05.png" alt="Avatar" />
            <AvatarFallback>CG</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Chain Grep</p>
            <p className="text-sm text-muted-foreground">investment amount : 10089.00$</p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
      </div>
    )
  }