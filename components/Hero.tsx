import React from 'react';

const Hero = () => {
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
          <a href="#work" className="hover:text-cyan-400 transition">Work</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition">
          Let's Build
        </button>
      </nav>

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
          I build high-performance web applications and mobile experiences 
          where clean code meets exceptional design.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition">
            View My Projects
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold backdrop-blur-md hover:bg-white/10 transition">
            Contact Me
          </button>
        </div>
      </main>

      {/* Code Snippet Decoration */}
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