"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }; 

    return (
        <nav className='z-50 flex items-center justify-between bg-green-700 text-white p-6'>
            <div className="logo text-4xl font-bold">
                <Link href={'/'}> MinLinks </Link>
            </div>
            <ul className="hidden lg:flex items-center justify-center gap-10 text-xl font-semibold">
                <Link className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/'}><li>Home</li></Link>
                <Link className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/about'}><li>About</li></Link>
                <Link className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/generate'}><li>Shorten</li></Link>
                <Link className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/contact'}><li>Contact</li></Link>
            </ul>
            <div className="buttons flex items-center justify-center gap-4">
                <Link href={'/generate'}> <button className="hidden sm:flex bg-green-500 p-2 py-1 rounded-lg shadow-xl border hover:bg-green-600 hover:scale-110">Try Now</button> </Link>
                <Link href={'/github'}> <button disabled className="hidden sm:flex bg-green-500 p-2 py-1 rounded-lg shadow-xl border hover:bg-green-600 hover:scale-110">Github</button>  </Link>
                <button className="flex lg:hidden bg-green-500 p-2 py-1 rounded-lg shadow-xl border hover:bg-green-600 hover:scale-110"><svg
                    onClick={toggleSidebar}
                    className="h-6 w-8 cursor-pointer dark:stroke-white"
                    fill="none"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg></button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-green-700`}>
                <button
                    type="button"
                    onClick={toggleSidebar}
                    className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg absolute top-2 right-2" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="py-8">
                    <ul className="space-y-4">
                        <Link onClick={toggleSidebar} className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/'}><li>Home</li></Link>
                        <Link onClick={toggleSidebar} className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/about'}><li>About</li></Link>
                        <Link onClick={toggleSidebar} className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/generate'}><li>Shorten</li></Link>
                        <Link onClick={toggleSidebar} className='hover:shadow-green-400 hover:underline hover:scale-110' href={'/contact'}><li>Contact</li></Link>
                        <div className="buttons flex flex-col items-start justify-center gap-4">
                            <Link onClick={toggleSidebar} href={'/generate'}> <button className="hidden sm:flex bg-green-500 p-2 py-1 rounded-lg shadow-xl border hover:bg-green-600 hover:scale-110">Try Now</button> </Link>
                            <Link onClick={toggleSidebar} href={'/github'}> <button disabled className="hidden sm:flex bg-green-500 p-2 py-1 rounded-lg shadow-xl border hover:bg-green-600 hover:scale-110">Github</button>  </Link>
                        </div>
                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Navbar
