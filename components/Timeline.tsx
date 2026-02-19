"use client";
import { CONTENT } from "../data";

{/* --- FUNCTION --- */}
function EditionText({ ed }: {ed: any }) {
    return (
        <div className="text-white text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">{ed.year}</h2>
            <ul className="space-y-2 text-base md:text-xl font-light inline-block md:block">
                {ed.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white flex-shrink-0"/>
                        <span>{b.split(/\*\*(.*?)\*\*/).map((part, idx) => idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
};


{/* --- TIMELINE--- */}
export default function Timeline() {
    return (
        <div className="bg-[#252a5a]">
            <h2 className="pt-25 text-center text-3xl md:text-5xl font-bold tracking-widest text-white px-4">Our Past Editions</h2>

            <div className="mt-16 md:mt-25 relative">
                {/* --- CENTER LINE (desktop only) --- */}
                <div className="hidden md:block absolute left-1/2 top-[35vh] bottom-0 w-0.5 bg-white -translate-x-1/2 z-[5]"/>

                {CONTENT.about.editions.map((ed, idx) => (
                    <div key={idx}
                         className={`flex flex-col md:flex-row items-center w-full min-h-[auto] md:min-h-[70vh] py-12 md:py-0 ${idx % 2 === 0 ? 'bg-[#252a5a]' : 'bg-[#e74528]'}`}>

                        {/* --- LEFT SIDE --- */}
                        <div className="w-full md:w-1/2 px-6 md:px-16 flex justify-center md:justify-end">
                            {idx % 2 === 0 ? <img src={ed.image} className="w-full max-w-xs md:max-w-md rounded-xl"/> :
                                <EditionText ed={ed}/>}
                        </div>

                        {/* --- DOT --- */}
                        <div className="hidden md:block w-10 h-10 rounded-full bg-white flex-shrink-0 z-10"/>

                        {/* --- MOBILE SPACER --- */}
                        <div className="md:hidden h-6"/>

                        {/* --- RIGHT SIDE --- */}
                        <div className="w-full md:w-1/2 px-6 md:px-16 flex justify-center md:justify-start">
                            {idx % 2 === 0 ? <EditionText ed={ed}/> :
                                <img src={ed.image} className="w-full max-w-xs md:max-w-md rounded-xl"/>}
                        </div>
                    </div>
                ))}
            </div>
            <section
                className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center gap-8 overflow-hidden">
                <div className="hidden md:block absolute left-1/2 top-0 h-48 w-0.5 bg-white -translate-x-1/2 z-20" />
                <div className="hidden md:block absolute left-1/2 top-48 w-10 h-10 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 z-20"/>
                <div className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.35]" style={{backgroundImage: "url('/images/cta-about.png')"}}/>
                <div className="absolute inset-0 z-10 bg-[#252a5a]/40"/>
                <div className="relative z-20 text-center px-6 md:px-8 mt-16">
                    <p className="text-white text-2xl md:text-4xl font-bold tracking-wide mb-16">{CONTENT.about.cta}</p>
                    <a href="/usc2026" className="bg-[#e74528] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-transform hover:-translate-y-1">{CONTENT.about.button}</a>
                </div>
            </section>
        </div>
    );
}
