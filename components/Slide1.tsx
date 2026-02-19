"use client";
import { CONTENT } from "../data";

{/* --- SLIDE1 --- */}
export default function Slide1() {
    return (
        <div className="bg-[#e74528] opacity-98">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-[1.5em] mt-6 text-xl font-bold uppercase">
                    <h2 className="text-right text-white text-xl md:text-3xl tracking-[0.5em] mb-2 justify-right">{CONTENT.teams.title}</h2>
                </div>
                <div className="text-center text-xl ml-0 md:ml-5 mt-2 mb-16">
                    <p className="text-right text-white text-lg md:text-3xl tracking-wide font-light">
                        {CONTENT.teams.description.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                            idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part
                        )}
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {CONTENT.teams.carousel.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-xl">
                            <img src={img.src} alt={img.alt}
                                 className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}