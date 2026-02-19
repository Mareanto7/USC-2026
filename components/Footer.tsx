"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTENT } from "../data";

{/* --- FOOTER --- */}
export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="bg-white py-16 text-center ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

                {/* --- LEFT SIDE --- */}
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full p-2">
                        <Link href="/" className="hover:opacity-70 transition-opacity"><img src={CONTENT.footer.logo.src} alt={CONTENT.footer.logo.alt} className="w-full h-full object-contain"/></Link>
                    </div>
                    <div className="border-l border-[#e74528] pl-4 py-2 text-left">
                        <h3 className="text-[#e74528] font-bold text-2xl tracking-tight">{CONTENT.footer.title}</h3>
                        <p className="text-xs text-[#e74528] font-medium tracking-widest">{CONTENT.footer.description}</p>
                    </div>
                </div>

                {/* --- RIGHT SIDE ---*/}
                <div className="items-center flex gap-6">
                    <div className="flex flex-col mx-auto max-w-2xl text-right uppercase tracking-wide text-[#e74528] font-medium -space-y-2 pr-4 border-r border-[#e74528]">
                        {CONTENT.footer.links.map((link, idx) => (
                            <Link key={idx} href={link.href} className={`transition ${pathname === link.href ? 'font-bold' : 'font-medium  hover:opacity-70'}`}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8 text-[#252a5a] ">
                <p>©2026 by <a href={CONTENT.footer.copyright} target="_blank" className="hover:text-[#252a5a]/70">E-Club Ventures</a> | Made by <a href={CONTENT.footer.author} target="_blank" className="hover:text-[#252a5a]/70">Antonio Rinaldi</a></p>
            </div>
        </footer>
    );
}