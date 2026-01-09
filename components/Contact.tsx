import React from 'react';
import { Mail, Instagram, Send, MapPin } from 'lucide-react';

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
            Ready to give your brand a digital aura? Send a message and it will land directly in my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email Me</h4>
                {/* Updated to your professional email */}
                <p className="text-gray-400">contactus@aura-dev.net</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                <Instagram className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Instagram</h4>
                {/* Updated to your specific handle */}
                <p className="text-gray-400">@aura.dev.net</p>
              </div>
            </div>
          </div>

          {/* Form connected to Web3Forms */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4"
          >
            {/* Make sure to paste your key from web3forms.com here */}
            <input type="hidden" name="access_key" value="ce8f995d-90c5-4a5a-82f7-e92bdaf0f71b" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                name="name"
                type="text" 
                placeholder="Name" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white"
              />
              <input 
                name="email"
                type="email" 
                placeholder="Email" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white"
              />
            </div>
            <textarea 
              name="message"
              placeholder="Tell me about your project..." 
              required
              rows={4}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white resize-none"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all transform active:scale-95 shadow-lg shadow-white/5"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;