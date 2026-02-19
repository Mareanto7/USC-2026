"use client";
import { CONTENT } from "../data";
import { useState } from "react";

{/* --- TEAM --- */}
export default function Team() {
    const doubled = [...CONTENT.contacts.team, ...CONTENT.contacts.team]
    const [paused, setPaused] = useState(false);

    return (
        <section className="bg-[#252a5a] py-40 ">
            <h2 className="text-white text-center text-3xl font-bold tracking-normal mb-16">2026 Board Members</h2>
            <div className=" overflow-hidden mx-auto relative" style={{ width: "calc(3 * 256px + 2 * 32px)" }}>
                <div className="absolute left-0 top-0 h-full w-64 z-10 bg-gradient-to-r from-[#252a5a] to-transparent pointer-events-none"/>
                <div className="absolute right-0 top-0 h-full w-64 z-10 bg-gradient-to-l from-[#252a5a] to-transparent pointer-events-none"/>
                <div className="flex gap-8 w-max cursor-pointer" style={{ animation: "scroll 20s linear infinite", animationPlayState: paused ? "paused" : "running" }} onClick={() => setPaused(!paused)}>
                    {doubled.map((member, idx) => (
                        <div key={idx} className="relative group w-64 h-80 rounded-md overflow-hidden flex-shrink-0">
                            <img src={member.image} className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-[#252a5a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                                <p className="text-white text-center px-4 uppercase font-bold text-2xl">{member.name}</p>
                                <p className="text-white uppercase font-bold text-lg">{member.role}</p>
                                <p className="text-white lowercase text-lg">{member.contact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}