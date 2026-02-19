"use client";
import { CONTENT } from "../data";
import { useState, useRef, useCallback, useEffect } from "react";

const CARD_W = 256;
const GAP = 32;
const STEP = CARD_W + GAP;
const SPEED = 0.04;
const SWIPE_THRESHOLD = 10;

{/* --- TEAM --- */}
export default function Team() {
    const team = CONTENT.contacts.team;
    const doubled = [...team, ...team];
    const halfWidth = team.length * STEP;

    const [activeCard, setActiveCard] = useState<number | null>(null);

    const offsetRef = useRef(0);
    const pausedRef = useRef(false);
    const rafRef = useRef<number>(0);
    const prevTimeRef = useRef<number>(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const transitionRef = useRef(false);
    const cardTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const arrowPauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchDelta = useRef(0);
    const isSwiping = useRef(false);
    const directionLocked = useRef<"h" | "v" | null>(null);

    const applyOffset = useCallback(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
        }
    }, []);

    const wrapOffset = useCallback(() => {
        if (offsetRef.current >= halfWidth) {
            offsetRef.current -= halfWidth;
        } else if (offsetRef.current < 0) {
            offsetRef.current += halfWidth;
        }
    }, [halfWidth]);

    const animate = useCallback((time: number) => {
        if (prevTimeRef.current) {
            const dt = time - prevTimeRef.current;
            if (!pausedRef.current && !isSwiping.current && !transitionRef.current) {
                offsetRef.current += SPEED * dt;
                wrapOffset();
                applyOffset();
            }
        }
        prevTimeRef.current = time;
        rafRef.current = requestAnimationFrame(animate);
    }, [wrapOffset, applyOffset]);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [animate]);

    const smoothShift = useCallback((delta: number) => {
        if (!trackRef.current) return;
        transitionRef.current = true;
        trackRef.current.style.transition = "transform 0.35s ease";
        offsetRef.current += delta;
        applyOffset();

        const onEnd = () => {
            if (!trackRef.current) return;
            trackRef.current.style.transition = "none";
            wrapOffset();
            applyOffset();
            transitionRef.current = false;
            trackRef.current.removeEventListener("transitionend", onEnd);
        };
        trackRef.current.addEventListener("transitionend", onEnd);
    }, [applyOffset, wrapOffset]);

    const handleArrow = useCallback((dir: 1 | -1) => {
        if (arrowPauseRef.current) clearTimeout(arrowPauseRef.current);
        pausedRef.current = true;
        smoothShift(dir * STEP);
        arrowPauseRef.current = setTimeout(() => {
            pausedRef.current = false;
        }, 3000);
    }, [smoothShift]);

    const showCard = useCallback((idx: number) => {
        if (cardTimerRef.current) clearTimeout(cardTimerRef.current);
        if (activeCard === idx) {
            setActiveCard(null);
            pausedRef.current = false;
            return;
        }
        setActiveCard(idx);
        pausedRef.current = true;
        cardTimerRef.current = setTimeout(() => {
            setActiveCard(null);
            pausedRef.current = false;
        }, 4000);
    }, [activeCard]);

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        touchDelta.current = 0;
        directionLocked.current = null;
        isSwiping.current = false;
    }, []);

    const onTouchMove = useCallback((e: React.TouchEvent) => {
        const dx = e.touches[0].clientX - touchStartX.current;
        const dy = e.touches[0].clientY - touchStartY.current;

        if (!directionLocked.current) {
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                directionLocked.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
            }
        }

        if (directionLocked.current === "v") return;

        e.preventDefault();
        isSwiping.current = true;
        touchDelta.current = dx;
        offsetRef.current -= dx;
        touchStartX.current = e.touches[0].clientX;
        wrapOffset();
        applyOffset();
    }, [applyOffset, wrapOffset]);

    const onTouchEnd = useCallback(() => {
        if (!isSwiping.current) return;
        isSwiping.current = false;
        directionLocked.current = null;

        const remainder = offsetRef.current % STEP;
        const snapDelta = remainder > STEP / 2 ? STEP - remainder : -remainder;
        if (Math.abs(snapDelta) > 1) {
            smoothShift(snapDelta);
        }
    }, [smoothShift]);

    return (
        <section className="bg-[#252a5a] py-40 ">
            <h2 className="text-white text-center text-3xl font-bold tracking-normal mb-16">2026 Board Members</h2>
            <div className="overflow-hidden mx-auto relative" style={{ width: "min(calc(3 * 256px + 2 * 32px), 100%)" }}>
                <div className="absolute left-0 top-0 h-full w-64 z-10 bg-gradient-to-r from-[#252a5a] to-transparent pointer-events-none"/>
                <div className="absolute right-0 top-0 h-full w-64 z-10 bg-gradient-to-l from-[#252a5a] to-transparent pointer-events-none"/>

                {/* Arrow buttons — desktop only */}
                <button
                    onClick={() => handleArrow(-1)}
                    className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    aria-label="Previous"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button
                    onClick={() => handleArrow(1)}
                    className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    aria-label="Next"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
                </button>

                <div
                    ref={trackRef}
                    className="flex gap-8 w-max cursor-pointer"
                    style={{ transition: "none" }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {doubled.map((member, idx) => (
                        <div key={idx} className="relative group w-64 h-80 rounded-md overflow-hidden flex-shrink-0" onClick={(e) => {
                            if (Math.abs(touchDelta.current) > SWIPE_THRESHOLD) return;
                            e.stopPropagation();
                            showCard(idx);
                        }}>
                            <img src={member.image} className="w-full h-full object-cover"/>
                            <div className={`absolute inset-0 bg-[#252a5a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 ${activeCard === idx ? "!opacity-100" : ""}`}>
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
