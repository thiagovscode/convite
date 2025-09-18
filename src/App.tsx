
import { Hero } from "./sections/Hero";
import { Schedule } from "./sections/Schedule";
import { Timeline } from "./sections/Timeline";
import { Location } from "./sections/Location";
import { Gifts } from "./sections/Gifts";
import { Footer } from "./sections/Footer";
import { WEDDING } from "./config";
import { ButtonGhost } from "./components/ui/Button";
import React, { useEffect } from "react";

export default function App() {
  const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  
useEffect(() => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, []);

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => scrollToId('hero')} className="font-serif text-xl tracking-wide">{WEDDING.noiva} & {WEDDING.noivo}</button>
          <div className="hidden md:flex gap-1">
            <ButtonGhost onClick={() => scrollToId('cronograma')}>Cronograma</ButtonGhost>
            <ButtonGhost onClick={() => scrollToId('historia')}>Nossa história</ButtonGhost>
            <ButtonGhost onClick={() => scrollToId('local')}>Local</ButtonGhost>
            <ButtonGhost onClick={() => scrollToId('presentes')}>Presentes</ButtonGhost>
          </div>
        </nav>
      </header>
      <Hero />
      <Schedule />
      <Timeline />
      <Location />
      <Gifts />
      <Footer />
    </div>
  );
  
}

