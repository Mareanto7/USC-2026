"use client";
import { CONTENT } from "../data";

{/* --- HERO2 --- */}
export default function Hero2() {

    return (
        <section className="pt-48 pb-24 relative h-full w-full flex items-center justify-center text-white">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[0.35]"
                 style={{backgroundImage: "url('/images/hero2.jpg')"}}/>
            <div className="absolute inset-0 z-10 bg-[#252a5a]/50"/>
            <div className="relative z-20 text-left ml-7 px-1 w-full">
                <p className="text-3xl md:text-4xl max-w-screen-xl mx-auto whitespace-pre-line font-bold tracking-wide mb-0.5 leading-tight">
                    {CONTENT.hero2.title}
                </p>
                <h1 className="text-xl md:text-3xl text-left text-white uppercase max-w-screen-xl mx-auto mb-20 tracking-wide leading-tight whitespace-pre-line justify-start">
                    {CONTENT.hero2.subtitle1}
                </h1>
                <p className="text-xl md:text-3xl max-w-screen-xl mx-auto uppercase whitespace-pre-line font-bold tracking-widest mb-0.5">
                    {CONTENT.hero2.subtitle2}
                </p>
                <p className="text-3xl font-thin tracking-wider max-w-screen-xl mx-auto mb-6">
                    {CONTENT.hero2.description.split("\n").map((line, lineIdx) => (
                        <span key={lineIdx} className="block">
                            {line.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                                idx % 2 === 1 ? <span key={idx} className="font-bold text-white">{part}</span> : part
                            )}
                        </span>
                    ))}
                </p>
                <div
                    className="flex justify-start max-w-screen-xl text-lg italic mx-auto whitespace-pre-line gap-4 tracking-wider mb-8">
                    <p>
                        {CONTENT.hero2.caption}
                    </p>
                </div>
                <div className="flex justify-start max-w-screen-xl mx-auto whitespace-pre-line gap-4 tracking-tight">
                    <a href={CONTENT.hero.link} className="bg-white text-[#e74528] hover:opacity-85 px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-transform hover:-translate-y-1">{CONTENT.hero2.cta}
                    </a>
                </div>
            </div>

            {/* --- EVENTSPLAN --- */}
        </section>
    );
}

