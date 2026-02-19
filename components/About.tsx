"use client";
import { CONTENT } from "../data";

{/* --- ABOUT --- */}
export default function About() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[0.35]"
                 style={{backgroundImage: "url('/images/hero-about.jpg')"}}/>
            <div className="absolute inset-0 z-10 bg-[#252a5a]/50"/>
            <div className="relative z-20 px-6 md:ml-7 md:pr-[20%] text-left">
                <h1 className="text-xl md:text-3xl max-w-screen-xl mx-auto whitespace-pre-line font-bold tracking-[0.3em] md:tracking-[0.5em] mb-3">
                    {CONTENT.about.title}
                </h1>
                <p className="text-lg md:text-3xl font-thin tracking-wide md:tracking-wider max-w-screen-xl mx-auto mb-6">
                    {CONTENT.about.description.split("\n").map((line, lineIdx) => (
                        <span key={lineIdx} className="block">
                            {line.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                                idx % 2 === 1 ? <span key={idx} className="font-bold text-white">{part}</span> : part
                            )}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}

