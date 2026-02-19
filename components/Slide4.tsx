"use client";
import { CONTENT } from "../data";

{/* --- SLIDE4 --- */}
export default function Slide4() {

    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full z-20 bg-[#e74528] h-64">
                <h1 className="text-white text-center mt-12 mb-6 text-xl md:text-3xl max-w-screen-xl mx-auto uppercase whitespace-pre-line font-bold tracking-[0.4em]">
                    {CONTENT.finale.title}
                </h1>
                <p className="text-white text-3xl tracking-wide px-12 text-center font-light">
                    {CONTENT.finale.description.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                        idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part
                    )}
                </p>
            </div>
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mt-50"
                 style={{backgroundImage: "url('/images/hero-bg.png')"}}/>
            <div className="absolute inset-0 z-10 mt-50 bg-gradient-to-tr from-[#69523a]/52 to-[#681e3d]/70"/>
        </section>
    );
}