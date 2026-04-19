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

      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-[#06b6d4]/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#818cf8]/8 rounded-full blur-[160px]" />
        <div className="absolute top-[50%] left-[30%] w-[40%] h-[40%] bg-[#10b981]/5 rounded-full blur-[180px]" />
      </div>

      <footer className="py-10 border-t border-white/[0.05] text-center">
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} Kumar Reddi — Fullstack Developer & Freelancer
        </p>
      </footer>
    </main>
  );
}

