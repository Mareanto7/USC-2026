"use client";
import { CONTENT } from "../data";

{/* --- QUOTES --- */}
export default function Quotes() {

    return (
        <section className="bg-white py-0 px-0 pb-12">
            <div className="relative h-[100vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                     style={{backgroundImage: "url('/images/img-home1.png')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#252a5a]/70 to-[#cbddb1]/50"></div>
            </div>
            <div className="mt-6 flex justify-center flex-col items-center text-center">
                <p className="italic text-[#252a5a]">
                    {CONTENT.quotes.text}
                </p>
                <p className="italic text-[#e74528]">
                    {CONTENT.quotes.source}
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a href="/about"
                       className="bg-[#252a5a] tracking-widest text-white hover:bg-[#252a5a]/70 hover:text-[#252a5a] px-24 py-3 rounded-md font-semibold text-sm shadow-lg transition-transform hover:-translate-y-1">
                        {CONTENT.quotes.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}