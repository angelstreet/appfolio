import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, creator } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-cosmic-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Link to="/" className="text-star-gold hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cosmic-900">
      {/* Header */}
      <header className="py-6 px-4 bg-cosmic-800 border-b border-cosmic-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-cosmic-200 hover:text-white transition-colors">
            ← Back
          </Link>
          <div className="flex gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-200 hover:text-white transition-colors"
            >
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-star-gold hover:text-star-amber transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-6">{project.logo}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-cosmic-200 mb-8">
              {project.shortDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cosmic-700 hover:bg-cosmic-600 text-white rounded-lg transition-colors"
              >
                View on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-star-gold hover:bg-star-amber text-cosmic-900 font-semibold rounded-lg transition-colors"
                >
                  View Live
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-8 px-4 bg-cosmic-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <p className="text-cosmic-100 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-cosmic-700 text-cosmic-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 px-4 bg-cosmic-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter(p => p.slug !== project.slug)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.slug}
                  to={`/projects/${related.slug}`}
                  className="block bg-cosmic-700 hover:bg-cosmic-600 rounded-lg p-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{related.logo}</span>
                    <div>
                      <h3 className="text-white font-medium">{related.title}</h3>
                      <p className="text-cosmic-300 text-sm">{related.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-cosmic-900 border-t border-cosmic-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cosmic-300 mb-4">
            © {new Date().getFullYear()} {creator.name}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={creator.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={creator.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
