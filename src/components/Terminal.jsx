import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Portfolio data for terminal responses ─────────────────────── */
const PORTFOLIO = {
  name: 'Aakarsh Roy',
  role: 'MERN Stack Developer',
  email: 'aakarshroy03@gmail.com',
  github: 'https://github.com/aakarsh-roy',
  linkedin: 'https://www.linkedin.com/in/aakarsh-roy',
  skills: {
    frontend: ['React.js (90%)', 'HTML5 (95%)', 'CSS3 (90%)', 'JavaScript (88%)'],
    backend: ['Node.js (85%)', 'Express.js (85%)', 'Flask (75%)'],
    database: ['MongoDB (85%)', 'MySQL (75%)', 'PostgreSQL (70%)'],
    languages: ['Python (80%)', 'C++ (75%)', 'JavaScript (88%)'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'REST APIs', 'Socket.io', 'Tailwind CSS', 'npm', 'Vite'],
  },
  projects: [
    { name: 'Localify', tech: 'MERN Stack', desc: 'Local service provider discovery & booking platform', url: 'https://github.com/aakarsh-roy/Localify' },
    { name: 'BizFlow360', tech: 'MERN Stack', desc: 'Business Process Automation & KPI analytics', url: 'https://github.com/aakarsh-roy/BizFlow360' },
    { name: 'Chat-App', tech: 'MERN + Socket.io', desc: 'Real-time chat with authentication & persistence', url: 'https://github.com/aakarsh-roy/Chat-App' },
    { name: 'MovieFlix', tech: 'Python Flask', desc: 'Movie ticket booking platform', url: 'https://github.com/aakarsh-roy/movieflix' },
  ],
  experience: [
    { title: 'Full-Stack Development', period: '2024 - Present', type: 'Learning Journey' },
    { title: 'Academic Projects', period: '2022 - Present', type: 'College Work' },
    { title: 'Backend Development', period: '2024 - Present', type: 'Skill Development' },
  ],
};

/* ─── Color helpers for styled terminal output ──────────────────── */
const c = {
  green: (t) => `<span class="text-green-400">${t}</span>`,
  cyan: (t) => `<span class="text-cyan-400">${t}</span>`,
  yellow: (t) => `<span class="text-yellow-400">${t}</span>`,
  purple: (t) => `<span class="text-purple-400">${t}</span>`,
  red: (t) => `<span class="text-red-400">${t}</span>`,
  dim: (t) => `<span class="text-gray-500">${t}</span>`,
  bold: (t) => `<span class="font-bold text-white">${t}</span>`,
  indigo: (t) => `<span class="text-indigo-400">${t}</span>`,
  link: (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-indigo-400 underline hover:text-indigo-300">${label || url}</a>`,
};

/* ─── ASCII art banner (responsive) ─────────────────────────────── */
const BANNER_DESKTOP = `
${c.indigo('╔══════════════════════════════════════════════════════════╗')}
${c.indigo('║')}                                                          ${c.indigo('║')}
${c.indigo('║')}     ${c.bold('█████╗  █████╗ ██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗')}  
${c.indigo('║')}     ${c.bold('██╔══██╗██╔══██╗██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██║  ██║')}  
${c.indigo('║')}     ${c.bold('███████║███████║█████╔╝ ███████║██████╔╝███████╗███████║')}  
${c.indigo('║')}     ${c.bold('██╔══██║██╔══██║██╔═██╗ ██╔══██║██╔══██║╚════██║██╔══██║')}  
${c.indigo('║')}     ${c.bold('██║  ██║██║  ██║██║  ██╗██║  ██║██║  ██║███████║██║  ██║')}  
${c.indigo('║')}     ${c.bold('╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝')}  
${c.indigo('║')}                                                          ${c.indigo('║')}
${c.indigo('║')}        ${c.cyan('MERN Stack Developer  •  Full Stack Engineer')}        ${c.indigo('║')}
${c.indigo('║')}                                                          ${c.indigo('║')}
${c.indigo('╚══════════════════════════════════════════════════════════╝')}

${c.dim('Welcome to my interactive terminal portfolio!')}
${c.dim('Type')} ${c.green('help')} ${c.dim('to see available commands.')}
`;

const BANNER_MOBILE = `
${c.indigo('╔════════════════════════╗')}
${c.indigo('║')}  ${c.bold('AAKARSH ROY')}            ${c.indigo('║')}
${c.indigo('║')}  ${c.cyan('MERN Stack Developer')}   ${c.indigo('║')}
${c.indigo('╚════════════════════════╝')}

${c.dim('Welcome! Type')} ${c.green('help')} ${c.dim('for commands.')}
`;

const getBanner = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 640) return BANNER_MOBILE;
  return BANNER_DESKTOP;
};

/* ─── Command processing ────────────────────────────────────────── */
function processCommand(input, toggleTheme) {
  const cmd = input.trim().toLowerCase();
  const args = cmd.split(/\s+/);
  const base = args[0];

  if (!cmd) return '';

  switch (base) {
    case 'help':
      return `
${c.bold('Available Commands:')}
${c.dim('─────────────────────────────────────────────')}
  ${c.green('about')}        ${c.dim('—')} Who I am
  ${c.green('skills')}       ${c.dim('—')} Technical skill breakdown
  ${c.green('projects')}     ${c.dim('—')} Featured projects
  ${c.green('experience')}   ${c.dim('—')} My journey so far
  ${c.green('contact')}      ${c.dim('—')} How to reach me
  ${c.green('socials')}      ${c.dim('—')} Social media links
  ${c.green('tools')}        ${c.dim('—')} Developer tools I use
  ${c.green('resume')}       ${c.dim('—')} Open resume / CV
  ${c.green('theme')}        ${c.dim('—')} Toggle dark/light mode
  ${c.green('goto <section>')} ${c.dim('—')} Navigate to a section
  ${c.green('clear')}        ${c.dim('—')} Clear the terminal
  ${c.green('exit')}         ${c.dim('—')} Close the terminal
${c.dim('─────────────────────────────────────────────')}
  ${c.yellow('Easter eggs:')} ${c.dim('Try')} ${c.cyan('whoami')}, ${c.cyan('sudo')}, ${c.cyan('ls')}, ${c.cyan('cat')}, ${c.cyan('neofetch')}, ${c.cyan('hack')}
`;

    case 'about':
    case 'whoami':
      return `
${c.bold('┌─ About Me ──────────────────────────────────┐')}
│
│  ${c.cyan('Name:')}       ${PORTFOLIO.name}
│  ${c.cyan('Role:')}       ${PORTFOLIO.role}
│  ${c.cyan('Email:')}      ${PORTFOLIO.email}
│  ${c.cyan('Status:')}     ${c.green('● Available for opportunities')}
│
│  ${c.dim('Passionate full-stack developer specializing in')}
│  ${c.dim('the MERN stack. I build scalable, production-ready')}
│  ${c.dim('web applications with clean code and modern UIs.')}
│
${c.bold('└──────────────────────────────────────────────┘')}
`;

    case 'skills': {
      const { skills } = PORTFOLIO;
      const bar = (pct) => {
        const filled = Math.round(pct / 5);
        const empty = 20 - filled;
        return `${c.green('█'.repeat(filled))}${c.dim('░'.repeat(empty))} ${pct}%`;
      };
      const formatCategory = (name, list) =>
        `\n  ${c.yellow(`[ ${name} ]`)}\n` +
        list.map((s) => {
          const match = s.match(/^(.+?)\s*\((\d+)%\)$/);
          if (match) return `    ${c.cyan(match[1].padEnd(14))} ${bar(parseInt(match[2]))}`;
          return `    ${c.cyan(s)}`;
        }).join('\n');

      return `
${c.bold('┌─ Technical Skills ────────────────────────────┐')}
${formatCategory('Frontend', skills.frontend)}
${formatCategory('Backend', skills.backend)}
${formatCategory('Database', skills.database)}
${formatCategory('Languages', skills.languages)}

${c.bold('└───────────────────────────────────────────────┘')}
`;
    }

    case 'tools':
      return `
${c.bold('┌─ Developer Tools ─────────────────────────────┐')}
│
${PORTFOLIO.skills.tools.map((t) => `│  ${c.green('▸')} ${c.cyan(t)}`).join('\n')}
│
${c.bold('└───────────────────────────────────────────────┘')}
`;

    case 'projects': {
      const list = PORTFOLIO.projects
        .map(
          (p, i) =>
            `  ${c.yellow(`[${i + 1}]`)} ${c.bold(p.name)} ${c.dim(`(${p.tech})`)}\n      ${c.dim(p.desc)}\n      ${c.link(p.url, '→ View on GitHub')}`
        )
        .join('\n\n');
      return `
${c.bold('┌─ Featured Projects ───────────────────────────┐')}

${list}

${c.bold('└───────────────────────────────────────────────┘')}
`;
    }

    case 'experience': {
      const list = PORTFOLIO.experience
        .map(
          (e) =>
            `  ${c.green('▸')} ${c.bold(e.title)}\n    ${c.dim(e.type)} ${c.dim('•')} ${c.cyan(e.period)}`
        )
        .join('\n\n');
      return `
${c.bold('┌─ Experience ──────────────────────────────────┐')}

${list}

${c.bold('└───────────────────────────────────────────────┘')}
`;
    }

    case 'contact':
      return `
${c.bold('┌─ Contact Me ──────────────────────────────────┐')}
│
│  ${c.cyan('Email:')}     ${c.link(`mailto:${PORTFOLIO.email}`, PORTFOLIO.email)}
│  ${c.cyan('GitHub:')}    ${c.link(PORTFOLIO.github)}
│  ${c.cyan('LinkedIn:')}  ${c.link(PORTFOLIO.linkedin)}
│
│  ${c.dim('Or scroll to the contact section and send a message!')}
│  ${c.dim(`Type ${c.green('goto contact')} to jump there.`)}
│
${c.bold('└───────────────────────────────────────────────┘')}
`;

    case 'socials':
      return `
${c.bold('┌─ Social Links ────────────────────────────────┐')}
│
│  ${c.indigo('GitHub')}     ${c.link(PORTFOLIO.github)}
│  ${c.indigo('LinkedIn')}   ${c.link(PORTFOLIO.linkedin)}
│
${c.bold('└───────────────────────────────────────────────┘')}
`;

    case 'goto':
    case 'navigate': {
      const section = args[1];
      const valid = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      if (!section) return `${c.yellow('Usage:')} goto <section>\n${c.dim('Sections:')} ${valid.join(', ')}`;
      if (!valid.includes(section)) return `${c.red('Error:')} Unknown section "${section}"\n${c.dim('Valid sections:')} ${valid.join(', ')}`;
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return `${c.green('→')} Navigating to ${c.cyan(section)}...`;
    }

    case 'theme':
      if (toggleTheme) toggleTheme();
      return `${c.green('✓')} Theme toggled!`;

    case 'resume':
    case 'cv':
      return `${c.yellow('📄')} Resume download coming soon!\n${c.dim('In the meantime, check out my')} ${c.link(PORTFOLIO.linkedin, 'LinkedIn profile')}`;

    case 'clear':
      return '__CLEAR__';

    case 'exit':
    case 'quit':
    case 'q':
      return '__EXIT__';

    /* ─── Easter eggs ──────────────────────────────────────────── */
    case 'sudo':
      return `${c.red('Permission denied:')} Nice try! 😄\n${c.dim("You don't have root access to this portfolio.")}`;

    case 'ls':
    case 'dir':
      return `${c.cyan('about.md')}  ${c.cyan('skills.json')}  ${c.cyan('projects/')}  ${c.cyan('experience.log')}  ${c.green('README.md')}  ${c.yellow('.env')} ${c.dim('(hidden)')}`;

    case 'cat':
      if (args[1] === '.env') return `${c.yellow('SECRET_TALENT')}=${c.green('"Turning coffee into code"')}\n${c.yellow('BUGS_CREATED')}=${c.green('"Only features"')}\n${c.yellow('SLEEP_HOURS')}=${c.green('"undefined"')}`;
      if (args[1] === 'readme.md' || args[1] === 'README.md')
        return `${c.bold('# Aakarsh Roy')}\n\n${c.dim('> A developer who speaks fluent JavaScript and dreams in React components.')}\n\nThanks for exploring my terminal! 🚀`;
      return args[1] ? `${c.red('Error:')} Cannot read '${args[1]}'. Try ${c.cyan('cat .env')} or ${c.cyan('cat README.md')}` : `${c.yellow('Usage:')} cat <filename>`;

    case 'pwd':
      return c.cyan('/home/aakarsh/portfolio');

    case 'date':
      return c.cyan(new Date().toString());

    case 'echo':
      return args.slice(1).join(' ') || '';

    case 'neofetch': {
      const uptime = `${Math.floor(Math.random() * 365)}d ${Math.floor(Math.random() * 24)}h`;
      return `
  ${c.indigo('       _____')}          ${c.bold('aakarsh@portfolio')}
  ${c.indigo('      /     \\\\')}         ${c.dim('──────────────────')}
  ${c.indigo('     / () () \\\\')}        ${c.cyan('OS:')}        Portfolio v2.0
  ${c.indigo('    |   __   |')}        ${c.cyan('Host:')}      Vercel Cloud
  ${c.indigo('     \\\\  \\/  /')}         ${c.cyan('Kernel:')}    React 19.2.0
  ${c.indigo('      \\\\_____/')}          ${c.cyan('Uptime:')}    ${uptime}
  ${c.indigo('     /       \\\\')}        ${c.cyan('Shell:')}     Portfolio Terminal
  ${c.indigo('    /  ┌───┐  \\\\')}       ${c.cyan('DE:')}        Framer Motion
  ${c.indigo('   /   │ AR│   \\\\')}      ${c.cyan('Theme:')}     Dark / Glassmorphism
  ${c.indigo('  /    └───┘    \\\\')}     ${c.cyan('Terminal:')}  xterm.js-inspired
  ${c.indigo(' /_______________\\\\')}    ${c.cyan('Packages:')}  framer-motion, tailwind
`;
    }

    case 'hack':
    case 'matrix':
      return `
${c.green('Initializing hack sequence...')}
${c.green('███████████░░░░░░░░░░ 55%')}
${c.green('█████████████████░░░░ 85%')}
${c.green('████████████████████ 100%')}

${c.red('⚠ ACCESS DENIED')}
${c.dim("Just kidding — this portfolio is open source! 😄")}
${c.dim(`Check it out: ${c.link(PORTFOLIO.github)}`)}
`;

    case 'coffee':
      return `\n  ${c.yellow('    ( (')}          \n  ${c.yellow('     ) )')}        ${c.dim('Here, have some virtual coffee!')}\n  ${c.yellow('   ........')}      \n  ${c.yellow('   |      |]')}     ${c.dim('Fun fact: This portfolio was fueled')}\n  ${c.yellow("   \\\\      /")}      ${c.dim('by mass amounts of caffeine ☕')}\n  ${c.yellow("    `----'")}\n`;

    case 'hello':
    case 'hi':
    case 'hey':
      return `${c.green('Hey there! 👋')} Welcome to my portfolio terminal.\n${c.dim('Type')} ${c.green('help')} ${c.dim('to see what you can do.')}`;

    default:
      return `${c.red('Command not found:')} ${base}\n${c.dim('Type')} ${c.green('help')} ${c.dim('for a list of available commands.')}`;
  }
}

/* ─── Terminal Component ────────────────────────────────────────── */
const Terminal = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([{ type: 'output', content: getBanner() }]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);

  /* Keyboard shortcut: Ctrl+` or Escape to toggle/close */
  useEffect(() => {
    const handleGlobal = (e) => {
      if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobal);
    return () => window.removeEventListener('keydown', handleGlobal);
  }, [isOpen]);

  /* Auto-scroll to bottom when new output appears */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  /* Focus input when terminal opens */
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input.trim()) {
        setHistory((prev) => [...prev, { type: 'input', content: '' }]);
        return;
      }

      const output = processCommand(input, toggleTheme);

      if (output === '__CLEAR__') {
        setHistory([]);
        setInput('');
        setCmdHistory((prev) => [...prev, input]);
        setHistoryIdx(-1);
        return;
      }

      if (output === '__EXIT__') {
        setIsOpen(false);
        setInput('');
        return;
      }

      setHistory((prev) => [
        ...prev,
        { type: 'input', content: input },
        { type: 'output', content: output },
      ]);

      setCmdHistory((prev) => [...prev, input]);
      setHistoryIdx(-1);
      setInput('');
    },
    [input, toggleTheme]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (cmdHistory.length === 0) return;
        const newIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIdx === -1) return;
        const newIdx = historyIdx + 1;
        if (newIdx >= cmdHistory.length) {
          setHistoryIdx(-1);
          setInput('');
        } else {
          setHistoryIdx(newIdx);
          setInput(cmdHistory[newIdx]);
        }
      }
    },
    [cmdHistory, historyIdx]
  );

  return (
    <>
      {/* Floating terminal toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group ${
          isOpen ? 'scale-0 pointer-events-none' : ''
        } ${
          isDark
            ? 'bg-[#1a1a2e] border border-white/10 hover:border-indigo-500/50 hover:shadow-indigo-500/20 text-green-400'
            : 'bg-white border border-gray-200 hover:border-indigo-400 hover:shadow-indigo-200/30 text-indigo-600'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open terminal"
        title="Open interactive terminal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-2xl animate-ping bg-indigo-500/20 pointer-events-none" style={{ animationDuration: '3s' }} />
      </motion.button>

      {/* Terminal overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-end justify-center p-2 sm:p-4 md:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Terminal window */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={isMinimized ? { y: 'calc(100% - 44px)', opacity: 1 } : { y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl rounded-t-2xl overflow-hidden shadow-2xl shadow-black/40"
              style={{ height: isMinimized ? 'auto' : typeof window !== 'undefined' && window.innerWidth <= 640 ? 'min(85vh, 500px)' : 'min(80vh, 600px)' }}
            >
              {/* Title bar */}
              <div
                className={`flex items-center justify-between px-4 py-2.5 select-none ${
                  isDark ? 'bg-[#1a1a2e]' : 'bg-gray-100'
                }`}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" aria-label="Close" />
                  <button onClick={() => setIsMinimized(!isMinimized)} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" aria-label="Minimize" />
                  <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" aria-label="Maximize" />
                </div>

                {/* Title */}
                <span className={`text-xs font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  aakarsh@portfolio: ~
                </span>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className={`text-xs px-2 py-0.5 rounded transition-colors ${
                    isDark ? 'text-gray-500 hover:text-white hover:bg-white/10' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ESC
                </button>
              </div>

              {/* Terminal body */}
              {!isMinimized && (
                <div
                  ref={scrollRef}
                  onClick={() => inputRef.current?.focus()}
                  className={`overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed cursor-text ${
                    isDark ? 'bg-[#0a0a1a] text-gray-300' : 'bg-gray-900 text-gray-300'
                  }`}
                  style={{ height: 'calc(100% - 44px)', padding: window.innerWidth <= 640 ? '10px' : '16px' }}
                >
                  {/* History */}
                  {history.map((entry, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                      {entry.type === 'input' ? (
                        <div className="flex items-center gap-1">
                          <span className="text-green-400 font-bold">❯</span>
                          <span className="text-indigo-400">~</span>
                          <span className="text-gray-500 mr-2">$</span>
                          <span className="text-white">{entry.content}</span>
                        </div>
                      ) : (
                        <div
                          className="mb-1"
                          dangerouslySetInnerHTML={{ __html: entry.content }}
                        />
                      )}
                    </div>
                  ))}

                  {/* Input line */}
                  <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-1">
                    <span className="text-green-400 font-bold">❯</span>
                    <span className="text-indigo-400">~</span>
                    <span className="text-gray-500 mr-2">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent outline-none text-white caret-green-400 font-mono text-sm"
                      spellCheck={false}
                      autoComplete="off"
                      autoFocus
                    />
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
