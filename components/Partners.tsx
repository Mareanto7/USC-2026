"use client";
import Link from "next/link";
import { CONTENT } from "../data";

{/* --- PARTNERS --- */}
export default function Partners() {

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-16">
                <h3 className="text-lg font-bold text-[#252a5a] tracking-wider pl-[0.2em] mb-16 uppercase">2026 Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                    {CONTENT.partners.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 p-6 hover:-translate-y-1">
                            <div className="w-24 h-24">
                                <Link href={item.href} target="_blank"><img src={item.logo} alt={item.logo} className="w-full h-full object-contain brightness-100"/></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}