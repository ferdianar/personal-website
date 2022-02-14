import React, { useState } from "react";

// import Image Next
import Image from "next/image"

// import Link Next
import Link from "next/link"

// import  TransitionHeadless UI React
import { Transition } from "@headlessui/react"

import Logo from "public/images/logo.png"

// Navbar Components
function Navbar() {
       // State isOpen
       const [isOpen, setIsOpen] = useState(false);

       return (
              <nav className="w-full fixed z-40 bg-[#1B1D2D] bg-opacity-50 top-0 mx-auto">
                     <div className="h-[100px] flex items-center justify-between px-4 md:px-32">
                            <div className="flex items-center">
                                   <div className="flex-shrink-0">
                                          <Image src={Logo} width="100px" height="70px" />
                                   </div>
                                   <div className="hidden md:block">
                                          <div className="ml-10 flex items-center space-x-4">
                                                 <Link href="/">
                                                        <a className=" text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Home
                                                        </a>
                                                 </Link>
                                                 <Link href="/portfolio">
                                                        <a className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Portfolio
                                                        </a>
                                                 </Link>
                                                 <Link href="/blogs">
                                                        <a className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Blogs
                                                        </a>
                                                 </Link>
                                                 <Link href="/contact">
                                                        <a className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Contact
                                                        </a>
                                                 </Link>
                                                 <Link href="/about">
                                                        <a className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               About
                                                        </a>
                                                 </Link>
                                                 <Link href="/hireme" passHref>
                                                        <a href="/" className="py-2 px-4 rounded-md bg-[#24CD34] text-sm font-normal text-white">
                                                               Hire me
                                                        </a>
                                                 </Link>
                                          </div>
                                   </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                   <button
                                          onClick={() => setIsOpen(!isOpen)}
                                          type="button"
                                          className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none "
                                          aria-controls="mobile-menu"
                                          aria-expanded="false"
                                   >
                                          <span className="sr-only">Open main menu</span>
                                          {!isOpen ? (
                                                 <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                 >
                                                        <path
                                                               strokeLinecap="round"
                                                               strokeLinejoin="round"
                                                               strokeWidth="2"
                                                               d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                 </svg>
                                          ) : (
                                                 <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                 >
                                                        <path
                                                               strokeLinecap="round"
                                                               strokeLinejoin="round"
                                                               strokeWidth="2"
                                                               d="M6 18L18 6M6 6l12 12"
                                                        />
                                                 </svg>
                                          )}
                                   </button>
                            </div>
                     </div>

                     <Transition
                            show={isOpen}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                     >
                            {(ref: any) => (
                                   <div className="md:hidden" id="mobile-menu">
                                          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                 <Link
                                                        href="/">
                                                        <a className="text-sm text-white hover:text-green-300 block px-3 py-2 rounded-md font-medium">
                                                               Home
                                                        </a>
                                                 </Link>

                                                 <Link href="/marketplace">
                                                        <a className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               Portfolio
                                                        </a>
                                                 </Link>

                                                 <Link
                                                        href="/blogs">
                                                        <a className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               Blogs
                                                        </a>
                                                 </Link>

                                                 <Link
                                                        href="/contact">
                                                        <a className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               Contact
                                                        </a>
                                                 </Link>
                                                 <Link
                                                        href="/about">
                                                        <a className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               About
                                                        </a>
                                                 </Link>
                                                 <Link href="/hireme" passHref>
                                                        <a href="/" className="py-2 px-4 rounded-md bg-[#24CD34] text-sm font-normal text-white">
                                                               Hire me
                                                        </a>
                                                 </Link>
                                          </div>
                                   </div>
                            )}
                     </Transition>
              </nav>
       )
}

export default Navbar;