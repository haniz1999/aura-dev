import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Aura Dev. All rights reserved.</p>
      </footer>
    </main>
  );
}