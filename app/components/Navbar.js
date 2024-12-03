import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import OverviewToggle from './OverviewToggle'

const Navbar = () => {
  return (
    <header className="green_nav_container">
        <nav className="flex items-center">
            <Link href="/">
                <Image src="/horsey.png" alt="logo" width={144} height={24}/>
            </Link>
            <Link href="/">
                <Image src="/green.png" alt="logo" className="max-h-24 min-w-2" width={1200} height={24}/>
            </Link>
            <OverviewToggle className="justify-self-end space-x-8"/>
        </nav>
        
    </header>
  )
}

export default Navbar


