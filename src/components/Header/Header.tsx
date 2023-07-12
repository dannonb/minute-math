"use client"

import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaBarsStaggered } from 'react-icons/fa6'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='header border-b border-black'>
            <div className='flex items-center justify-between mx-5 my-5 text-center'>
                {/* <div className='w-1/3 flex justify-start'>
                    <Menu>
                        {({ open }) => (
                            <>
                                {
                                    open ? (
                                        <Menu.Button className='md:text-2xl text-xl'>
                                            <FaBarsStaggered />
                                        </Menu.Button>
                                    ) : (
                                        <Menu.Button className='md:text-2xl text-xl'>
                                            <FaBars />
                                        </Menu.Button>
                                    )
                                }
                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items static className='flex mx-5'>
                                        <Menu.Item as='div' className='mx-5'>item1</Menu.Item>
                                        <Menu.Item as='div'>item2</Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div> */}
                <div className='w-1/3'>
                    <h1 className='text-xl md:text-4xl font-bold'>Minute Math</h1>
                </div>
                <div className='flex justify-end w-1/3'>
                    <Link href="https://github.com" className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <FaGithub />
                    </Link>
                    <Link href="https://linkedin.com" className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <FaLinkedin />
                    </Link>
                    <Link href="https://twitter.com" className='md:text-3xl md:mx-5 text-lg mx-2'>
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header