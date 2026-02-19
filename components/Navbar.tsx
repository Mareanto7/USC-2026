"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { CONTENT } from "../data";

{/* --- NAVBAR --- */}
export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="text-white absolute top-0 mt-6 left-0 w-full z-50 bg-transparent justify-between">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between">

              <div className="flex items-center">
                  <Link href="/" className="hover:opacity-70 transition-opacity"><img src="/images/2026.png" alt="USC Logo" className="h-16 w-auto brightness-100 radius"/></Link>
              </div>

                {/* MENU (hidden on mobile but visible on desktop */}
              <div className="hidden md:flex items-center gap-8 pr-24 tracking-widest text-sm font-semibold hover:text-gray-400 transition-colors">
                {CONTENT.navbar.menu.map((link, idx) => (
                    <Link key={idx} href={link.href} className={`transition ${pathname === link.href ? 'font-bold' : 'font-medium  hover:opacity-70'}`}>{link.name}</Link>
                ))}
              </div>
            </div>
        </nav>
    );
}