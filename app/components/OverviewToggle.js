// 'use client'
 
// import { usePathname, useRouter, useState} from 'next/navigation'
 
// export default function OverviewToggle() {
//   const pathname = usePathname();
//   const url = pathname === '/distractionfreeview' ? '/home' : '/distractionfreeview'
//   const router = useRouter()
//   return (
//     <Switch type="button" onClick={() => router.push(url)}>
//       Dashboard
//     </Switch>
//   )
// }

// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Button } from '@/components/ui/button'

// export default function OverviewToggle() {
//  const [isChecked, setChecked] = useState(false)
//  const pathname = usePathname();
//  const url = pathname === '/distractionfreeview' ? '/home' : '/distractionfreeview'
//  const router = useRouter()

//   return (
//     <div className="flex items-center space-x-2">
//         <Button type="button" onClick={() => router.push(url)} >
//             Change App View
//         </Button>
//       {<Switch id="distraction-free-mode" checked={isChecked} onCheckedChange={() => router.push(url)} />
//       <Label htmlFor="distraction-free-mode">Distraction Free Mode</Label> }
//     </div>
//   )
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"; // Adjust the path based on your project structure

const OverviewToggle = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked) => {
    setIsChecked(checked);
    // Navigate to a different page based on the switch state
    if (checked) {
      router.push("/distractionfreeview"); // Replace "/new-page" with the desired route
    } else {
      router.push("/home"); // Replace "/current-page" with the fallback route
    }
  };

  return (
    <div>
      <Label className="mr-2 text-sm font-medium">
        {isChecked ? "Normal Mode" : "Distraction Free Mode"}
      </Label>
      <Switch   className={`transition-colors duration-300 ${
    isChecked ? "bg-white" : "bg-gray-300 border-gray-300"
  }`} checked={isChecked} onCheckedChange={handleToggle} />

    </div>
  );

}

export default OverviewToggle;
