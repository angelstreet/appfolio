import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, creator } from '../data/projects'

// Tech color mapping
const techColors: Record<string, string> = {
  'Python': 'border-yellow-500/40 text-yellow-300',
  'React': 'border-cyan-500/40 text-cyan-300',
  'TypeScript': 'border-blue-500/40 text-blue-300',
  'Node.js': 'border-green-500/40 text-green-300',
  'PostgreSQL': 'border-blue-400/40 text-blue-200',
  'Docker': 'border-sky-500/40 text-sky-300',
  'AI': 'border-purple-500/40 text-purple-300',
  'Tailwind': 'border-teal-500/40 text-teal-300',
  'Turso': 'border-emerald-500/40 text-emerald-300',
  'Clerk': 'border-violet-500/40 text-violet-300',
  'WebSocket': 'border-orange-500/40 text-orange-300',
  'Canvas API': 'border-pink-500/40 text-pink-300',
  'Vite': 'border-amber-500/40 text-amber-300',
}

function getTechClass(tech: string) {
  return techColors[tech] || 'border-cosmic-500/40 text-cosmic-100'
}

// Tiny twinkling stars for background
function MiniStars() {
  const stars = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.5 + Math.random() * 1.5,
    delay: Math.random() * 4,
    duration: 2 + Math.random() * 3,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050510] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Link to="/" className="text-star-gold hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden">
      <MiniStars />

      {/* Ambient nebula */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{
        background: 'radial-gradient(circle, rgba(40,20,80,0.2) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{
        background: 'radial-gradient(circle, rgba(20,40,100,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Header */}
      <header className="relative z-10 py-5 px-4 bg-cosmic-800/60 backdrop-blur-md border-b border-cosmic-700/30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-cosmic-200 hover:text-white transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Home
          </Link>
          <div className="flex gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-200 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-star-gold hover:text-star-amber transition-colors flex items-center gap-1.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.logoImage} alt={project.title} className="w-20 h-20 object-contain rounded-2xl mb-6 p-2" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {project.title}
            </h1>
            {project.category && (
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider text-star-gold border border-star-gold/30 rounded-full mb-6">
                {project.category}
              </span>
            )}
            <p className="text-xl text-cosmic-200 mb-10 leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-cosmic-700/60 hover:bg-cosmic-600/60 backdrop-blur-sm text-white rounded-lg transition-all duration-300 border border-cosmic-600/30 hover:border-cosmic-500/50 flex items-center gap-2"
              >
                <svg height="18" viewBox="0 0 16 16" width="18" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                View on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-star-gold/90 hover:bg-star-gold text-cosmic-900 font-semibold rounded-lg transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,215,0,0.5)] flex items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  View Live
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <motion.section
        className="relative z-10 py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-cosmic-800/40 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-600/20">
            <h2 className="text-2xl font-bold text-white mb-5">About</h2>
            <p className="text-cosmic-100 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="relative z-10 py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className={`px-4 py-2 bg-cosmic-800/60 backdrop-blur-sm rounded-full border ${getTechClass(tech)} transition-all duration-300 hover:scale-105`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Related Projects */}
      <motion.section
        className="relative z-10 py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter(p => p.slug !== project.slug)
              .slice(0, 4)
              .map((related, i) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={`/projects/${related.slug}`}
                    className="group block bg-cosmic-800/40 backdrop-blur-sm hover:bg-cosmic-700/50 rounded-xl p-5 transition-all duration-300 border border-cosmic-600/20 hover:border-star-gold/20 hover:shadow-[0_0_20px_-5px_rgba(255,215,0,0.1)]"
                  >
                    <div className="flex items-center gap-4">
                      <img src={related.logoImage} alt={related.title} className="w-10 h-10 object-contain rounded-lg p-1" />
                      <div>
                        <h3 className="text-white font-medium group-hover:text-star-gold transition-colors duration-300">{related.title}</h3>
                        <p className="text-cosmic-300 text-sm leading-relaxed">{related.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-10 px-4 border-t border-cosmic-700/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cosmic-300 mb-4 text-sm">
            © {new Date().getFullYear()} {creator.name}
          </p>
          <div className="flex justify-center gap-6">
            <a href={creator.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cosmic-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a href={creator.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cosmic-300 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
