export const social = {
  name: 'Yisak Asrat Indale', email: 'yisakasrat0@gmail.com', phone: '+251945404257',
  linkedin: 'https://www.linkedin.com/in/yisak-asrat-7454aa427/', telegram: 'https://t.me/Isaacium', github: 'https://github.com/y2man',
}
export interface Project { name: string; repo: string; live?: string; image?: string; featured?: boolean; summary: string; problem: string; features: string[]; tech: string[]; contribution: string }
// Add `live: 'https://...'` and `image: '/projects/x.png'` (file in /public/projects) to show those on the card.
export const projects: Project[] = [
  { name: 'RepoPilot', image: '/projects/repopilot.webp', repo: 'https://github.com/y2man/repopilot', featured: true,
    summary: 'An AI-powered repository intelligence workspace that helps developers understand and explore codebases.',
    problem: 'Understanding an unfamiliar codebase is slow; answers need to be grounded in the actual code.',
    features: ['ZIP upload and GitHub repository import with safety filtering', 'Tree-sitter and AST symbol extraction, line-aware chunking', 'pgvector hybrid retrieval with optional reranking', 'Groq-backed answers with file/line citations, streamed over SSE', 'Email login and GitHub OAuth linking, signed webhooks, Redis/Celery sync'],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Groq', 'Tree-sitter'],
    contribution: 'Designed and built the full stack: frontend, API, indexing pipeline and RAG workflow.' },
  { name: 'StayFinder', image: '/projects/stayfinder.webp', repo: 'https://github.com/y2man/Stay_Finder',
    summary: 'A full-stack accommodation marketplace for guests and hosts.',
    problem: 'Connecting travellers with hosts while preventing double bookings and keeping accounts secure.',
    features: ['Search, filters, sorting and property details', 'Server-calculated quotes with database-level overlap protection', 'Host listing management and booking approval', 'Favorites, reviews, messaging and notifications', 'Optional Stripe, SMTP and Groq AI assistant'],
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Argon2'], contribution: 'Built the frontend, backend API and database design.' },
  { name: 'Prism CRM', image: '/projects/prism-crm.webp', repo: 'https://github.com/y2man/Prism_CRM',
    summary: 'A sales workspace for managing clients, leads and tasks.',
    problem: 'Small teams need one place to track leads, follow-ups and pipeline progress.',
    features: ['Dashboard, client and lead records', 'Drag-and-drop pipeline', 'Tasks, communications and analytics', 'Per-account data ownership', 'CRM-aware AI assistant (Groq optional)'],
    tech: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'Groq'], contribution: 'Built the full application end to end.' },
  { name: 'TaskFlow', image: '/projects/taskflow.webp', repo: 'https://github.com/y2man/TaskFlow',
    summary: 'A responsive task manager with a clean interactive dashboard.',
    problem: 'Keeping daily work organised and visible without clutter.',
    features: ['Add, edit, delete and complete tasks', 'Filter by status and search by title', 'Dashboard stats for total, completed and pending', 'Persistent storage via localStorage'],
    tech: ['React', 'TypeScript', 'Vite', 'CSS'], contribution: 'Designed and built the application.' },
  { name: 'Isaac AI', image: '/projects/isaac-ai.webp', repo: 'https://github.com/y2man/Isaac-AI',
    summary: 'A full-stack AI chatbot with accounts and saved conversations.',
    problem: 'Chat with an AI assistant while keeping and managing conversation history.',
    features: ['Email/password registration and login', 'Groq-powered responses', 'Create, rename and delete conversations', 'Edit and resend, regenerate, export to TXT/PDF', 'Markdown rendering with code highlighting'],
    tech: ['Python', 'FastAPI', 'Groq', 'PostgreSQL', 'SQLAlchemy', 'JavaScript', 'Render'], contribution: 'Built the backend API and frontend.' },
]
export const skills: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  Backend: ['Python', 'FastAPI', 'REST APIs'],
  'Data & Infrastructure': ['PostgreSQL', 'pgvector', 'Redis', 'Neon'],
  'AI Applications': ['RAG', 'LLM integration', 'Groq API', 'Tree-sitter', 'AI application development'],
  'Tools & Deployment': ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Docker'],
}
export const services = ['Full-stack web applications', 'Frontend development with React', 'Backend APIs with Python & FastAPI', 'Database integration', 'AI integration into existing apps', 'AI-powered application development', 'RAG document & knowledge assistants', 'Third-party API integrations']
// Dates are intentionally blank — fill in when you want them shown.
export const journey = [
  { date: '', title: 'Started Software Engineering at AASTU', text: 'Building the foundations of computer science and engineering.' },
  { date: '', title: 'Learning by building', text: 'Shipped small apps like TaskFlow to practise React and TypeScript.' },
  { date: '', title: 'Full-stack platforms', text: 'StayFinder, Prism CRM and Isaac AI: APIs, auth and databases.' },
  { date: '', title: 'AI and RAG', text: 'RepoPilot: retrieval, embeddings and grounded answers over real code.' },
]
