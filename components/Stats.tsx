"use client";
import { CONTENT } from "../data";

{/* --- STATS --- */}
export default function Stats() {

    return (
        <div className="bg-[#e74528] opacity-98">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-[5em] mt-6 text-xl font-bold uppercase">
                    <h2 className="text-center text-white justify-center">{CONTENT.stats.title}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center justify-items-center">
                    {CONTENT.stats.list.map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="text-6xl font-extrabold text-white">{stat.value}</div>
                            <div className="text-xl font-normal tracking-wider text-white">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center text-xl mt-[2.5em] mb-16 uppercase">
                    <p className="text-center text-white text-2xl justify-center tracking-wider font-thin">{CONTENT.stats.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                    {CONTENT.stats.carousel.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-xl">
                            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                    <a href={CONTENT.stats.link} className="bg-white text-[#e74528] hover:opacity-85 px-17 py-3 mb-7 rounded-md font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 tracking-wider uppercase">{CONTENT.stats.button}</a>
                </div>
            </div>
        </div>
    );
}