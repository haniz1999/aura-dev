import React from 'react';
import { Mail, Instagram, Send, MessageCircle } from 'lucide-react';

const Contact = ({ lang }: { lang: string }) => {
  const content = {
    he: {
      dir: "rtl",
      title: "התחילו את המסע ",
      titleHighlight: "הדיגיטלי שלכם",
      desc: "מוכנים לתת למותג שלכם הילה דיגיטלית? שלחו הודעה או צ'אט איתנו ישירות בוואטסאפ.",
      emailLabel: "שלחו לנו מייל",
      instaLabel: "אינסטגרם",
      placeholders: {
        name: "שם",
        email: "אימייל",
        phone: "טלפון (אופציונלי)",
        selectService: "בחר שירות",
        message: "ספרו לנו על הפרויקט שלכם...",
        sendBtn: "שלח הודעה",
        whatsappBtn: "צ'אט בוואטסאפ"
      },
      services: [
        "פיתוח אתרים",
        "עיצוב UI/UX",
        "אפליקציית Full Stack",
        "תחזוקה"
      ]
    },
    en: {
      dir: "ltr",
      title: "Start Your ",
      titleHighlight: "Digital Journey",
      desc: "Ready to give your brand a digital aura? Send a message or chat with us directly on WhatsApp.",
      emailLabel: "Email Us",
      instaLabel: "Instagram",
      placeholders: {
        name: "Name",
        email: "Email",
        phone: "Phone (Optional)",
        selectService: "Select Service",
        message: "Tell us about your project...",
        sendBtn: "Send Message",
        whatsappBtn: "Chat on WhatsApp"
      },
      services: [
        "Web Development",
        "UI/UX Design",
        "Full Stack App",
        "Maintenance"
      ]
    }
  };

  const t = content[lang as keyof typeof content] || content.he;

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden" dir={t.dir}>
      {/* Aura Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.title} <span className="text-cyan-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* SYMMETRIC CONTACT ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a 
            href="mailto:contactus@aura-dev.net" 
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all group active:scale-95"
          >
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-semibold text-white">{t.emailLabel}</h4>
              <p className="text-xs text-gray-400 truncate group-hover:text-cyan-400 transition-colors">contactus@aura-dev.net</p>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/aura.dev.official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group active:scale-95"
          >
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-purple-500/10 transition-colors">
              <Instagram className="w-5 h-5 text-purple-500" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-semibold text-white">{t.instaLabel}</h4>
              <p className="text-xs text-gray-400 truncate group-hover:text-purple-400 transition-colors">@aura.dev.official</p>
            </div>
          </a>
        </div>

        {/* CENTERED FORM */}
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
              placeholder={t.placeholders.name} 
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white placeholder:text-gray-500 text-start"
            />
            <input 
              name="email"
              type="email" 
              placeholder={t.placeholders.email} 
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white placeholder:text-gray-500 text-start"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              name="phone"
              type="tel" 
              placeholder={t.placeholders.phone} 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white placeholder:text-gray-500 text-start"
            />
            <div className="relative">
              <select 
                name="service"
                required
                defaultValue="" 
                className={`w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white appearance-none cursor-pointer ${t.dir === 'rtl' ? 'pr-4' : 'pl-4'}`}
              >
                <option value="" disabled className="bg-[#0a0a0a]">{t.placeholders.selectService}</option>
                {t.services.map((service, idx) => (
                  <option key={idx} value={service} className="bg-[#0a0a0a] text-white">{service}</option>
                ))}
              </select>
              <div className={`absolute inset-y-0 ${t.dir === 'rtl' ? 'left-4' : 'right-4'} flex items-center pointer-events-none`}>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <textarea 
            name="message"
            placeholder={t.placeholders.message} 
            required
            rows={4}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 outline-none transition-all text-white resize-none placeholder:text-gray-500 text-start"
          ></textarea>
          
          <div className="flex flex-col gap-3 pt-2">
            <button 
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all transform active:scale-95 shadow-lg shadow-white/5"
            >
              <Send size={18} /> {t.placeholders.sendBtn}
            </button>

            <a 
              href="https://wa.me/972545280906?text=Hi%20Aura%20Dev,%20we%20are%20interested%20in%20a%20project!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all transform active:scale-95"
            >
              <MessageCircle size={18} /> {t.placeholders.whatsappBtn}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;