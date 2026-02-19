"use client";
import { CONTENT } from "../data";

{/* --- ORGANIZERS --- */}
export default function Organizers() {

    return (
        <section className="py-20 bg-white">
            <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-[#252a5a] tracking-wider uppercase mb-2">ORGANIZERS & network</h3>
                <h2 className="text-3xl font-bold text-[#252a5a] mb-12">E-Club</h2>
                <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 text-left max-w-4xl w-full px-4">
                    {CONTENT.organizers.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-8 justify-center">
                            <div className="w-16 h-16 flex-shrink-0">
                                <img src={item.logo} alt={item.university} className="w-full h-full object-contain brightness-100"/>
                            </div>
                            <div className="text-white bg-[#252a5a] gap-6 px-6 py-4 w-full max-w-[380px] rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                                <h4 className="text-xl font-bold uppercase tracking-wide">{item.university}</h4>
                                <p className="text-sm opacity-80 font-medium mt-1">{item.contact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}