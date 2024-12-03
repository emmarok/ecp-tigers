import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import OverviewToggle from './OverviewToggle'

const Navbar = () => {
  return (
    <header className="green_nav_container">
        <nav className="flex justify-betweeen items-center space-x-8 ">
            <Link href="/">
                <Image src="/horsey.png" alt="logo" width={144} height={24}/>
            </Link>
           
            <OverviewToggle/>
        </nav>
        
    </header>
  )
}

export default Navbar


