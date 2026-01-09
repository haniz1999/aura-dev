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
              {/* New Phone Number Field */}
              <input 
               name="phone"
               type="tel" 
               placeholder="Phone Number (Optional)" 
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
            {/* New WhatsApp Button */}
            <a href="https://wa.me/972545280906?text=Hi%20Aura%20Dev,%20I'm%20interested%20in%20a%20project!" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all transform active:scale-95" >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    Chat on WhatsApp
  </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;