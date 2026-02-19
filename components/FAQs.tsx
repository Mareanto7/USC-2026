"use client";
import { CONTENT } from "../data";

{/* --- FAQs --- */}
export default function FAQs() {

    return (
        <section className="bg-[#252a5a] py-0 px-0 pb-12 mb-6">
            <div className="relative h-[450px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                     style={{backgroundImage: "url('/images/img-faqs.png')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#252a5a]/50 to-[#252a5a]/50"></div>
            </div>
            <div className="max-w-3xl mt-6 mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
                <div className="space-y-4">
                    {CONTENT.faq.map((item, idx) => (
                        <details key={idx}
                                 className="bg-white p-6 rounded-lg border border-slate-200 group cursor-pointer">
                            <summary
                                className="font-semibold text-slate-800 list-none flex justify-between items-center">
                                {item.q}
                                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}