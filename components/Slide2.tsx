"use client";
import { CONTENT } from "../data";

{/* --- SLIDE2 --- */}
export default function Slide2() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[0.35]"
                 style={{backgroundImage: "url('/images/beginning.jpg')"}}/>
            <div className="absolute inset-0 z-10 bg-[#252a5a]/50"/>
            <div className="relative z-20 ml-7 text-justify pr-[20%]">
                <h1 className="text-xl md:text-3xl max-w-screen-xl mx-auto uppercase whitespace-pre-line font-bold tracking-widest mb-0.5">
                    {CONTENT.opening.title}
                </h1>
                <p className="text-white text-3xl tracking-wide text-justify font-light">
                    {CONTENT.opening.description.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                        idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part
                    )}
                </p>
            </div>
        </section>
    );
}

