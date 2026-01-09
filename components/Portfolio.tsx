import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Travel Explorer",
      category: "Web App / Next.js",
      description: "A modern travel planning platform with high-performance UI and seamless navigation.",
      // Using a high-quality travel tech image
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      link: "https://travel-updated-project.vercel.app/"
    },
    {
      title: "MEI School Platform",
      category: "Education / Web Design",
      description: "A comprehensive digital home for an educational institution, focusing on accessibility and clarity.",
      // Using a high-quality education/building image
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
      link: "https://meeischool.com/"
    },
    {
      title: "Aura Dev Brand",
      category: "Brand Identity",
      description: "Custom visual identity and engineering brand design created for high-end digital solutions.",
      // Using a tech/abstract image to match your logo
      image: "https://images.unsplash.com/photo-1635776062127-d379bfcbb9c8?auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Selected <span className="text-purple-500">Work</span>
            </h2>
            <p className="text-gray-400">A glimpse into the digital solutions I've engineered.</p>
          </div>
          <button className="text-cyan-400 font-semibold hover:underline transition-all">
            View all projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />
              </div>
              
              <div className="p-6 relative z-10">
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