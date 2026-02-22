import { Mail, MapPin, Github, Linkedin, Code2, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0f1329]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Open to opportunities in AI/ML, full-stack development, and innovative tech projects
        </p>
        
        <div className="bg-[#151937] border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/40 transition-all">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <a 
                    href="mailto:prapti18056@gmail.com" 
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    prapti18056@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <a 
                    href="tel:+919958975800" 
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 99589 75800
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white">Delhi, India</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <div className="text-gray-400 text-sm mb-4">Connect with me</div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/prapti-gupta-1805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group flex flex-col items-center gap-2"
                >
                  <Github className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  <span className="text-gray-400 text-xs group-hover:text-cyan-300">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/prapti-gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group flex flex-col items-center gap-2"
                >
                  <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  <span className="text-gray-400 text-xs group-hover:text-cyan-300">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/prapti18056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group flex flex-col items-center gap-2"
                >
                  <Code2 className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  <span className="text-gray-400 text-xs group-hover:text-cyan-300">LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-6">
            <p className="text-center text-gray-400 text-sm">
              Open to internships, collaborations, and full-time opportunities in software development and AI/ML
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}