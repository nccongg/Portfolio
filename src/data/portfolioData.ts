export interface ExperienceItem {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: string[];
  techStack?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  isThesis?: boolean;
  duration?: string;
  description: string;
  keyContributions?: string[];
  stack: string[];
  image?: string;
  github?: string;
  live?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  program?: string;
  location: string;
  duration: string;
  highlights?: string[];
}

export interface HonorItem {
  title: string;
  award: string;
  year: string;
  description?: string;
}

export const personalInfo = {
  name: 'Nguyen Chi Cong',
  shortName: 'Cong .',
  title: 'Software Engineer',
  roleHeadline: 'Early-career Software Engineer & CS Honors Student',
  bio: 'Computer Science student in the Honors Program at University of Science - VNUHCM. Experienced in building production-ready mobile and web applications with React Native, React, C/C++, and modern backend APIs.',
  longBio:
    'I am an early-career software engineer passionate about crafting robust, scalable, and user-centric applications. With hands-on internship experience across mobile engineering (React Native, iOS/Android) and systems software (C++/Qt, ASR/TTS, Linux cross-compilation), I combine solid computer science fundamentals with practical production workflows.',
  email: 'chicong442004@gmail.com',
  phone: '(+84) 973 371 776',
  location: 'Ho Chi Minh City, Vietnam',
  cvFileName: 'NguyenChiCong_CV.pdf',
  cvPath: 'pdfs/NguyenChiCong.pdf',
  socialLinks: {
    github: 'https://github.com/nccongg',
    linkedin: 'https://www.linkedin.com/in/ch%C3%AD-c%C3%B4ng-nguy%E1%BB%85n-817b83318/',
    facebook: 'https://www.facebook.com/profile.php?id=100020378081627',
  },
};

export const navSections = [
  { name: 'Home', id: 'hero', route: '/' },
  { name: 'About', id: 'about', route: '/#about' },
  { name: 'Experience', id: 'experience', route: '/#experience' },
  { name: 'Projects', id: 'projects', route: '/#projects' },
  { name: 'Skills', id: 'skills', route: '/#skills' },
  { name: 'Education', id: 'education', route: '/#education' },
  { name: 'Contact', id: 'contact', route: '/#contact' },
];

export const verifiedStats = [
  {
    count: 2,
    suffix: '',
    title: 'Industry Internships',
    subtext: 'Tiger Tribe (Heineken) & NAISCORP',
  },
  {
    count: 1,
    suffix: '+',
    title: 'Years Experience',
    subtext: 'Mobile & systems development',
  },
  {
    count: 2,
    suffix: '',
    title: 'National & Fellow Awards',
    subtext: 'Informatics Olympiad & Vallet Fellowship',
  },
  {
    count: 15,
    suffix: '+',
    title: 'Technologies Mastered',
    subtext: 'React Native, C++, TypeScript, Python',
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Tiger Tribe (a Heineken Company)',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Mobile Developer Intern',
    duration: 'Jan 2026 – Present',
    techStack: ['React Native', 'TypeScript', 'Redux / RTK Query', 'ONNX Runtime', 'Firebase', 'iOS / Android', 'TestFlight'],
    bullets: [
      'Developed and maintained production features for an internal mobile application used by Heineken employees across Android and iOS.',
      'Developed PlayLab, a React Native application from the ground up, including project setup, feature development, and Android/iOS build and release workflows.',
      'Developed a universal camera scanning interface with horizontal/vertical guiding frames and real-time feedback, integrating a pre-trained ONNX model for real-time object recognition.',
      'Implemented Redux and RTK Query for state management, API caching, and data synchronization, optimizing camera frame processing and application data flow.',
      'Managed Firebase and App Store Connect configurations and release workflows for Hustle and PlayLab, including iOS distribution through TestFlight.',
    ],
  },
  {
    company: 'NAISCORP., JSC',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Software Engineer Intern',
    duration: 'Jul 2025 – Dec 2025',
    techStack: ['Java', 'Kotlin', 'React Native', 'C++', 'QML / Qt', 'WebSocket', 'UDP', 'Linux aarch64', 'WordPress CMS'],
    bullets: [
      'Developed features for the Keenon Robot Android 6.0 application using Java/Kotlin and React Native, including UI development and WebSocket-based TTS integration.',
      'Researched and integrated Vietnamese ASR into the Boshi Robot Android 10 application using Java, replacing the default Chinese ASR solution.',
      'Built the Qt-based HealthMate Robot application using C++/QML, integrating local and cloud TTS/ASR through WebSocket and UDP, and set up the aarch64 Linux cross-compilation environment.',
      'Contributed to the development of the PVI.com website using ReactJS and WordPress CMS, implementing Figma-based UI pages, integrating RESTful APIs, and migrating hardcoded content to CMS-managed data.',
    ],
  },
  {
    company: 'Decentralized Applied Cryptography Lab, HCMUS',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Mobile UI Developer Intern',
    duration: 'Jul 2024 – Oct 2024',
    techStack: ['React Native', 'Mobile UI', 'Cryptography Research'],
    bullets: [
      'Researched and prototyped decentralized mobile UI flows for applied cryptography use-cases at the university laboratory.',
      'Collaborated with student researchers to design responsive, user-friendly client interfaces.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'thesis-ai-testing',
    title: 'AI-Powered Automated Web Testing System',
    category: 'Full-stack & AI Systems',
    isThesis: true,
    duration: 'Jan 2026 – Aug 2026',
    description:
      'Graduation thesis project: An end-to-end automated web testing platform that leverages AI agent workflows to autonomously generate, execute, and validate testing scenarios against dynamic web applications.',
    keyContributions: [
      'Architected end-to-end platform with React/Vite frontend, Node.js/Express backend, and PostgreSQL database.',
      'Engineered Python Agent Worker integrated with Playwright and Google Gemini for automated test scenario generation and live execution.',
      'Designed real-time test execution observability and detailed diagnostic reporting.',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Python', 'Playwright', 'Gemini AI'],
    github: 'https://github.com/nccongg',
  },
  {
    id: 'coffeetime',
    title: 'CoffeeTime',
    category: 'Mobile Application',
    isThesis: false,
    duration: '2024',
    description:
      'A modern mobile user interface for a coffee ordering app built with React Native and Expo. Features responsive and intuitive screens including home, coffee menu, customized order details, and user profiles.',
    keyContributions: [
      'Implemented clean component architecture using UI Kitten design system.',
      'Structured seamless multi-screen user navigation with React Navigation.',
      'Focused on smooth animations and delightful mobile user experience.',
    ],
    stack: ['React Native', 'Expo', 'UI Kitten', 'React Navigation', 'TypeScript'],
    image: 'imgs/CoffeeApp.png',
    github: 'https://github.com/nccongg/CoffeeTime',
  },
  {
    id: 'sokoban-ui',
    title: 'Sokoban Puzzle Solver & Visualizer',
    category: 'AI & Algorithms',
    isThesis: false,
    duration: '2024',
    description:
      'An intelligent Sokoban puzzle solver implementing classic state-space search algorithms (BFS, DFS, UCS, A*) paired with an interactive Python GUI for real-time visualization.',
    keyContributions: [
      'Implemented heuristic search techniques (Manhattan distance, deadlock detection) for state-space optimization.',
      'Built a graphical user interface to visualize step-by-step agent solution paths.',
    ],
    stack: ['Python', 'Search Algorithms (A*, BFS, DFS, UCS)', 'GUI Visualization'],
    image: 'imgs/Skonaban.png',
    github: 'https://github.com/nccongg/Sokoban-UI',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core programming and scripting languages used in production & university coursework',
    skills: [
      { name: 'JavaScript / TypeScript' },
      { name: 'Java / Kotlin' },
      { name: 'Python' },
      { name: 'C / C++' },
      { name: 'HTML5 / CSS3 / SCSS' },
    ],
  },
  {
    category: 'Frameworks & Platforms',
    description: 'Modern libraries and environments for mobile, web, and desktop development',
    skills: [
      { name: 'React Native' },
      { name: 'React' },
      { name: 'Node.js / Express' },
      { name: 'Qt / QML' },
      { name: 'Vite' },
    ],
  },
  {
    category: 'State, APIs & Architecture',
    description: 'Data flow, synchronization, and communication protocols',
    skills: [
      { name: 'Redux / RTK Query' },
      { name: 'RESTful APIs' },
      { name: 'WebSocket & UDP' },
      { name: 'ONNX Runtime (AI/ML)' },
      { name: 'Playwright (E2E Testing)' },
    ],
  },
  {
    category: 'Databases',
    description: 'Relational and document storage solutions',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    category: 'Tools & DevOps',
    description: 'Developer tooling, CI/CD, and deployment infrastructure',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Docker' },
      { name: 'Firebase' },
      { name: 'App Store Connect / TestFlight' },
      { name: 'Linux (aarch64 cross-compile)' },
      { name: 'Vercel / Azure' },
      { name: 'Jira' },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    institution: 'University of Science - VNUHCM',
    degree: 'Bachelor of Science in Computer Science',
    program: 'Honors Program in Computer Science',
    location: 'Ho Chi Minh City, Vietnam',
    duration: '2022 – Expected 2026',
    highlights: [
      'Selected for the prestigious Honors Program for exceptional academic entrance performance.',
      'Focus on Software Engineering, Data Structures, Algorithms, Distributed Systems, and AI.',
      'English Proficiency: TOEIC LR 665, SW 240.',
    ],
  },
  {
    institution: 'Quang Trung High School for the Gifted',
    degree: 'High School Diploma (Informatics Specialized)',
    location: 'Binh Phuoc / Ho Chi Minh City, Vietnam',
    duration: '2019 – 2022',
    highlights: [
      'Specialized in competitive programming and algorithmic problem solving.',
      'Recipient of Vallet Fellowship for top achieving STEM students.',
    ],
  },
];

export const honorsAndAwards: HonorItem[] = [
  {
    title: 'Vietnam National Olympiad in Informatics',
    award: 'Consolation Prize',
    year: '2022',
    description: 'Nationwide competition recognizing top high school students in algorithmic problem solving and programming.',
  },
  {
    title: 'Vallet Fellowship',
    award: 'Fellowship Award for Excellent Students',
    year: '2022',
    description: 'Prestigious fellowship established by Prof. Odon Vallet honoring outstanding students in Vietnam.',
  },
  {
    title: 'Honors Program Selection',
    award: 'University of Science - VNUHCM',
    year: '2022',
    description: 'Admitted into the elite CS Honors Program reserved for top-ranking candidates.',
  },
];
