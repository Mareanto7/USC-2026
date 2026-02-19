"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { CONTENT } from "../data";

{/* --- NAVBAR --- */}
export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <nav className="text-white absolute top-0 mt-6 left-0 w-full z-50 bg-transparent justify-between">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

              <div className="flex items-center">
                  <Link href="/" className="hover:opacity-70 transition-opacity"><img src="/images/2026.png" alt="USC Logo" className="h-16 w-auto brightness-100 radius"/></Link>
              </div>

                {/* MENU (hidden on mobile but visible on desktop */}
              <div className="hidden md:flex items-center gap-8 pr-24 tracking-widest text-sm font-semibold hover:text-gray-400 transition-colors">
                {CONTENT.navbar.menu.map((link, idx) => (
                    <Link key={idx} href={link.href} className={`transition ${pathname === link.href ? 'font-bold' : 'font-medium  hover:opacity-70'}`}>{link.name}</Link>
                ))}
              </div>

              {/* Hamburger button — mobile only */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
              >
                <span className="block w-6 h-0.5 bg-white rounded-full" />
                <span className="block w-6 h-0.5 bg-white rounded-full" />
                <span className="block w-6 h-0.5 bg-white rounded-full" />
              </button>
            </div>

            {/* Mobile drawer overlay */}
            <div
              className={`fixed inset-0 z-50 bg-[#252a5a] md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close button */}
              <button
                className="absolute top-8 right-6 w-8 h-8 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <span className="absolute block w-6 h-0.5 bg-white rounded-full rotate-45" />
                <span className="absolute block w-6 h-0.5 bg-white rounded-full -rotate-45" />
              </button>

              {/* Nav links */}
              <div className="flex flex-col items-center justify-center flex-1 gap-8 tracking-widest text-lg font-semibold">
                {CONTENT.navbar.menu.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition ${pathname === link.href ? "text-[#e74528] font-bold" : "text-white hover:opacity-70"}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={CONTENT.hero.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-8 py-3 bg-[#e74528] text-white rounded-full font-bold text-base tracking-wide hover:opacity-90 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
        </nav>
    );
}