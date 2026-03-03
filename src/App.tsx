import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, MessageCircle, ExternalLink, BookOpen, 
  MonitorPlay, Users, Layout, BrainCircuit, Cloud, Code2, 
  GraduationCap, Target, ChevronLeft, ChevronRight, X, ArrowRight
} from 'lucide-react';

import type { ReactNode } from 'react';

// --- CUSTOM ANIMATION COMPONENTS ---

// 1. Standard Reveal (Fade up) - Now animates every time!
interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // This resets the animation when you scroll away
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

// 2. 360-Degree Spin Reveal - Now animates every time!
const SpinReveal: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // This resets the animation when you scroll away
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transform: isVisible ? 'perspective(1000px) rotateY(360deg) translateY(0)' : 'perspective(1000px) rotateY(0deg) translateY(60px)',
        opacity: isVisible ? 1 : 0,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

// --- DATA ---
const PROJECT_POSTS = [
 {
    id: 'streamsphere',
    author: 'Mayur Acharya',
    bio: 'Full Stack Developer & Future SaaS Founder',
    time: '1d • Edited • 📄 Documentation',
    avatar: 'MA',
    content: (
      <div className="mt-2 space-y-4 md:space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">StreamSphere</h3>
            <p className="text-blue-400 font-medium text-[13px] md:text-sm mt-1">Fullstack OTT SaaS Platform</p>
          </div>
          <a href="https://streamsphere--mayurac123.replit.app/" target="_blank" rel="noreferrer" className="inline-flex items-center mt-2 sm:mt-3 justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-[13px] md:text-sm font-medium shadow-lg shadow-blue-900/20 w-full sm:w-auto">
            Live Platform <ExternalLink size={16} />
          </a>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-5 md:space-y-6">
          <section>
            <h4 className="text-white text-sm md:text-base font-semibold mb-2 flex items-center gap-2"><BookOpen size={16} className="text-purple-400"/> Project Overview</h4>
            <p className="text-slate-300 leading-relaxed text-[13px] md:text-sm">
              StreamSphere is a fully functional Over-The-Top (OTT) streaming ecosystem built from scratch as my final year project. It goes beyond standard web development by tackling real-world media engineering challenges, including optimizing data flow, managing storage costs, and ensuring a secure, seamless viewing experience.
            </p>
          </section>

          <section>
            <h4 className="text-white text-sm md:text-base font-semibold mb-3 flex items-center gap-2"><Layout size={16} className="text-emerald-400"/> Architecture & Stack</h4>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {['HTML/CSS/JS', 'Node.js', 'Express.js', 'MongoDB', 'Handlebars', 'AWS S3', 'FFmpeg', 'HLS'].map(tech => (
                <span key={tech} className="px-2 md:px-2.5 py-1 bg-slate-800/80 rounded-md text-[11px] md:text-xs text-slate-300 border border-slate-700">{tech}</span>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-white text-sm md:text-base font-semibold mb-3 flex items-center gap-2"><Code2 size={16} className="text-rose-400"/> Core Engineering Features</h4>
            <ul className="space-y-2 md:space-y-3 text-[13px] md:text-sm text-slate-300">
              <li className="flex gap-2.5 items-start">
                <span className="text-blue-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Adaptive Bitrate Streaming:</strong> Implemented HTTP Live Streaming (HLS) protocols and integrated FFmpeg for server-side video transcoding to ensure smooth playback across different network speeds.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-blue-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Cloud Infrastructure:</strong> Leveraged AWS S3 buckets for highly scalable, secure media storage and rapid content retrieval.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-blue-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Security & Access Control (ACL):</strong> Engineered robust role-based routing to strictly separate Admin management panels from User viewing dashboards. Implemented <strong>bcrypt</strong> for secure user password hashing and authentication.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-blue-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Interactive Features:</strong> Built a native chatbot for instant user support and an integrated analytics dashboard for tracking viewer engagement metrics.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    ),
    images: [
      '/streamsphere1.png',
      '/streamsphere2.png',
      '/streamsphere3.png',
      '/streamsphere4.png',
      '/streamsphere5.png',
      '/streamsphere6.png', 
    ]
  },
  {
    id: 'crm',
    author: 'Mayur Acharya',
    bio: 'Full Stack Developer & Future SaaS Founder',
    time: '3d • Edited • 📄 Documentation',
    avatar: 'MA',
    content: (
      <div className="mt-2 space-y-4 md:space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">B2B CRM System</h3>
            <p className="text-indigo-400 font-medium text-[13px] md:text-sm mt-1">Fullstack Internal Business Tool</p>
          </div>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center mt-2 sm:mt-3 justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-[13px] md:text-sm font-medium shadow-lg shadow-blue-900/20 w-full sm:w-auto">
            <Linkedin size={16} /> DM for Live Demo
          </a>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-5 md:space-y-6">
          <section>
            <h4 className="text-white text-sm md:text-base font-semibold mb-2 flex items-center gap-2"><BookOpen size={16} className="text-purple-400"/> Project Overview</h4>
            <p className="text-slate-300 leading-relaxed text-[13px] md:text-sm">
              A comprehensive B2B Customer Relationship Management (CRM) system designed to solve the chaos of scaling sales operations. This tool streamlines business workflows, improves team coordination, and provides secure, actionable data insights tailored for different levels of an organization.
            </p>
          </section>

          <section>
            <h4 className="text-white text-sm md:text-base font-semibold mb-3 flex items-center gap-2"><Layout size={16} className="text-emerald-400"/> Architecture & Stack</h4>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Node.js', 'SSR'].map(tech => (
                <span key={tech} className="px-2 md:px-2.5 py-1 bg-slate-800/80 rounded-md text-[11px] md:text-xs text-slate-300 border border-slate-700">{tech}</span>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-white text-sm md:text-base font-semibold mb-3 flex items-center gap-2"><Code2 size={16} className="text-rose-400"/> Core Engineering Features</h4>
            <ul className="space-y-2 md:space-y-3 text-[13px] md:text-sm text-slate-300">
              <li className="flex gap-2.5 items-start">
                <span className="text-indigo-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Role-Based Access Control (ACL):</strong> Engineered secure authorization routing distinguishing between Admin privileges (full oversight) and Employee dashboards (task-specific views).</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-indigo-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Performance Optimization (SSR):</strong> Utilized Next.js Server-Side Rendering for lightning-fast dashboard load times and highly secure internal API routes.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-indigo-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Scalable Data Modeling:</strong> Structured flexible MongoDB schemas capable of handling complex relationships between leads, sales pipelines, and internal user profiles.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-indigo-400 mt-0.5 text-xs">▹</span> 
                <span><strong>Modern UI/UX:</strong> Crafted a sleek, highly responsive interface using Tailwind CSS to ensure optimal usability across desktop and tablet environments.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    ),
    images: [
      '/crm1.png',
      '/crm2.png',
      '/crm3.png',
      '/crm4.png',
      '/crm5.png',
      '/crm6.png',
      '/crm7.png',
      '/crm8.png'
    ]
  }
];

const App: React.FC = () => {
  const [isVisionInView, setIsVisionInView] = useState(false);
  const visionRef = useRef<HTMLElement>(null);

  // Modal State for Image Slider
  const [activePost, setActivePost] = useState<typeof PROJECT_POSTS[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisionInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (visionRef.current) observer.observe(visionRef.current);
    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activePost]);

  // Modal Handlers
  const openModal = (post: typeof PROJECT_POSTS[0], imageIndex: number = 0) => {
    setActivePost(post);
    setCurrentImageIndex(imageIndex);
  };
  const closeModal = () => {
    setActivePost(null);
    setCurrentImageIndex(0);
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePost) setCurrentImageIndex((prev) => (prev + 1) % activePost.images.length);
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePost) setCurrentImageIndex((prev) => (prev - 1 + activePost.images.length) % activePost.images.length);
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-1000 ease-in-out font-sans ${isVisionInView ? 'bg-black text-slate-50' : 'bg-slate-950 text-slate-100'}`}>
      
      {/* --- TOP HEADER NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-center sm:justify-between items-center">
          
          {/* Logo - Centered on mobile, Left on desktop */}
          <div 
            className="text-2xl md:text-4xl text-transparent text-white font-bold cursor-pointer" 
            style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif" }}
          >
            MA.
          </div>
          
          {/* Desktop Links (Hidden on small screens) */}
          <div className="hidden sm:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">My Portfolio</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 pb-safe">
        <div className="px-6 py-4 flex justify-between items-center text-[11px] font-medium text-slate-300">
          <a href="#about" className="flex flex-col items-center gap-1 hover:text-blue-400 transition-colors">
            <Layout size={16}/> Portfolio
          </a>
          <a href="#projects" className="flex flex-col items-center gap-1 hover:text-blue-400 transition-colors">
            <MonitorPlay size={16}/> Projects
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </nav>

      {/* --- HERO & ABOUT ME --- */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16">
        <Reveal>
          <header className="mb-10 md:mb-12">
            <h1 className="text-2xl md:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 text-white text-center md:text-left">Mayur Acharya</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-sm md:text-xl text-blue-400 font-medium">
              <span>Fullstack Developer</span> • 
              <span>Software Developer</span> • 
              <span>Learning Agile</span> • 
              <span className="text-emerald-400">Aspirant PM</span>
            </div>
          </header>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl md:rounded-3xl mb-12 md:mb-16 shadow-lg leading-relaxed text-slate-300 text-sm md:text-lg backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white flex items-center gap-2">
              <Target className="text-blue-500" size={20} /> About Me
            </h2>
            
            <p className="mb-3 md:mb-4">
              I am a Full-Stack Developer experienced in building robust SaaS platforms, B2B CRM systems, and dynamic web applications. I actively leverage modern AI tools and advanced prompt engineering to dramatically accelerate the development process, allowing me to build highly professional, production-ready systems in record time.
            </p>
            
            <p className="mb-3 md:mb-4">
              Beyond the screen, I have a strong foundation in leadership and execution. Serving as an Admin for Zettabyte and a core member of the Cultural Committee at TRCAC, I successfully organized and managed large-scale college events. These experiences honed my ability to coordinate teams, manage resources, and deliver results under pressure.
            </p>
            
            <p className="mb-3 md:mb-4">
              This blend of technical execution and team leadership sparked my active pursuit of a Project Management (PM) role. I am continuously expanding my business acumen through LinkedIn Learning PM courses, combining my IT expertise with strategic problem-solving to bridge the gap between engineering complexities and real-world business needs.
            </p>
            
            <p className="font-semibold text-blue-300">
              Below is my roadmap for developing successful systems and businesses.
            </p>
          </div>
        </Reveal>

        {/* --- EDUCATION --- */}
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-2 md:gap-3">
            <GraduationCap className="text-blue-500" size={28}/> Education Journey
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          <Reveal delay={100} className="col-span-1 md:col-span-2 bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">BSc IT (3-Year Course)</h3>
            <p className="text-[13px] md:text-sm text-slate-400 mb-4 md:mb-6">Thakur Ramnarayan College of Arts and Commerce</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
              <div className="col-span-2 md:col-span-5 bg-blue-900/20 p-3 md:p-4 rounded-xl border border-blue-900/50 text-center mb-1 md:mb-2">
                <p className="text-[11px] md:text-sm text-blue-400 font-bold uppercase tracking-wider">Average CGPA</p>
                <p className="text-3xl md:text-4xl font-black text-blue-300 mt-1">8.60</p>
              </div>
              {[
                { sem: 'Sem 1', score: '9.20' }, { sem: 'Sem 2', score: '8.60' },
                { sem: 'Sem 4', score: '8.40' }, { sem: 'Sem 5', score: '8.00' },
                { sem: 'Sem 6', score: 'Loading ⏳' }
              ].map((item, i) => (
                <div key={i} className="p-2 md:p-3 rounded-xl text-center bg-slate-800/50 border border-slate-700/50">
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 mb-0.5 md:mb-1">{item.sem}</p>
                  <p className="text-sm md:text-base font-semibold text-white">{item.score}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 md:gap-6">
            <Reveal delay={200} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-lg flex-1">
              <h3 className="text-base md:text-lg font-bold text-white mb-1">HSC</h3>
              <p className="text-[11px] md:text-sm text-slate-400 mb-3 md:mb-4">Dalmia Lions College of Arts and Commerce</p>
              <div className="text-2xl md:text-3xl font-black text-emerald-400">67%</div>
            </Reveal>
            <Reveal delay={300} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-lg flex-1">
              <h3 className="text-base md:text-lg font-bold text-white mb-1">SSC</h3>
              <p className="text-[11px] md:text-sm text-slate-400 mb-3 md:mb-4">St George High School</p>
              <div className="text-2xl md:text-3xl font-black text-blue-400">81%</div>
            </Reveal>
          </div>
        </div>

        {/* --- CATEGORIZED SKILLS (WITH 360 SPIN ANIMATION) --- */}
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-2 md:gap-3">
            <Code2 className="text-emerald-500" size={28}/> Technical Arsenal
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          
          <SpinReveal delay={100} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl md:rounded-3xl h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Layout size={18} className="text-blue-400"/> Skills
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'MERN Stack', 'Node.js', 'Express.js','Agile Methodology', 'GitHub', 'MongoDB'].map(s => (
                <span key={s} className="px-2 md:px-3 py-1 bg-slate-800 rounded-md text-[11px] md:text-sm text-slate-300 border border-slate-700">{s}</span>
              ))}
            </div>
          </SpinReveal>

          <SpinReveal delay={300} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl md:rounded-3xl h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Cloud size={18} className="text-sky-400"/> Cloud
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-md text-[11px] md:text-sm text-slate-300 border border-slate-700">AWS S3 Buckets</span>
              <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-md text-[11px] md:text-sm text-slate-300 border border-slate-700">Blogger Site</span>
            </div>
          </SpinReveal>

         <SpinReveal delay={500} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl md:rounded-3xl h-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Code2 size={18} className="text-rose-400"/> Python Skills
            </h3>
            
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
              <span className="px-2 md:px-3 py-1 bg-slate-800 rounded-md text-[11px] md:text-sm text-slate-300 border border-slate-700">Python Projects</span>
            </div>
            
            <div className="mt-auto flex flex-wrap gap-1.5 md:gap-2">
              {[
                { label: "Hash Mapping", url: "https://www.linkedin.com/posts/mayuracharya123_unlocking-the-power-of-dsa-hash-map-project-activity-7268204466112241665-Ahj-" },
                { label: "Anagrams", url: "https://www.linkedin.com/posts/mayuracharya123_project-grouping-anagrams-with-python-activity-7268206501083709441-QIiA" },
                { label: "Doubly Linked List", url: "https://www.linkedin.com/posts/mayuracharya123_stepping-into-data-structures-doubly-activity-7268199165841592320-ujsb" },
                { label: "Dice Game", url: "https://www.linkedin.com/posts/mayuracharya123_mini-project-dice-game-in-python-activity-7268194642368614400-w-tF" },
                { label: "Cafe Management", url: "https://www.linkedin.com/posts/mayuracharya123_mini-project-caf%C3%A9-management-system-activity-7268190731717025792-BKXb" }
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-slate-800/80 rounded-md text-[10px] md:text-xs text-slate-300 border border-slate-700 transition-all hover:bg-slate-700 hover:text-white hover:border-slate-500 group"
                >
                  {link.label}
                  <ExternalLink size={10} className="opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all" />
                </a>
              ))}
            </div>
          </SpinReveal>

          <SpinReveal delay={700} className="bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl md:rounded-3xl h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <BrainCircuit size={18} className="text-purple-400"/> AI & Design Tools
            </h3>
            <ul className="space-y-2 md:space-y-3 text-[11px] md:text-sm text-slate-400">
              <li><strong className="text-slate-200">Gemini:</strong> Developing site & ideas</li>
              <li><strong className="text-slate-200">ChatGPT:</strong> Business research</li>
              <li><strong className="text-slate-200">Claude AI:</strong> Building project logic</li>
              <li><strong className="text-slate-200">WixStudio / Figma:</strong> UI/UX Design</li>
            </ul>
          </SpinReveal>

        </div>

        {/* --- PROJECTS PORTFOLIO (LINKEDIN STYLE) --- */}
        <div id="projects" className="pt-4 md:pt-8 mb-6 md:mb-8">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3 justify-center md:justify-start">
              <MonitorPlay className="text-rose-500" size={28}/> Projects Built
            </h2>
          </Reveal>
        </div>

        <div className="w-full mx-auto space-y-8 md:space-y-12 mb-16 md:mb-20">
          {PROJECT_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 150}>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                
                {/* Post Content */}
                <div className="px-4 md:px-5 py-4 text-[13px] md:text-sm text-slate-300 leading-relaxed">
                  {post.content}
                </div>

                {/* Image Grid */}
                {post.images.length > 0 && (
                  <div 
                    className={`grid gap-0.5 md:gap-1 cursor-pointer ${
                      post.images.length === 1 ? 'grid-cols-1' : 
                      post.images.length === 2 ? 'grid-cols-2' : 
                      post.images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'
                    }`} 
                    onClick={() => openModal(post, 0)}
                  >
                    {post.images.slice(0, 4).map((img, idx) => (
                      <div 
                        key={idx} 
                        className={`aspect-[4/3] bg-slate-800 relative group overflow-hidden ${
                          post.images.length === 3 && idx === 0 ? 'col-span-2' : ''
                        }`}
                      >
                        <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                        
                        {/* Overlay if there are more than 4 images */}
                        {idx === 3 && post.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white font-bold text-xl md:text-3xl">
                            +{post.images.length - 4}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </Reveal>
          ))}
        </div>

        {/* --- ASPIRING PM SECTION --- */}
        <Reveal>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] mb-16 md:mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white flex items-center gap-2 md:gap-3">
                  <Target className="text-emerald-500" size={24}/> Aspiring Product Manager
                </h2>
                <p className="text-[13px] md:text-lg text-slate-300 mb-4 md:mb-6">
                  My dream is to transition into a PM role where I can utilize my technical background to make strategic product decisions. I am actively expanding my skill set to bridge development and business needs.
                </p>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-[12px] md:text-sm text-slate-400">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-emerald-500 mt-0.5">✔</span>
                    <span>Currently learning advanced PM skills through comprehensive <strong>LinkedIn Learning</strong> courses.</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="text-emerald-500 mt-0.5">✔</span>
                    <span>Passed PM Assessment from <strong>Learntube</strong> with a score of over 70%.</span>
                  </li>
                </ul>
              </div>
              
              {/* Assessment Certificate Placeholder */}
              <div className="flex flex-col justify-center">
                <div className="bg-slate-800/80 border border-slate-700 p-2 md:p-4 rounded-xl md:rounded-2xl w-full aspect-[4/3] flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-slate-800 transition-colors overflow-hidden">
                   <img src="/assesment.jpg" alt="PM Assessment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- CONNECT & CONTRIBUTE SECTION (GITHUB & LINKEDIN) --- */}
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-2 md:gap-3">
            <Users className="text-blue-500" size={28}/> Connect & Contribute
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
            
            {/* GitHub Card */}
            <a 
              href="https://github.com/your-github-username" 
              target="_blank" 
              rel="noreferrer" 
              className="group block bg-slate-900/50 border border-slate-800 hover:border-slate-600 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg transition-all hover:bg-slate-800/50"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-slate-800 rounded-lg md:rounded-xl group-hover:bg-slate-700 transition-colors">
                  <Github size={24} className="text-white md:w-7 md:h-7" />
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white transition-colors transform group-hover:translate-x-1" size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">GitHub Repository</h3>
              <p className="text-[12px] md:text-sm text-slate-400">
                Explore my open-source contributions, algorithm implementations, and the raw source code behind my full-stack projects. Let's collaborate!
              </p>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/mayuracharya123/" 
              target="_blank" 
              rel="noreferrer" 
              className="group block bg-slate-900/50 border border-slate-800 hover:border-blue-900/50 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg transition-all hover:bg-blue-900/10"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-blue-900/20 rounded-lg md:rounded-xl group-hover:bg-blue-600 transition-colors">
                  <Linkedin size={24} className="text-blue-500 group-hover:text-white transition-colors md:w-7 md:h-7" />
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">Professional Network</h3>
              <p className="text-[12px] md:text-sm text-slate-400">
                Connect with me professionally. I frequently share insights on Product Management, SaaS development, and event management experiences.
              </p>
            </a>

          </div>
        </Reveal>
      </section>

      {/* --- ROADMAP / VISION (Triggers Darkest Mode) --- */}
      <section ref={visionRef} className="max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-32 border-t border-slate-800 pb-32 md:pb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-6 text-white leading-tight">My Vision: Building Systems for Businesses</h2>
          <p className="text-sm md:text-xl text-slate-400">Goal: To build scalable software solutions that drive real business value.</p>
        </div>

        <div className="relative border-l-2 border-blue-500/30 ml-3 md:ml-0 space-y-10 md:space-y-12 pb-8 md:pb-12">
          {[
            {
              phase: 'Phase 1', title: 'Learn the Real Problems',
              points: ['Start by working closely with businesses.', 'Understand how they manage leads, sales, and operations.', 'Solve problems manually if needed.'],
              focus: 'Learning & delivering real value.'
            },
            {
              phase: 'Phase 2', title: 'Build Reliable Systems',
              points: ['Create structured CRM and automation systems that improve:', '→ Lead tracking & Follow-ups', '→ Reporting & Team coordination', 'Refine processes. Make them simple. Make them effective.'],
              focus: 'Consistency & measurable results.'
            },
            {
              phase: 'Phase 3', title: 'Productize the Process',
              points: ['Convert proven systems into a structured SaaS solution.', 'Make it easy to use. Industry-focused. Outcome-driven.', 'Not just software — a working growth system.'],
              focus: 'Scalability without complexity.'
            },
            {
              phase: 'Phase 4', title: 'Long-Term Direction',
              points: ['Build a stable B2B technology company that:', '→ Solves practical business problems', '→ Creates recurring value', '→ Runs on systems, not chaos', 'Slow growth. Strong foundation. Sustainable scale.'],
              focus: 'Long-term sustainability.'
            }
          ].map((step, index) => (
            <div 
              key={index} 
              className={`pl-6 md:pl-8 relative transition-all duration-1000 ease-out transform ${isVisionInView ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full -left-[7px] md:-left-[9px] top-1 md:top-1.5 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-400 font-bold tracking-widest text-[10px] md:text-sm uppercase">{step.phase}</span>
              <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2 mb-2 md:mb-4 text-white">{step.title}</h3>
              <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4 text-[13px] md:text-sm text-slate-400">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-[11px] md:text-sm">
                Focus: {step.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="max-w-4xl mx-auto px-4 md:px-6 pb-24 md:py-24 text-center border-t border-slate-900 pt-16">
        <div className={`transition-all duration-1000 delay-1000 ${isVisionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 leading-tight">
            Thanks, you have reached the end.
          </h2>
          <p className="text-sm md:text-xl mb-8 md:mb-12 text-slate-400">
            People who are aligned to my vision, let's connect.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
            <a 
              href="https://www.linkedin.com/in/mayuracharya123/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] text-sm md:text-base"

            >
              <Linkedin size={18} className="md:w-5 md:h-5"/> Connect on LinkedIn
            </a>
            <a 
              href="https://wa.me/918369787919" 
              target="_blank"
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-[0_0_15px_rgba(5,150,105,0.3)] hover:shadow-[0_0_25px_rgba(5,150,105,0.6)] text-sm md:text-base"
            >
              <MessageCircle size={18} className="md:w-5 md:h-5"/> WhatsApp Me
            </a>
          </div>
          <p className="mt-8 md:mt-6 font-mono text-xs md:text-sm text-slate-500">+91 8369787919</p>
        </div>
      </footer>

      {/* --- IMAGE MODAL / SLIDER OVERLAY --- */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-0 md:p-8" onClick={closeModal}>
          
          <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-slate-300 z-[60] bg-black/50 p-2 rounded-full">
            <X size={24} className="md:w-7 md:h-7"/>
          </button>

          <div className="w-full h-full max-w-7xl md:max-h-[90vh] bg-slate-900 md:rounded-xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Left Side: Image Slider */}
            <div className="flex-1 bg-black relative flex items-center justify-center group h-full">
              <img 
                src={activePost.images[currentImageIndex]} 
                alt={`Slide ${currentImageIndex}`} 
                className="max-w-full max-h-full object-contain transition-opacity duration-300"
              />
              
              <button onClick={prevImage} className="absolute left-2 md:left-4 p-1.5 md:p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
                <ChevronLeft size={24} className="md:w-8 md:h-8"/>
              </button>
              
              <button onClick={nextImage} className="absolute right-2 md:right-4 p-1.5 md:p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
                <ChevronRight size={24} className="md:w-8 md:h-8"/>
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 md:gap-2">
                {activePost.images.map((_, idx) => (
                  <div key={idx} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default App;
