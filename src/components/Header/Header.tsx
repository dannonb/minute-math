import React from 'react'
import { 
    SiGithub, 
    SiLinkedin, 
    SiTwitter,
    SiFiverr
} from 'react-icons/si'
import { FaGlobe } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header border-b-2 border-gray-400 bg-zinc-900 bg-opacity-90 text-gray-400'>
            <div className='flex items-center justify-between mx-5 p-3 text-center'>
                <div className='w-1/3'>
                    <h1 className='text-xl md:text-4xl font-bold'>Minute Math</h1>
                </div>
                <div className='flex justify-end w-1/3'>
                    <Link href="https://github.com/dannonb/minute-math" target='_blank' className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <SiGithub />
                    </Link>
                    <Link href="https://linkedin.com/in/dannonbigham" target='_blank' className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <SiLinkedin />
                    </Link>
                    <Link href="https://twitter.com/devbydannon" target='_blank' className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <SiTwitter />
                    </Link>
                    <Link href="https://dannonbigham.com" target='_blank' className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <FaGlobe />
                    </Link>
                    <Link href="https://fiverr.com/devbydannon" target='_blank' className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <SiFiverr />
                    </Link>
                </div>
                
            </div>
        </header>
    )
}

export default Header