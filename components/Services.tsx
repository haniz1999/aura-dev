import React from 'react';
import { Monitor, Smartphone, Palette } from 'lucide-react';

const Services = ({ lang }: { lang: string }) => {
  const content = {
    he: {
      dir: "rtl",
      title: "השירותים ",
      titleHighlight: "שלנו",
      services: [
        {
          title: 'פיתוח Full-Stack',
          description: 'אתרים בעלי ביצועים גבוהים, מותאמים ל-SEO, שנבנו עם React ו-Next.js.',
          icon: <Monitor className="w-8 h-8 text-cyan-400" />,
        },
        {
          title: 'פיתוח אפליקציות',
          description: 'חוויות מובייל מודרניות עם אנימציות חלקות וביצועי Native עוצמתיים.',
          icon: <Smartphone className="w-8 h-8 text-purple-500" />,
        },
        {
          title: 'זהות ויזואלית',
          description: 'עיצוב לוגו מקצועי ואסתטיקה מותגית ייחודית שבולטת מעל כולם.',
          icon: <Palette className="w-8 h-8 text-cyan-400" />,
        },
      ]
    },
    en: {
      dir: "ltr",
      title: "Our ",
      titleHighlight: "Services",
      services: [
        {
          title: 'Web Development',
          description: 'High-performance, SEO-friendly websites built with React and Next.js.',
          icon: <Monitor className="w-8 h-8 text-cyan-400" />,
        },
        {
          title: 'App Development',
          description: 'Modern mobile experiences with smooth animations and native performance.',
          icon: <Smartphone className="w-8 h-8 text-purple-500" />,
        },
        {
          title: 'Visual Identity',
          description: 'Professional logo design and brand aesthetics that stand out from the crowd.',
          icon: <Palette className="w-8 h-8 text-cyan-400" />,
        },
      ]
    }
  };

  const t = content[lang as keyof typeof content] || content.he;

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative" dir={t.dir}>
      <div className="max-w-6xl mx-auto px-4">
        {/* CENTERED HEADER */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t.title} <span className="text-cyan-400">{t.titleHighlight}</span>
        </h2>
        
        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all group ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;