import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { creator, projects, featuredStars } from '../data/projects'
import heroImage from '../assets/hero.png'

interface StarHotspotProps {
  x: number
  y: number
  project: typeof projects[0]
}

function StarHotspot({ x, y, project }: StarHotspotProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/projects/${project.slug}`}>
        <motion.div
          className="cursor-pointer relative"
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: [
              '0 0 20px 5px rgba(255, 215, 0, 0.5)',
              '0 0 40px 10px rgba(255, 215, 0, 0.7)',
              '0 0 20px 5px rgba(255, 215, 0, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Star glow */}
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-star-gold blur-md" />
          
          {/* Star core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-star-amber rounded-full" />
          </div>
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2" />
            <div className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-1 h-1 bg-white rounded-full -translate-y-1/2" />
          </motion.div>
        </motion.div>
      </Link>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 md:w-56 bg-cosmic-800/95 backdrop-blur-sm border border-cosmic-600 rounded-lg p-4 shadow-xl z-50"
          >
            <div className="text-2xl mb-2">{project.logo}</div>
            <h3 className="text-star-gold font-semibold text-sm md:text-base">{project.title}</h3>
            <p className="text-cosmic-200 text-xs md:text-sm mt-1">{project.shortDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SupportingStar({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cosmic-900">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cosmic portfolio hero"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900/30 via-cosmic-900/20 to-cosmic-900" />
        </div>

        {/* Supporting Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <SupportingStar x={10} y={15} />
          <SupportingStar x={85} y={12} />
          <SupportingStar x={15} y={35} />
          <SupportingStar x={80} y={40} />
          <SupportingStar x={5} y={50} />
          <SupportingStar x={95} y={55} />
          <SupportingStar x={20} y={8} />
          <SupportingStar x={75} y={18} />
          <SupportingStar x={60} y={10} />
          <SupportingStar x={40} y={8} />
        </div>

        {/* Featured Star Hotspots */}
        <div className="absolute inset-0 z-10">
          {featuredStars.map((star) => {
            const project = projects.find(p => p.slug === star.projectSlug)
            if (!project) return null
            return (
              <StarHotspot
                key={star.id}
                x={star.x}
                y={star.y}
                project={project}
              />
            )
          })}
        </div>

        {/* Creator Info & CTAs */}
        <div className="absolute bottom-8 left-0 right-0 z-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              {creator.name}
            </h1>
            <p className="text-cosmic-200 text-sm md:text-lg mb-4">
              {creator.role}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href={creator.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cosmic-700 hover:bg-cosmic-600 text-white rounded-lg text-sm md:text-base transition-colors"
              >
                GitHub
              </a>
              <a
                href={creator.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm md:text-base transition-colors"
              >
                LinkedIn
              </a>
              {creator.resumeUrl && (
                <a
                  href={creator.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-star-gold/20 hover:bg-star-gold/30 text-star-gold border border-star-gold/50 rounded-lg text-sm md:text-base transition-colors"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-12 px-4 bg-cosmic-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cosmic-100 text-lg md:text-xl">
            {creator.shortBio}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-cosmic-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="block bg-cosmic-800 hover:bg-cosmic-700 rounded-xl p-6 transition-all hover:scale-[1.02] border border-cosmic-600/50"
              >
                <div className="text-4xl mb-4">{project.logo}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-cosmic-200 text-sm mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-cosmic-600 text-cosmic-100 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-cosmic-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AI/ML', 'Tailwind', 'Vite'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-cosmic-700 text-cosmic-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-cosmic-900 border-t border-cosmic-700">
        <div className="max-w-4xl mx-auto text-center text-cosmic-300 text-sm">
          <p>© {new Date().getFullYear()} {creator.name}. Built with passion.</p>
        </div>
      </footer>
    </div>
  )
}
