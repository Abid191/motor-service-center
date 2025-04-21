import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const navItems = <>
        <Link href='/'><li><a>Home </a></li></Link>
        <Link href='/Components/HomePage/About'><li><a>About </a></li></Link>
        <Link href='/Component/HomePage/Servicees'><li><a>Services </a></li></Link>
        <Link href='Blog'><li><a>Blog </a></li></Link>
        <Link href='my-bookings'><li><a>My Bookings </a></li></Link>
        <Link href='/Components/HomePage/Account'><li><a>Account </a></li></Link>

    </>
    return (
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {navItems}

                    </ul>
                </div>
                <Link href={'/'}>
                    <Image alt='logo' src="assets/logo.svg" height={50} width={70}></Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navItems}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-primary mr-5">Appointment</a>
                <Link className='btn btn-primary' href='Login'>Login</Link>
            </div>
        </div>
    )
}

