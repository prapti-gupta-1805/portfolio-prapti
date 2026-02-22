import { GraduationCap, Award, Music } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#0f1329]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          About Me
        </h2>
        
        <div className="bg-[#151937] border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/40 transition-all mb-8">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm currently pursuing my B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence 
            at USICT, GGSIPU, maintaining a CGPA of 7.85. My journey in tech is driven by a passion for creating intelligent 
            solutions that make a real-world impact.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I've been a part in top hackathons, developed full-stack applications integrating AI. Currently, I'm expanding my expertise in data structures, machine learning, and cloud technologies while exploring opportunities in AI-driven product development.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            Beyond coding, I'm a trained Bharatanatyam dancer with 10+ years of experience and a Senior Diploma, 
            having performed on prestigious stages including Siri Fort Auditorium and Talkatora Auditorium. 
            This artistic discipline complements my technical work, bringing creativity and perseverance to everything I do.
          </p>
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-500/10 rounded">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-medium">Education</h3>
            </div>
            <p className="text-gray-400 text-sm mb-1">B.Tech CSE (AI)</p>
            <p className="text-gray-500 text-xs mb-1">USICT, GGSIPU</p>
            <p className="text-cyan-400 text-sm">CGPA: 7.85</p>
          </div>

          <div className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-500/10 rounded">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-medium">Achievements</h3>
            </div>
            <p className="text-gray-400 text-sm mb-1">Top 5 - InnovateNSUT '26</p>
            <p className="text-gray-400 text-sm mb-1">Top 21 - AI Manthan IITD '25</p>
            <p className="text-gray-400 text-sm">Google GenAI Hackathon '25</p>
          </div>

          <div className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-500/10 rounded">
                <Music className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-medium">Beyond Tech</h3>
            </div>
            <p className="text-gray-400 text-sm mb-1">Bharatanatyam Dancer</p>
            <p className="text-gray-500 text-xs mb-1">10+ years training</p>
            <p className="text-cyan-400 text-sm">Senior Diploma</p>
          </div>
        </div>
      </div>
    </section>
  );
}