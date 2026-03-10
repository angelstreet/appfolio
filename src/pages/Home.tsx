import { useState, useEffect, useRef, useMemo } from 'react'
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
  isPrimary?: boolean
  mouseOffset: { x: number; y: number }
}

function StarHotspot({ x, y, project, isPrimary, mouseOffset }: StarHotspotProps) {
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

  const size = isPrimary ? 24 : 18
  const parallaxStrength = isPrimary ? 8 : 12

  return (
    <div
      className="absolute z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) translate(${mouseOffset.x * parallaxStrength}px, ${mouseOffset.y * parallaxStrength}px)`,
        transition: shouldReduceMotion ? 'none' : 'transform 0.3s ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/projects/${project.slug}`}
        onClick={handleClick}
        className="block"
        aria-label={`View ${project.title} project`}
        tabIndex={0}
      >
        <motion.div
          className="cursor-pointer relative flex items-center justify-center"
          whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          style={{ width: size * 4, height: size * 4 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: size * 4,
              height: size * 4,
              background: isPrimary
                ? 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(180,200,255,0.1) 0%, transparent 70%)',
            }}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Core star */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              background: isPrimary
                ? 'radial-gradient(circle, #fff 0%, #ffd700 40%, rgba(255,180,71,0.8) 70%, transparent 100%)'
                : 'radial-gradient(circle, #fff 0%, #c8d8ff 40%, rgba(140,170,255,0.6) 70%, transparent 100%)',
              boxShadow: isPrimary
                ? '0 0 20px 8px rgba(255,215,0,0.6), 0 0 60px 20px rgba(255,180,71,0.3)'
                : '0 0 15px 6px rgba(140,170,255,0.5), 0 0 40px 15px rgba(100,140,255,0.2)',
            }}
            animate={shouldReduceMotion ? {} : {
              boxShadow: isPrimary
                ? [
                    '0 0 20px 8px rgba(255,215,0,0.5), 0 0 60px 20px rgba(255,180,71,0.25)',
                    '0 0 35px 12px rgba(255,215,0,0.7), 0 0 80px 30px rgba(255,180,71,0.4)',
                    '0 0 20px 8px rgba(255,215,0,0.5), 0 0 60px 20px rgba(255,180,71,0.25)',
                  ]
                : [
                    '0 0 15px 6px rgba(140,170,255,0.4), 0 0 40px 15px rgba(100,140,255,0.15)',
                    '0 0 25px 10px rgba(140,170,255,0.6), 0 0 60px 25px rgba(100,140,255,0.3)',
                    '0 0 15px 6px rgba(140,170,255,0.4), 0 0 40px 15px rgba(100,140,255,0.15)',
                  ],
            }}
            transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Cross-flare spikes */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute"
              style={{
                width: size * 3,
                height: 1,
                background: isPrimary
                  ? 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), rgba(255,255,255,0.8), rgba(255,215,0,0.4), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(140,170,255,0.3), rgba(255,255,255,0.6), rgba(140,170,255,0.3), transparent)',
              }}
              animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [0.8, 1.1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute"
              style={{
                width: 1,
                height: size * 3,
                background: isPrimary
                  ? 'linear-gradient(180deg, transparent, rgba(255,215,0,0.4), rgba(255,255,255,0.8), rgba(255,215,0,0.4), transparent)'
                  : 'linear-gradient(180deg, transparent, rgba(140,170,255,0.3), rgba(255,255,255,0.6), rgba(140,170,255,0.3), transparent)',
              }}
              animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [0.8, 1.1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          )}
        </motion.div>
      </Link>

      <AnimatePresence>
        {isHovered && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 md:w-56 bg-cosmic-800/90 backdrop-blur-md border border-cosmic-500/30 rounded-xl p-4 shadow-2xl z-50 pointer-events-none"
          >
            <div className="text-2xl mb-2">{project.logo}</div>
            <h3 className="text-star-gold font-semibold text-sm md:text-base">{project.title}</h3>
            <p className="text-cosmic-200 text-xs md:text-sm mt-1 leading-relaxed">{project.shortDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTapped && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-cosmic-800/95 backdrop-blur-md border-t border-cosmic-500/30 rounded-t-2xl p-4 mx-2 mb-2 shadow-xl"
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

function SupportingStar({ x, y, size = 2, brightness = 0.6, mouseOffset }: { x: number; y: number; size?: number; brightness?: number; mouseOffset: { x: number; y: number } }) {
  const shouldReduceMotion = useReducedMotion()
  const parallaxStrength = 15 + Math.random() * 10
  const animDuration = useMemo(() => 2 + Math.random() * 3, [])
  const animDelay = useMemo(() => Math.random() * 3, [])

  const style: React.CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
    transform: shouldReduceMotion ? undefined : `translate(${mouseOffset.x * parallaxStrength}px, ${mouseOffset.y * parallaxStrength}px)`,
    transition: shouldReduceMotion ? 'none' : 'transform 0.4s ease-out',
  }

  if (shouldReduceMotion) {
    return <div className="absolute bg-white/50 rounded-full" style={style} />
  }

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        ...style,
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(200,220,255,${brightness * 0.3})`,
      }}
      animate={{
        opacity: [brightness * 0.4, brightness, brightness * 0.4],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: animDuration,
        repeat: Infinity,
        delay: animDelay,
        ease: 'easeInOut',
      }}
    />
  )
}

// Shooting star component
function ShootingStar() {
  const shouldReduceMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: Math.random() * 80, y: Math.random() * 30 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = setInterval(() => {
      setPosition({ x: Math.random() * 80, y: Math.random() * 30 })
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 1200)
    }, 6000 + Math.random() * 6000)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  if (!isVisible || shouldReduceMotion) return null

  return (
    <motion.div
      initial={{ x: '0%', y: '0%', opacity: 0.8 }}
      animate={{ x: '200px', y: '100px', opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute z-5 pointer-events-none"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-white/0 opacity-90" />
      <div className="absolute top-0 left-0 w-6 h-px bg-white opacity-70 blur-sm" />
    </motion.div>
  )
}

// Nebula cloud component for depth
function NebulaCloud({ x, y, color, size, mouseOffset }: { x: number; y: number; color: string; size: number; mouseOffset: { x: number; y: number } }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
        transform: `translate(-50%, -50%) translate(${mouseOffset.x * 5}px, ${mouseOffset.y * 5}px)`,
        transition: shouldReduceMotion ? 'none' : 'transform 0.6s ease-out',
      }}
      animate={shouldReduceMotion ? {} : {
        opacity: [0.15, 0.25, 0.15],
        scale: [0.95, 1.05, 0.95],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// Category filter
const categories: Category[] = ['All', 'SaaS', 'Finance', 'Gaming', 'Productivity', 'Creative', 'Social']

// Generate supporting stars once
const supportingStarData = [
  { x: 8, y: 12, size: 1.5, brightness: 0.5 },
  { x: 88, y: 9, size: 2, brightness: 0.7 },
  { x: 14, y: 32, size: 1, brightness: 0.4 },
  { x: 82, y: 38, size: 1.5, brightness: 0.6 },
  { x: 4, y: 48, size: 1, brightness: 0.3 },
  { x: 93, y: 22, size: 2, brightness: 0.5 },
  { x: 22, y: 6, size: 2.5, brightness: 0.8 },
  { x: 72, y: 14, size: 1.5, brightness: 0.6 },
  { x: 58, y: 8, size: 2, brightness: 0.7 },
  { x: 38, y: 5, size: 1.5, brightness: 0.5 },
  { x: 3, y: 25, size: 1, brightness: 0.3 },
  { x: 96, y: 42, size: 1, brightness: 0.4 },
  { x: 30, y: 22, size: 1.5, brightness: 0.5 },
  { x: 68, y: 6, size: 1, brightness: 0.4 },
  { x: 46, y: 15, size: 2, brightness: 0.6 },
  { x: 12, y: 55, size: 1, brightness: 0.3 },
  { x: 55, y: 28, size: 1, brightness: 0.35 },
  { x: 78, y: 48, size: 1, brightness: 0.3 },
  { x: 35, y: 42, size: 1.5, brightness: 0.4 },
  { x: 90, y: 15, size: 1.5, brightness: 0.5 },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [shootingStarKey, _setShootingStarKey] = useState(0)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const highlightedProjects = activeCategory === 'All'
    ? new Set(projects.map(p => p.slug))
    : new Set(filteredProjects.map(p => p.slug))

  void setActiveCategory

  // Mouse parallax
  useEffect(() => {
    if (shouldReduceMotion) return
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setMouseOffset({
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  return (
    <div className="min-h-screen bg-cosmic-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100vh] w-full overflow-hidden">
        {/* Deep space background with nebula */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#0a0a1a]" />

        {/* Nebula clouds for atmospheric depth */}
        <NebulaCloud x={20} y={25} color="rgba(60,20,120,0.3)" size={400} mouseOffset={mouseOffset} />
        <NebulaCloud x={75} y={20} color="rgba(20,40,120,0.25)" size={350} mouseOffset={mouseOffset} />
        <NebulaCloud x={50} y={15} color="rgba(40,20,80,0.2)" size={500} mouseOffset={mouseOffset} />

        {/* Hero image with radial mask for seamless blending */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'radial-gradient(ellipse 70% 85% at 50% 75%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 85% at 50% 75%, black 30%, transparent 75%)',
          filter: 'brightness(0.9) contrast(1.05)',
        }} />
        {/* Soft gradient overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cosmic-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900 via-transparent to-transparent" style={{ height: '30%', bottom: 0, top: 'auto' }} />

        {/* Supporting Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {supportingStarData.map((s, i) => (
            <SupportingStar key={i} x={s.x} y={s.y} size={s.size} brightness={s.brightness} mouseOffset={mouseOffset} />
          ))}
        </div>

        {/* Shooting Stars */}
        <ShootingStar key={shootingStarKey} />
        <ShootingStar key={shootingStarKey + 100} />

        {/* Featured Star Hotspots */}
        <div className="absolute inset-0">
          {featuredStars.map((star) => {
            const project = projects.find(p => p.slug === star.projectSlug)
            if (!project || !highlightedProjects.has(project.slug)) return null
            return (
              <StarHotspot
                key={star.id}
                x={star.x}
                y={star.y}
                project={project}
                isPrimary={star.id === 'star-a'}
                mouseOffset={mouseOffset}
              />
            )
          })}
        </div>

        {/* Creator Info & CTAs */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">{creator.name}</h1>
            <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 mb-2">
              <p className="text-cosmic-100 text-sm md:text-base drop-shadow-md">{creator.role}</p>
              <span className="text-cosmic-400">|</span>
              <span className="text-cosmic-200 text-xs md:text-sm">
                {categories.slice(1).join(' · ')}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href={creator.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity drop-shadow-md" aria-label="GitHub">
                <svg height="26" viewBox="0 0 16 16" width="26" fill="white"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              </a>
              <a href={creator.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity drop-shadow-md" aria-label="LinkedIn">
                <svg height="26" viewBox="0 0 24 24" width="26" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {creator.resumeUrl && (
                <a href={creator.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity drop-shadow-md" aria-label="Resume">
                  <svg height="26" viewBox="0 0 24 24" width="26" fill="white"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                </a>
              )}
            </div>
          </motion.div>
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
