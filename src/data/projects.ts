export interface Creator {
  name: string
  role: string
  shortBio: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl?: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  logo: string
  repoUrl: string
  liveUrl?: string
  featured: boolean
  featuredOrder?: number
  starType: 'primary' | 'secondary' | 'support'
  category?: string
  tech: string[]
  screenshots?: string[]
}

export const creator: Creator = {
  name: "Joachim N'Doye",
  role: "IT Engineer",
  shortBio: "🚀 Test & Automation Artist 🚀 ⋄ • Python • 🌐 Fullstack ⋄ ISTQB ⋄ ⋄ Opensource ⋄",
  linkedinUrl: "https://www.linkedin.com/in/joachim-n-doye-a6279225/",
  githubUrl: "https://github.com/angelstreet",
}

export const projects: Project[] = [
  {
    slug: 'virtualpytest',
    title: 'VirtualPyTest',
    shortDescription: 'AI-powered Python testing sandbox',
    fullDescription: 'VirtualPyTest is an AI-powered testing sandbox that helps developers write, run, and debug Python tests with intelligent assistance. Features include real-time test execution, AI-generated test cases, and detailed coverage analysis.',
    logo: '🧪',
    repoUrl: 'https://github.com/angelstreet/virtualpytest',
    liveUrl: 'https://www.virtualpytest.com',
    featured: true,
    featuredOrder: 1,
    starType: 'primary',
    category: 'SaaS',
    tech: ['Python', 'React', 'PostgreSQL', 'Docker', 'AI'],
  },
  {
    slug: 'konto',
    title: 'Konto',
    shortDescription: 'Personal finance & patrimoine tracker',
    fullDescription: 'Konto is a comprehensive personal finance dashboard that tracks accounts, investments, loans, and provides detailed analytics. Features include bank synchronization, portfolio performance, and loan amortization tracking.',
    logo: '💰',
    repoUrl: 'https://github.com/angelstreet/kompta',
    liveUrl: 'https://konto.angelstreet.io',
    featured: true,
    featuredOrder: 2,
    starType: 'secondary',
    category: 'Finance',
    tech: ['React', 'TypeScript', 'Turso', 'Clerk', 'Tailwind'],
  },
  {
    slug: 'clawsgames',
    title: 'ClawsGames',
    shortDescription: 'AI-powered gaming leaderboard platform',
    fullDescription: 'ClawsGames is a competitive gaming platform with AI-powered matchmaking, real-time leaderboards, and detailed player analytics. Supports multiple game titles and provides deep insights into player performance.',
    logo: '🎮',
    repoUrl: 'https://github.com/angelstreet/clawsgames',
    liveUrl: 'https://ranking.angelstreet.io',
    featured: true,
    featuredOrder: 3,
    starType: 'secondary',
    category: 'Gaming',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
  },
  {
    slug: 'pikaboard',
    title: 'PikaBoard',
    shortDescription: 'Task management for AI teams',
    fullDescription: 'PikaBoard is a kanban-style task management platform designed specifically for AI agent teams. Features include automatic task distribution, progress tracking, and team coordination tools.',
    logo: '📋',
    repoUrl: 'https://github.com/angelstreet/pikaboard',
    liveUrl: 'https://pikaboard.angelstreet.io',
    featured: false,
    starType: 'support',
    category: 'Productivity',
    tech: ['React', 'TypeScript', 'Turso', 'Clerk'],
  },
  {
    slug: 'soulsprite',
    title: 'SoulSprite',
    shortDescription: 'AI agent character & sprite generator',
    fullDescription: 'SoulSprite creates unique AI agent characters and sprites. Design custom avatars for your AI assistants with personality, style, and visual identity.',
    logo: '🎨',
    repoUrl: 'https://github.com/angelstreet/soulsprite',
    liveUrl: 'https://soulsprite.angelstreet.io',
    featured: false,
    starType: 'support',
    category: 'Creative',
    tech: ['React', 'Canvas API', 'AI'],
  },
  {
    slug: 'afromeet',
    title: 'AfroMeet',
    shortDescription: 'Dating app for Afro-descended community',
    fullDescription: 'AfroMeet is a modern dating platform connecting people within the Afro-descended community. Features include smart matching, video chat, and community-focused features.',
    logo: '💘',
    repoUrl: 'https://github.com/angelstreet/afromeet',
    featured: false,
    starType: 'support',
    category: 'Social',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Clerk'],
  },
]

export const featuredStars = [
  { id: 'star-a', projectSlug: 'virtualpytest', x: 50, y: 20 },
  { id: 'star-b', projectSlug: 'konto', x: 28, y: 28 },
  { id: 'star-c', projectSlug: 'clawsgames', x: 72, y: 28 },
]
