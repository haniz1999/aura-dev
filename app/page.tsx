"use client"; // Required because we are using state

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  // This is the "brain" of the page. It tells every component which language to show.
  const [lang, setLang] = useState('he');

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Pass lang and setLang to Hero so the buttons work */}
      <Hero lang={lang} setLang={setLang} />
      
      {/* Pass lang to other components so they translate */}
      <Services lang={lang} />
      <Portfolio lang={lang} />
      <Contact lang={lang} />
      
      {/* Translated Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm" dir={lang === 'he' ? 'rtl' : 'ltr'}>
        <p>
          {lang === 'he' 
            ? "© 2026 Aura Dev. כל הזכויות שמורות." 
            : "© 2026 Aura Dev. All rights reserved."
          }
        </p>
      </footer>
    </main>
  );
}