import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />

      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

      {/* Global Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6366f1]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#a855f7]/10 rounded-full blur-[120px]"></div>
      </div>

      <footer className="py-12 border-t border-white/5 text-center text-foreground/30 text-sm">
        <p>© {new Date().getFullYear()} Kumar Reddi. Built with Passion & Caffeine.</p>
      </footer>
    </main>
  );
}
