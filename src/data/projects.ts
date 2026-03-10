import logoVirtualpytest from '../assets/logos/virtualpytest.png'
import logoKonto from '../assets/logos/konto.png'
import logoClawsgames from '../assets/logos/clawsgames.png'
import logoPikaboard from '../assets/logos/pikaboard.png'
import logoSoulsprite from '../assets/logos/soulsprite.png'
import logoAfromeet from '../assets/logos/afromeet.png'
import logoEdulia from '../assets/logos/edulia.png'
import logoKozy from '../assets/logos/kozy.png'
import logoClawbox from '../assets/logos/clawbox.png'
import logoVoicebox from '../assets/logos/voicebox.png'
import logoHeartclaws from '../assets/logos/heartclaws.png'
import logoRankingofclaws from '../assets/logos/rankingofclaws.png'
import logoEzplanner from '../assets/logos/ezplanner.png'

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
  logoImage: string
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
    logoImage: logoVirtualpytest,
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
    logoImage: logoKonto,
    repoUrl: 'https://github.com/angelstreet/kompta',
    liveUrl: 'https://konto.angelstreet.io',
    featured: true,
    featuredOrder: 2,
    starType: 'secondary',
    category: 'Finance',
    tech: ['React', 'TypeScript', 'Turso', 'Clerk', 'Tailwind'],
  },
  {
    slug: 'edulia',
    title: 'Edulia',
    shortDescription: 'Education management platform',
    fullDescription: 'Edulia is a comprehensive education platform for managing students, teachers, groups, and courses. Features include attendance tracking, grading, real-time notifications, and multi-tenant support.',
    logo: '🎓',
    logoImage: logoEdulia,
    repoUrl: 'https://github.com/angelstreet/edulia',
    liveUrl: 'https://edulia.angelstreet.io',
    featured: true,
    featuredOrder: 3,
    starType: 'secondary',
    category: 'SaaS',
    tech: ['React', 'Python', 'PostgreSQL', 'FastAPI'],
  },
  {
    slug: 'clawsgames',
    title: 'ClawsGames',
    shortDescription: 'AI-powered gaming leaderboard platform',
    fullDescription: 'ClawsGames is a competitive gaming platform with AI-powered matchmaking, real-time leaderboards, and detailed player analytics. Supports multiple game titles and provides deep insights into player performance.',
    logo: '🎮',
    logoImage: logoClawsgames,
    repoUrl: 'https://github.com/angelstreet/clawsgames',
    liveUrl: 'https://ranking.angelstreet.io',
    featured: false,
    starType: 'support',
    category: 'Gaming',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
  },
  {
    slug: 'rankingofclaws',
    title: 'RankingOfClaws',
    shortDescription: 'Competitive ranking & tournament system',
    fullDescription: 'RankingOfClaws is a ranking and tournament management system for competitive gaming communities. Features ELO-based rankings, bracket generation, and match history tracking.',
    logo: '🏆',
    logoImage: logoRankingofclaws,
    repoUrl: 'https://github.com/angelstreet/rankingofclaws',
    liveUrl: 'https://ranking.angelstreet.io',
    featured: false,
    starType: 'support',
    category: 'Gaming',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'kozy',
    title: 'Kozy',
    shortDescription: 'Smart home & property management',
    fullDescription: 'Kozy is a smart home and property management platform. Track rentals, manage tenants, handle maintenance requests, and monitor property performance all in one place.',
    logo: '🏠',
    logoImage: logoKozy,
    repoUrl: 'https://github.com/angelstreet/kozy',
    liveUrl: 'https://kozy.angelstreet.io',
    featured: false,
    starType: 'support',
    category: 'SaaS',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'clawbox',
    title: 'ClawBox',
    shortDescription: 'AI agent orchestration toolbox',
    fullDescription: 'ClawBox is an AI agent orchestration platform for managing, deploying, and monitoring AI agents. Features include agent lifecycle management, communication bridges, and task coordination.',
    logo: '📦',
    logoImage: logoClawbox,
    repoUrl: 'https://github.com/angelstreet/clawbox',
    featured: false,
    starType: 'support',
    category: 'SaaS',
    tech: ['TypeScript', 'Node.js', 'Docker', 'AI'],
  },
  {
    slug: 'voicebox',
    title: 'VoiceBox',
    shortDescription: 'AI voice assistant & TTS platform',
    fullDescription: 'VoiceBox is an AI-powered voice assistant and text-to-speech platform. Create custom voice agents, generate natural speech, and build voice-enabled applications.',
    logo: '🎙️',
    logoImage: logoVoicebox,
    repoUrl: 'https://github.com/angelstreet/voicebox',
    featured: false,
    starType: 'support',
    category: 'Creative',
    tech: ['React', 'Python', 'AI', 'WebSocket'],
  },
  {
    slug: 'heartclaws',
    title: 'HeartClaws',
    shortDescription: 'Social matching & community platform',
    fullDescription: 'HeartClaws is a social matching and community platform connecting people with shared interests. Features intelligent matching algorithms, community spaces, and real-time chat.',
    logo: '💜',
    logoImage: logoHeartclaws,
    repoUrl: 'https://github.com/angelstreet/heartclaws',
    featured: false,
    starType: 'support',
    category: 'Social',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'ezplanner',
    title: 'EzPlanner',
    shortDescription: 'Smart scheduling & planning tool',
    fullDescription: 'EzPlanner is an intelligent scheduling and planning tool that optimizes resource allocation, handles constraint-based scheduling, and provides visual timeline management.',
    logo: '📅',
    logoImage: logoEzplanner,
    repoUrl: 'https://github.com/angelstreet/ezplanner',
    liveUrl: 'https://ezplanner.angelstreet.io',
    featured: false,
    starType: 'support',
    category: 'Productivity',
    tech: ['React', 'TypeScript', 'Python', 'PostgreSQL'],
  },
  {
    slug: 'pikaboard',
    title: 'PikaBoard',
    shortDescription: 'Task management for AI teams',
    fullDescription: 'PikaBoard is a kanban-style task management platform designed specifically for AI agent teams. Features include automatic task distribution, progress tracking, and team coordination tools.',
    logo: '📋',
    logoImage: logoPikaboard,
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
    logoImage: logoSoulsprite,
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
    logoImage: logoAfromeet,
    repoUrl: 'https://github.com/angelstreet/afromeet',
    featured: false,
    starType: 'support',
    category: 'Social',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Clerk'],
  },
]

export const featuredStars = [
  { id: 'star-a', projectSlug: 'virtualpytest', x: 50, y: 18 },
  { id: 'star-b', projectSlug: 'konto', x: 25, y: 30 },
  { id: 'star-c', projectSlug: 'edulia', x: 75, y: 32 },
]
