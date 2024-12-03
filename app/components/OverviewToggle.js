'use client'
 
import { usePathname, useRouter, useState} from 'next/navigation'
 
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

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from '@/components/ui/button'

export default function OverviewToggle() {
//  const [isChecked, setChecked] = useState(false)
 const pathname = usePathname();
 const url = pathname === '/distractionfreeview' ? '/home' : '/distractionfreeview'
 const router = useRouter()

  return (
    <div className="flex items-center space-x-2">
        <Button type="button" onClick={() => router.push(url)} >
            Change App View
        </Button>
      {/* <Switch id="distraction-free-mode" checked={isChecked} onCheckedChange={() => router.push(url)} />
      <Label htmlFor="distraction-free-mode">Distraction Free Mode</Label> */}
    </div>
  )
}
