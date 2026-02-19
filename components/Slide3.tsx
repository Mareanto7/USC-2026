"use client";
import { CONTENT } from "../data";

{/* --- SLIDE3 --- */}
export default function Slide3() {
    return (
        <section className="relative min-h-screen w-full flex items-center bg-white">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 w-full">
                {/* --- LEFT - IMAGE ---*/ }
                <div className="w-full md:w-1/2">
                    <img src={CONTENT.work.image.src} alt={CONTENT.work.image.alt} className="w-full h-auto rounded-xl object-cover opacity-70" />
                </div>

                {/* --- RIGHT - TEXT ---*/ }
                <div className="w-full md:w-1/2 text-right">
                    <h1 className="text-[#252a5a] text-3xl md:text-4xl max-w-screen-xl mx-auto uppercase whitespace-pre-line font-bold tracking-[0.2em] mb-8">
                        {CONTENT.work.title}
                    </h1>
                    <p className="text-[#252a5a] text-lg md:text-3xl tracking-wide text-right font-light">
                        {CONTENT.work.description.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                            idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part
                        )}
                    </p>
                </div>
            </div>
        </section>
);
}

