import { ChevronRight, Github, Linkedin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.png';

export function Hero() {
  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-[#0a0e27]"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="text-cyan-400 text-sm font-mono mb-4 tracking-wider">
            &lt;developer /&gt;
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-500/30 hover:border-cyan-500 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              <img 
                src={profileImage} 
                alt="Prapti Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Prapti Gupta
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-3">
            B.Tech CSE (AI) Student | USICT, GGSIPU
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <a
              href="https://github.com/prapti-gupta-1805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              <span className="text-sm">@prapti-gupta-1805</span>
            </a>
            <a
              href="https://linkedin.com/in/prapti-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} />
              <span className="text-sm">@prapti-gupta</span>
            </a>
            <a
              href="https://leetcode.com/prapti18056"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Code2 size={20} />
              <span className="text-sm">@prapti18056</span>
            </a>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={handleViewProjects}
            className="px-6 py-3 bg-cyan-500 text-white font-medium rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2"
          >
            View Projects
            <ChevronRight size={20} />
          </button>
          
          <button 
            onClick={handleContact}
            className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-medium rounded hover:bg-cyan-500/10 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}