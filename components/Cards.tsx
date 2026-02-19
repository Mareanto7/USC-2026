"use client";
import { CONTENT } from "../data";

{/* --- ABOUT CARDS--- */}
export default function Cards() {
    return (
        <section className="w-full flex bg-white py-20 mb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col gap-16 mb-20">
                    {CONTENT.about.cards.map((card, idx) => (
                        <div key={idx}>
                            <img src={card.icon} className="w-14 h-14 object-cover hover:scale-150 transition-transform duration-300 mb-6"/>
                            <h1 className="text-[#e74528] text-3xl font-bold tracking-widest mb-6">{card.title}</h1>
                            <p className="text-justify leading-snug text-[#252a5a] text-3xl tracking-wide font-light">
                            {card.text.split(/\*\*(.*?)\*\*/).map((part, idx) =>
                                idx % 2 === 1 ? <span key={idx} className="font-bold">{part}</span> : part
                            )}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
