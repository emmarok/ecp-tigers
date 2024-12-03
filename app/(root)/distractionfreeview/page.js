import Image from 'next/image'
import Link from 'next/link'

export default function DistractionView () {
    return (<div className="bg-secondary h-full">
      <Link href="/">
                <Image src="/distracted.png" alt="distracted" width={2000} height={2000}/>
            </Link>
     </div>
    )
  }