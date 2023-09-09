"use client"

import Link from "next/link";
import localFont from "next/font/local";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { navLinks } from "@/app/utils";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const upakarti = localFont({ src: '../Fonts/Upakarti-Serong.woff2' })

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed w-full z-[100] dark:border-b dark:border-yellow-500 backdrop-blur-lg">
      <div className="flex relative gap-2 container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"}
          className={`${upakarti.className} text-2xl md:text-3xl font-light`} id="skLogo"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-yellow-200 to-yellow-700">Sandra Karyani</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-1 py-1 border rounded border-yellow-400 text-yellow-400 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-1 py-1 border rounded-lg border-yellow-400 text-yellow-400 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}