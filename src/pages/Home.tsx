import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { creator, projects, featuredStars } from '../data/projects'
import heroImage from '../assets/hero.png'

// Types
type Category = 'All' | 'SaaS' | 'Finance' | 'Gaming' | 'Productivity' | 'Creative' | 'Social'

interface StarHotspotProps {
  x: number
  y: number
  project: typeof projects[0]
  showConstellation: boolean
}

function StarHotspot({ x, y, project, showConstellation }: StarHotspotProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTapped, setIsTapped] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleResize = () => setIsTapped(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const handleClick = () => {
    if (isMobile) setIsTapped(!isTapped)
  }

  const animationProps = shouldReduceMotion 
    ? {} 
    : {
        animate: {
          boxShadow: [
            '0 0 20px 5px rgba(255, 215, 0, 0.5)',
            '0 0 40px 10px rgba(255, 215, 0, 0.7)',
            '0 0 20px 5px rgba(255, 215, 0, 0.5)',
          ],
        },
        transition: { duration: 2, repeat: Infinity }
      }

  // Constellation line to center star
  const ConstellationLine = () => {
    if (!showConstellation || shouldReduceMotion) return null
    
    // Calculate angle to center (50%, 20%)
    const centerX = 50
    const centerY = 20
    const dx = centerX - x
    const dy = centerY - y
    const length = Math.sqrt(dx * dx + dy * dy)
    const angle = Math.atan2(dy, dx) * (180 / Math.PI)
    
    return (
      <div
        className="absolute h-px bg-gradient-to-r from-transparent via-star-gold/40 to-star-gold/60"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${length}%`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'left center',
          pointerEvents: 'none',
        }}
      />
    )
  }

  return (
    <div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ConstellationLine />
      
      <Link 
        to={`/projects/${project.slug}`}
        onClick={handleClick}
        className="block focus:outline-none focus:ring-2 focus:ring-star-gold rounded-full"
        aria-label={`View ${project.title} project`}
        tabIndex={0}
      >
        <motion.div
          className="cursor-pointer relative"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          {...animationProps}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-star-gold blur-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-star-amber rounded-full" />
          </div>
          {!shouldReduceMotion && (
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
          )}
        </motion.div>
      </Link>

      <AnimatePresence>
        {isHovered && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 md:w-56 bg-cosmic-800/95 backdrop-blur-sm border border-cosmic-600 rounded-lg p-4 shadow-xl z-50 pointer-events-none"
          >
            <div className="text-2xl mb-2">{project.logo}</div>
            <h3 className="text-star-gold font-semibold text-sm md:text-base">{project.title}</h3>
            <p className="text-cosmic-200 text-xs md:text-sm mt-1">{project.shortDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTapped && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-cosmic-800 border-t border-cosmic-600 rounded-t-2xl p-4 mx-2 mb-2 shadow-xl"
          >
            <button 
              onClick={(e) => { e.preventDefault(); setIsTapped(false); }}
              className="absolute top-2 right-2 text-cosmic-300 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{project.logo}</div>
              <div className="flex-1">
                <h3 className="text-star-gold font-semibold">{project.title}</h3>
                <p className="text-cosmic-200 text-sm">{project.shortDescription}</p>
              </div>
            </div>
            <Link
              to={`/projects/${project.slug}`}
              onClick={() => setIsTapped(false)}
              className="mt-3 block w-full text-center py-2 bg-star-gold text-cosmic-900 font-semibold rounded-lg"
            >
              View Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTapped && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsTapped(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function SupportingStar({ x, y }: { x: number; y: number }) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div className="absolute w-1 h-1 bg-white/50 rounded-full" style={{ left: `${x}%`, top: `${y}%` }} />
  }

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

// Shooting star component
function ShootingStar() {
  const shouldReduceMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 40 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) return
    
    const interval = setInterval(() => {
      setPosition({ x: Math.random() * 100, y: Math.random() * 40 })
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 1000)
    }, 8000 + Math.random() * 4000)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  if (!isVisible || shouldReduceMotion) return null

  return (
    <motion.div
      initial={{ x: '-10%', y: '0%', opacity: 1 }}
      animate={{ x: '110%', y: '50%', opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute z-5 pointer-events-none"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
      <div className="absolute top-0 left-0 w-4 h-px bg-white opacity-60 blur-sm" />
    </motion.div>
  )
}

// Category filter
const categories: Category[] = ['All', 'SaaS', 'Finance', 'Gaming', 'Productivity', 'Creative', 'Social']

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [showConstellation, setShowConstellation] = useState(false)
  const [shootingStarKey, _setShootingStarKey] = useState(0)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  // Highlight stars for filtered category
  const highlightedProjects = activeCategory === 'All' 
    ? new Set(projects.map(p => p.slug))
    : new Set(filteredProjects.map(p => p.slug))

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
    // Trigger shooting star on filter change
    0
  }

  return (
    <div className="min-h-screen bg-cosmic-900">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Cosmic portfolio hero" className="w-full h-full object-cover object-bottom" />
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

        {/* Shooting Stars */}
        <ShootingStar key={shootingStarKey} />

        {/* Featured Star Hotspots */}
        <div 
          className="absolute inset-0"
          onMouseEnter={() => setShowConstellation(true)}
          onMouseLeave={() => setShowConstellation(false)}
        >
          {featuredStars.map((star) => {
            const project = projects.find(p => p.slug === star.projectSlug)
            if (!project || !highlightedProjects.has(project.slug)) return null
            return (
              <StarHotspot
                key={star.id}
                x={star.x}
                y={star.y}
                project={project}
                showConstellation={showConstellation}
              />
            )
          })}
        </div>

        {/* Creator Info & CTAs */}
        <div className="absolute bottom-8 left-0 right-0 z-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{creator.name}</h1>
            <p className="text-cosmic-200 text-sm md:text-lg mb-4">{creator.role}</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1 rounded-full text-xs md:text-sm transition-all ${
                    activeCategory === cat 
                      ? 'bg-star-gold text-cosmic-900 font-semibold' 
                      : 'bg-cosmic-700/50 text-cosmic-200 hover:bg-cosmic-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a href={creator.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cosmic-700 hover:bg-cosmic-600 text-white rounded-lg text-sm md:text-base transition-colors">
                GitHub
              </a>
              <a href={creator.linkedinUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm md:text-base transition-colors">
                LinkedIn
              </a>
              {creator.resumeUrl && (
                <a href={creator.resumeUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-star-gold/20 hover:bg-star-gold/30 text-star-gold border border-star-gold/50 rounded-lg text-sm md:text-base transition-colors">
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
          <p className="text-cosmic-100 text-lg md:text-xl">{creator.shortBio}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-cosmic-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="block bg-cosmic-800 hover:bg-cosmic-700 rounded-xl p-6 transition-all hover:scale-[1.02] border border-cosmic-600/50"
              >
                <div className="text-4xl mb-4">{project.logo}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-cosmic-200 text-sm mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-1 bg-cosmic-600 text-cosmic-100 text-xs rounded">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <p className="text-center text-cosmic-300">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-cosmic-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AI/ML', 'Tailwind', 'Vite'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-cosmic-700 text-cosmic-100 rounded-full text-sm">{skill}</span>
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
