"use client"; // This line is required for useState to work

import React, { useState } from 'react';
import { Mail, Instagram, Send, X } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans">
      {/* Background Aura Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-cyan-400">A</span>ura Dev
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition">Work</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition inline-block active:scale-95"
        >
          Let's Build
        </button>
      </nav>

      {/* Project Brief Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative bg-[#0d0d0d] border border-white/10 w-full max-w-lg rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-2">Project <span className="text-cyan-400">Brief</span></h3>
            <p className="text-gray-400 text-sm mb-8">Ready to engineer your vision? Fill this out and we'll reach out.</p>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="ce8f995d-90c5-4a5a-82f7-e92bdaf0f71b" />
              
              <input 
                type="text" name="name" placeholder="Name" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white placeholder:text-gray-500 transition-all"
              />

              <input 
                type="email" name="email" placeholder="Email Address" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white placeholder:text-gray-500 transition-all"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <select name="budget" className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white cursor-pointer appearance-none">
                  <option className="bg-[#0a0a0a]">Budget: $1k-3k</option>
                  <option className="bg-[#0a0a0a]">$3k - $10k</option>
                  <option className="bg-[#0a0a0a]">$10k+</option>
                </select>
                <select name="timeline" className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white cursor-pointer appearance-none">
                  <option className="bg-[#0a0a0a]">Time: 1 Month</option>
                  <option className="bg-[#0a0a0a]">3 Months</option>
                  <option className="bg-[#0a0a0a]">Urgent</option>
                </select>
              </div>

              <textarea 
                name="message" placeholder="Project goals..." rows={3} required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-white resize-none placeholder:text-gray-500 transition-all"
              ></textarea>

              <button 
                type="submit"
                className="w-full py-4 bg-cyan-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all transform active:scale-95"
              >
                <Send size={18} /> Submit Brief
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase border border-cyan-400/30 rounded-full bg-cyan-400/10">
          Now Accepting New Clients for 2026
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
          Engineering with <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Digital Aura
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          We build high-performance web applications and mobile experiences 
          where clean code meets exceptional design.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="#portfolio" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition text-center"
          >
            View Our Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold backdrop-blur-md hover:bg-white/10 transition text-center"
          >
            Contact Us
          </a>
        </div>
      </main>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#111] border border-white/10 rounded-t-2xl p-6 shadow-2xl">
          <div className="flex gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <code className="text-cyan-300/80 text-sm sm:text-base">
            <span className="text-purple-400 font-mono">const</span> auraDev = {'{'} <br />
            &nbsp;&nbsp;focus: <span className="text-yellow-200">'Scalability'</span>, <br />
            &nbsp;&nbsp;design: <span className="text-yellow-200">'Pixel Perfect'</span>, <br />
            &nbsp;&nbsp;status: <span className="text-yellow-200">'Building the Future'</span> <br />
            {'}'};
          </code>
        </div>
      </div>
    </div>
  );
};

export default Hero;