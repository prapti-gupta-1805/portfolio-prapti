const skillsData = {
  'Programming Languages': [
    'Java (DSA - ongoing)',
    'C',
    'Python',
  ],
  'Frontend': [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
  ],
  'Backend / APIs': [
    'FastAPI',
    'Node.js',
    'Express.js',
  ],
  'Databases': [
    'MySQL',
    'Firebase',
  ],
  'AI / ML': [
    'Data Analysis Libraries',
    'Statistics',
  ],
  'Version Control': [
    'Git',
    'GitHub',
  ],
};

const coursework = ['DSA', 'DBMS', 'Operating Systems', 'Computer Organization and Architecture', 'OOPs', 'Computer Networks'];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technical skills and technologies I work with
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
            >
              <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <div className="bg-[#151937] border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
          <h3 className="text-white font-semibold mb-4 text-lg">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded border border-cyan-500/30"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 bg-[#151937] border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
          <h3 className="text-white font-semibold mb-4 text-lg">Certifications & Workshops</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="text-gray-300">
              <span className="text-cyan-400">•</span> DSA in Java <span className="text-gray-500 text-sm">(Apna College)</span>
            </div>
            <div className="text-gray-300">
              <span className="text-cyan-400">•</span> MERN Stack <span className="text-gray-500 text-sm">(Apna College)</span>
            </div>
            <div className="text-gray-300">
              <span className="text-cyan-400">•</span> DS/ML Bootcamp <span className="text-gray-500 text-sm">(Udemy)</span>
            </div>
            <div className="text-gray-300">
              <span className="text-cyan-400">•</span> AI Workshop <span className="text-gray-500 text-sm">(IIT Delhi)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
