import { ExternalLink, Github, Trophy } from 'lucide-react';

const projects = [
  {
    title: 'TerraVision: Environmental Intelligence Platform',
    role: 'Backend Dev',
    achievement: 'Top 5 in InnoventionUT \'26',
    description: 'Location-based environmental analysis platform with real-time data integration and spatial filtering.',
    highlights: [
      'Implemented a FastAPI backend powering location-based environmental analysis',
      'Integrated live Weather and AQI data (XML → JSON → GeoJSON) with robust parsing',
      'Built spatial filtering pipelines for EV infrastructure, solar panel installations, and tree cover using GeoJSON',
      'Built data ingestion pipelines to persist parsed data into Firebase for reuse and analysis',
    ],
    tech: ['FastAPI', 'Python', 'GeoJSON', 'Firebase', 'XML/JSON']
  },
  {
    title: 'Nivedini: Multilingual Healthcare Assistant',
    role: 'Frontend Dev',
    achievement: 'Top 21 in AI Manthan IITD \'25',
    description: 'Complete healthcare platform with multilingual support for patient management and reporting.',
    highlights: [
      'Complete static frontend: patient lists, profiles, reports, summaries, forms',
      'PDF export and report deletion using vanilla JS + Web APIs',
      'Full verbatim support with i18next for multilingual accessibility',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'i18next', 'Web APIs', 'PDF.js']
  },
  {
    title: 'NEXTskill: AI-Driven Career Development Platform',
    role: 'Full Stack Dev',
    achievement: 'Google GenAI Hackathon \'25',
    description: 'Comprehensive career development platform with AI-powered tools for skill assessment and career planning.',
    highlights: [
      'Full React + TypeScript frontend: dashboards, assessments, roadmaps, resume editor',
      'Implemented user authentication, including Google OAuth sign-in',
      'Animated UI components (tooltips, glowing effects, dynamic visuals)',
    ],
    tech: ['React', 'TypeScript', 'Google OAuth', 'UI/UX', 'GenAI']
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0f1329]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Tech projects showcasing full-stack development and AI integration
        </p>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 md:p-8 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded border border-purple-500/40">
                      {project.role}
                    </span>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Trophy size={16} />
                      <span className="text-sm">{project.achievement}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a> */}
                  
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>}
                  )} */}
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
