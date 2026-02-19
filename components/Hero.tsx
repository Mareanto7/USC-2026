"use client";
import { CONTENT } from "../data";

{/* --- HERO --- */}
export default function Hero() {

    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/hero-bg.png')"}}/>
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#69523a]/52 to-[#681e3d]/70"/>
            <div className="relative z-20 text-left ml-7 px-1 w-full">
                <p className="text-lg md:text-xl text-left text-white max-w-screen-xl mx-auto mb-3 leading-tight whitespace-pre-line justify-start">
                    {CONTENT.hero.subtitle2}
                </p>
                <h1 className="text-3xl md:text-5xl max-w-screen-xl mx-auto whitespace-pre-line font-bold tracking-wide -mb-2 md:-mb-6 leading-tight">
                    {CONTENT.hero.title}
                </h1>
                <p className="text-4xl md:text-8xl max-w-screen-xl mx-auto font-bold whitespace-pre-line tracking-tight leading-tight mb-16">
                    {CONTENT.hero.subtitle1}
                </p>
                <div className="flex flex-col items-start max-w-screen-xl mx-auto gap-4 tracking-tight">
                    <a href={CONTENT.hero.link} target="_blank" rel="noopener noreferrer" className="bg-white text-[#e74528] hover:opacity-85 px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-transform hover:-translate-y-1"> {CONTENT.hero.cta}
                    </a>
                    <p className="text-sm opacity-90">
                        {CONTENT.hero.caption}
                    </p>
                </div>
            </div>
        </section>
    );
}