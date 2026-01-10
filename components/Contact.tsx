import React from 'react';
import { Mail, Instagram, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Start Your <span className="text-cyan-400">Digital Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to give your brand a digital aura? Send a message or chat with us directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* EMAIL SECTION - CLICKABLE */}
            <a 
              href="mailto:contactus@aura-dev.net" 
              className="flex items-start gap-5 group cursor-pointer block transition-transform active:scale-95"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">contactus@aura-dev.net</p>
              </div>
            </a>

            {/* INSTAGRAM SECTION - CLICKABLE */}
            <a 
              href="https://www.instagram.com/aura.dev.official/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start gap-5 group cursor-pointer block transition-transform active:scale-95"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                <Instagram className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Instagram</h4>
                <p className="text-gray-400 group-hover:text-purple-400 transition-colors">@aura.dev.official</p>
              </div>
            </a>
          </div>

          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4"
          >
            <input type="hidden" name="access_key" value="ce8f995d-90c5-4a5a-82f7-e92bdaf0f71b" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                name="name"
                type="text" 
                placeholder="Name" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white placeholder:text-gray-500"
              />
              <input 
                name="email"
                type="email" 
                placeholder="Email" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white placeholder:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                name="phone"
                type="tel" 
                placeholder="Phone (Optional)" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white placeholder:text-gray-500"
              />
              <div className="relative">
                <select 
                  name="service"
                  required
                  defaultValue="" 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0a0a0a]">Select Service</option>
                  <option value="Web Development" className="bg-[#0a0a0a] text-white">Web Development</option>
                  <option value="UI/UX Design" className="bg-[#0a0a0a] text-white">UI/UX Design</option>
                  <option value="Full Stack App" className="bg-[#0a0a0a] text-white">Full Stack App</option>
                  <option value="Maintenance" className="bg-[#0a0a0a] text-white">Maintenance</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <textarea 
              name="message"
              placeholder="Tell us about your project..." 
              required
              rows={4}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white resize-none placeholder:text-gray-500"
            ></textarea>
            
            <div className="flex flex-col gap-3 pt-2">
              <button 
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all transform active:scale-95 shadow-lg shadow-white/5"
              >
                <Send size={18} /> Send Message
              </button>

              <a 
                href="https://wa.me/972545280906?text=Hi%20Aura%20Dev,%20we%20are%20interested%20in%20a%20project!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all transform active:scale-95"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;