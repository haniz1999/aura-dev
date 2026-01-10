import React from 'react';

const Portfolio = ({ lang }: { lang: string }) => {
  const content = {
    he: {
      dir: "rtl",
      subtitle: "עבודות",
      subtitleHighlight: "נבחרות",
      desc: "הצצה לפתרונות הדיגיטליים שהנדסנו עבור הלקוחות שלנו.",
      viewAll: "לכל הפרויקטים ←",
      projects: [
        {
          title: "Travel Explorer",
          category: "Web App / Next.js",
          description: "פלטפורמת תכנון טיולים מודרנית עם ממשק מהיר וחווית משתמש חלקה.",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
          link: "https://travel-updated-project.vercel.app/"
        },
        {
          title: "פלטפורמת MEEI",
          category: "Education / Web Design",
          description: "בית דיגיטלי מקיף למוסד חינוכי, עם דגש על נגישות ובהירות.",
          image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
          link: "https://meeischool.com/"
        },
        {
          title: "ניתוח תמונות רנטגן (AI)",
          category: "AI / Medical Diagnostics",
          description: "מערכת למידה עמוקה (CNN) לזיהוי ואבחון מחלות ריאה בצילומי רנטגן.",
          image: "/aura-banner.png",
          link: "#" 
        }
      ]
    },
    en: {
      dir: "ltr",
      subtitle: "Selected",
      subtitleHighlight: "Work",
      desc: "A glimpse into the digital solutions we have engineered.",
      viewAll: "View all projects →",
      projects: [
        {
          title: "Travel Explorer",
          category: "Web App / Next.js",
          description: "A modern travel planning platform with high-performance UI and seamless navigation.",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
          link: "https://travel-updated-project.vercel.app/"
        },
        {
          title: "MEEI School Platform",
          category: "Education / Web Design",
          description: "A comprehensive digital home for an educational institution, focusing on accessibility.",
          image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
          link: "https://meeischool.com/"
        },
        {
          title: "X-ray Image Analysis (AI)",
          category: "AI / Medical Diagnostics",
          description: "Advanced deep learning system utilizing Convolutional Neural Networks (CNNs) to detect lung diseases.",
          image: "/aura-banner.png",
          link: "#" 
        }
      ]
    }
  };

  const t = content[lang as keyof typeof content] || content.he;

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]" dir={t.dir}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* CENTERED HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.subtitle} <span className="text-purple-500">{t.subtitleHighlight}</span>
          </h2>
          <p className="max-w-xl text-gray-400 text-lg mb-8 leading-relaxed">
            {t.desc}
          </p>
          <button className="text-cyan-400 font-semibold hover:text-white transition-colors flex items-center gap-2 group">
            {t.viewAll}
          </button>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 block transition-all hover:border-cyan-400/30 shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />
              </div>
              
              <div className={`p-6 relative z-10 ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <p className="text-xs text-cyan-400 font-mono mb-2 uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;