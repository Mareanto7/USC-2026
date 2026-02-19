"use client";
import { CONTENT } from "../data";

{/* --- EVENTS PLAN --- */}
export default function Eventsplan() {

    return (
        <section className="py-20 bg-[#252a5a]">
            <div className="max-w-5xl mx-auto px-4 md:px-24 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-left text-white uppercase mb-8">{CONTENT.agenda.title}</h3>
                <div className="flex flex-col mx-auto w-full gap-4 max-w-5xl">
                    {CONTENT.agenda.list.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 md:gap-12">
                            <div className="w-24 md:w-32 text-left text-white shrink-0">
                                <h2 className="text-lg md:text-2xl font-bold leading-tight">{item.date}</h2>
                                <p className="text-sm font-light opacity-80">{item.time}</p>
                            </div>
                            <div className={`grid grid-cols-1 sm:grid-cols-2 items-center px-4 md:px-10 py-4 md:py-5 w-full max-w-[640px] rounded-sm shadow-md transition-all hover:scale-[1.01]
                                ${idx % 2 === 0 ? 'bg-[#e74528] text-white' : 'bg-white text-[#e74528]'}`}>
                                <h4 className="text-base md:text-xl font-normal tracking-wide">{item.events[0]}</h4>
                                <p className="text-base md:text-xl font-normal">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}