"use client";

import React, { useState } from 'react';
import { Mail, Instagram, Send, X, Globe } from 'lucide-react';

const Hero = ({ lang, setLang }: { lang: string; setLang: (val: string) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = {
    he: {
      dir: "rtl",
      badge: "מקבלים פרויקטים חדשים ל-2026",
      titlePrefix: "",
      titleMain: "Digital Aura",
      desc: "אנחנו בונים אפליקציות ומערכות ווב בביצועים גבוהים, איפה שקוד נקי פוגש עיצוב יוצא דופן.",
      mainBtn: "לפרויקטים שלנו",
      secBtn: "צור קשר",
      nav: { services: "שירותים", work: "עבודות", contact: "צור קשר", btn: "בואו נבנה" },
      modal: {
        title: ["אפיון", "פרויקט"],
        desc: "מוכנים להנדס את החזון שלכם? מלאו את הפרטים ונחזור אליכם.",
        name: "שם מלא",
        email: "כתובת אימייל",
        budget: ["תקציב: ₪4k-10k", "₪10k - ₪30k", "₪30k+"],
        time: ["זמן: חודש אחד", "3 חודשים", "דחוף"],
        goals: "מטרות הפרויקט...",
        submit: "שלח אפיון"
      }
    },
    en: {
      dir: "ltr",
      badge: "Now Accepting New Clients for 2026",
      titlePrefix: "Engineering with",
      titleMain: "Digital Aura",
      desc: "We build high-performance web applications and mobile experiences where clean code meets exceptional design.",
      mainBtn: "View Our Projects",
      secBtn: "Contact Us",
      nav: { services: "Services", work: "Work", contact: "Contact", btn: "Let's Build" },
      modal: {
        title: ["Project", "Brief"],
        desc: "Ready to engineer your vision? Fill this out and we'll reach out.",
        name: "Name",
        email: "Email Address",
        budget: ["Budget: $1k-3k", "$3k - $10k", "$10k+"],
        time: ["Time: 1 Month", "3 Months", "Urgent"],
        goals: "Project goals...",
        submit: "Submit Brief"
      }
    }
  };

  const t = content[lang as keyof typeof content] || content.he;

  return (
    <div dir={t.dir} className={`relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      
      {/* Background Aura Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50" dir="ltr">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-cyan-400">A</span>ura Dev
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-cyan-400 transition">{t.nav.services}</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition">{t.nav.work}</a>
          <a href="#contact" className="hover:text-cyan-400 transition">{t.nav.contact}</a>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-400 transition active:scale-95 shadow-lg shadow-white/5"
        >
          {t.nav.btn}
        </button>
      </nav>

      {/* FIXED LANGUAGE TOGGLE */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-xl" dir="ltr">
        <div className="px-2 text-white/30"><Globe size={14} /></div>
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-cyan-500 text-white' : 'text-white/40 hover:text-white'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('he')}
          className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-300 ${lang === 'he' ? 'bg-cyan-400 text-black' : 'text-white/40 hover:text-white'}`}
        >
          HE
        </button>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase border border-cyan-400/30 rounded-full bg-cyan-400/10">
          {t.badge}
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
          {t.titlePrefix && (
            <span className="block text-4xl md:text-7xl font-bold text-white mb-2">
              {t.titlePrefix}
            </span>
          )}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {t.titleMain}
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light tracking-wide mx-auto">
          {t.desc}
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <a href="#portfolio" className="px-10 py-4 bg-cyan-500 rounded-full font-bold shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all duration-300 text-center">
            {t.mainBtn}
          </a>
          <a href="#contact" className="px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-center">
            {t.secBtn}
          </a>
        </div>
      </main>

      {/* Terminal Section */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 shadow-2xl relative group" dir="ltr">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex gap-2 mb-6 justify-start">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <code className="text-sm md:text-base leading-relaxed text-left block font-mono">
            <span className="text-purple-400">const</span> <span className="text-white">auraDev</span> = {'{'} <br />
            &nbsp;&nbsp;focus: <span className="text-yellow-200">'Scalability'</span>, <br />
            &nbsp;&nbsp;design: <span className="text-yellow-200">'Pixel Perfect'</span>, <br />
            &nbsp;&nbsp;status: <span className="text-yellow-200">'Building the Future'</span> <br />
            {'}'};
          </code>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6" dir={t.dir}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-[#0d0d0d] border border-white/10 w-full max-w-lg rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className={`absolute top-5 ${t.dir === 'rtl' ? 'left-5' : 'right-5'} text-gray-500 hover:text-white`}><X size={24} /></button>
            <h3 className="text-2xl font-bold mb-2">{t.modal.title[0]} <span className="text-cyan-400">{t.modal.title[1]}</span></h3>
            <p className="text-gray-400 text-sm mb-8">{t.modal.desc}</p>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="ce8f995d-90c5-4a5a-82f7-e92bdaf0f71b" />
              <input type="text" name="name" placeholder={t.modal.name} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white text-start" />
              <input type="email" name="email" placeholder={t.modal.email} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white text-start" />
              <div className="grid grid-cols-2 gap-4">
                <select name="budget" className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white"><>{t.modal.budget.map(opt => <option key={opt} value={opt}>{opt}</option>)}</></select>
                <select name="timeline" className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white"><>{t.modal.time.map(opt => <option key={opt} value={opt}>{opt}</option>)}</></select>
              </div>
              <textarea name="message" placeholder={t.modal.goals} rows={3} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white resize-none text-start"></textarea>
              <button type="submit" className="w-full py-4 bg-cyan-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"><Send size={18} /> {t.modal.submit}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;