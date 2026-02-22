import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI Intern: Team Lead, XO Rig',
    company: 'Prodigal AI',
    period: 'January \'26 – April \'26',
    type: 'Internship',
    description: 'Led AI initiatives and coordinated team operations for XO Rig project.',
  },
  {
    role: 'Operations Co-ordinator',
    company: 'Training and Placement Cell, USICT',
    period: 'Ongoing',
    type: 'Leadership',
    description: 'Leading operations for the Training and Placement Cell, coordinating recruitment drives and student placement activities.',
    responsibilities: [
      'Coordinated talent placement drives for 1000+ students',
      'Organized and managed pre-placement talks with leading companies',
      'Streamlined placement processes and student-recruiter interactions',
      'Led team operations and maintained placement records',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#0a0e27]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional experience and leadership roles
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 md:p-8 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.responsibilities?.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}