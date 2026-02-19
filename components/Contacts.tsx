"use client";
import { CONTENT } from "../data";
import Link from "next/link";

{/* --- CONTACTS --- */}
export default function Contacts() {
    return (
        <section className="bg-[#252a5a] py-40">
            <div className="text-center max-w-screen-xl mx-auto">
                <h1 className="text-xl text-white md:text-3xl max-w-screen-xl mx-auto uppercase whitespace-pre-line font-bold tracking-widest mb-2.5">Our Social Media</h1>
                <div className="flex justify-center gap-8 md:gap-16 mt-16 flex-wrap">
                    {CONTENT.contacts.list.map((contact, idx) => (
                        <div key={idx} className="text-white">
                            <Link href={contact.name === "MAIL" ? `mailto:${contact.value}` : contact.value}><img src={contact.icon} alt={contact.alt} className="h-8 w-auto object-contain hover:opacity-70"/></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

