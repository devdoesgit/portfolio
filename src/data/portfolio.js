export const profile = {
  firstName: 'Devesh',
  lastName: 'Rajput',
  role: 'Full-Stack Freelancer',
  availability: 'Available for client projects',
  email: 'deveshrajput978@gmail.com',
  phone: '+91 93592 69477',
  location: 'Palam, Delhi',
  resumeUrl: 'https://drive.google.com/file/d/1U4K7AwK4SlBBIVwLDbq_4Apzx6V9XnR7/view?usp=sharing',
  projectsUrl: 'https://t.co/EoSvgwHoWK',
  linkedinUrl: 'https://www.linkedin.com/in/devesh-rajput-a4513b17b/',
  summary:
    'I build full-stack web apps, backend systems, dashboards, automation tools, and AI-enabled products for founders, teams, and businesses that need reliable software shipped end to end.',
  stats: [
    { value: '2.8yr', label: 'Production engineering' },
    { value: 'End-to-end', label: 'Full-stack delivery' },
    { value: '10+', label: 'Hackathon wins' },
  ],
  socials: [
    { label: 'LinkedIn', value: 'devesh-rajput', href: 'https://www.linkedin.com/in/devesh-rajput-a4513b17b/' },
    { label: 'GitHub', value: 'github.com/devdoesgit', href: 'https://github.com/devdoesgit' },
    { label: 'LeetCode', value: 'leetcode.com/u/andrewflik', href: 'https://leetcode.com/u/andrewflik' },
    { label: 'CodeChef', value: 'codechef.com/users/andrewflik978', href: 'https://www.codechef.com/users/andrewflik978' },
  ],
};

export const projects = [
  {
    title: 'Kernel-Level Memory Logger',
    subtitle: 'Game Input Bug Analysis',
    featured: true,
    description:
      'Windows kernel driver that reads process memory to log user inputs and internal state changes, enabling precise reproduction of intermittent software bugs.',
    tags: ['C++', 'Windows Kernel', 'IOCTL', 'Systems'],
    links: [{ label: 'GitHub', href: 'https://github.com/devdoesgit/kml-v2' }],
    metrics: ['Hackathon winner: TCNJ 2021', 'Kernel driver', 'Safe IOCTL communication'],
    preview: '/assests/kernel_logger_preview.png',
  },
  {
    title: 'BORING.io',
    subtitle: 'Legal Document Simplifier',
    featured: true,
    best: true,
    description:
      'NLP-powered web app that analyzes privacy policies, terms of service, and EULAs, then turns complex legal text into simple user-friendly summaries.',
    tags: ['NLP', 'spaCy', 'BERT', 'Web App'],
    links: [{ label: 'GitHub', href: 'https://github.com/devdoesgit/BORING.io---Hack-2021' }],
    metrics: ['Multiple hackathon wins', '75% faster review time', 'Clause and risk extraction'],
    preview: '/assests/boring_preview.png',
  },

  {
    title: 'PayFlow',
    subtitle: 'Payment Flow Backend',
    description:
      'Backend-focused payment flow project for modeling transaction paths, checkout reliability, and payment state handling.',
    tags: ['Payments', 'Backend APIs', 'Reliability', 'Node.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/devdoesgit/payFlow' }],
    metrics: ['Payment flow design', 'Transaction state handling', 'Checkout reliability'],
    preview: '/assests/dashboard_payflow.png',
  },
  {
    title: 'Tatparya',
    subtitle: 'Digital Identity Intelligence Tool',
    best: true,
    description:
      'Backend system built for Raipur Police to support digital identity investigation by correlating public internet signals from comments and social activity across platforms.',
    tags: ['OSINT', 'Backend APIs', 'Search', 'Investigation Tools'],
    links: [{ label: 'GitHub', href: 'https://github.com/devdoesgit/tatparya-backend-v2' }],
    metrics: ['Public-signal correlation', 'Social account discovery', 'Law-enforcement use case'],
    photo: '/assests/tatparya_winner.JPG',
  },
];

export const skillGroups = [
  { category: 'Languages', skills: ['C/C++', 'JavaScript', 'Python', 'x86 Assembly'] },
  { category: 'Backend', skills: ['Node.js', 'TypeScript', 'Express', 'FastAPI', 'Fastify', 'Microservices'] },
  { category: 'Frontend', skills: ['React', 'Dashboards', 'Responsive UI', 'API Integration'] },
  { category: 'Data', skills: ['PostgreSQL', 'DynamoDB', 'MongoDB', 'Redis'] },
  { category: 'Messaging', skills: ['RabbitMQ', 'Async Pipelines', 'Retry Queues'] },
  { category: 'Infra', skills: ['Docker', 'AWS EC2', 'AWS Lambda'] },
  { category: 'Systems', skills: ['Linux Kernel Modules', 'Windows Development Kit', 'POSIX API', 'GCC/Clang'] },
  { category: 'AI / NLP', skills: ['LLM', 'GenAI', 'spaCy', 'BERT'] },
];

export const achievements = [
  {
    year: '2016',
    title: 'TCS IT Wiz',
    organization: 'Tata Consultancy Services',
    result: 'Regional Winner & Semi Finalist',
  },
  {
    year: '2018',
    title: 'Software Ideathon',
    organization: 'Chandigarh Group of Colleges',
    result: 'Winner',
  },
  {
    year: '2018',
    title: 'Software Hackathon',
    organization: 'Chandigarh Group of Colleges',
    result: 'Runner Up',
  },
  {
    year: '2018',
    title: 'Smart India Hackathon Hardware Edition',
    organization: '200+ ideas',
    result: 'Selected among Top 5 Teams',
  },
  {
    year: '2019',
    title: 'TATA Crucible Campus Edition',
    organization: 'Chandigarh',
    result: 'Rank 4',
  },
  {
    year: '2019',
    title: 'IEEE Software Hackathon',
    organization: 'Jaypee University',
    result: 'Rank 1, Winner',
  },
  {
    year: '2019',
    title: 'NEC Hackathon',
    organization: 'Gurugram, 450+ teams',
    result: 'Rank 7, Top 25 Selection',
  },
  {
    year: '2019',
    title: 'TOI Innovation Challenge',
    organization: 'Times of India',
    result: 'Top 10',
  },
  {
    year: '2019 / 2020',
    title: 'TCS CodeVita',
    organization: 'All India Ranking',
    result: 'AIR 154 and AIR 778',
  },
  {
    year: '2020',
    title: 'Smart India Hackathon',
    organization: 'SIH 2020',
    result: 'Top 5',
  },
  {
    year: '2020',
    title: 'Hack The Build',
    organization: 'IIT Jammu',
    result: 'Rank 4',
  },
  {
    year: '2020',
    title: 'International Dandy Hacks',
    organization: 'University of Rochester',
    result: 'Winner',
  },
  {
    year: '2020',
    title: 'Autumn Hacks',
    organization: 'NIT Rourkela',
    result: 'Winner',
  },
  {
    year: '2020',
    title: 'Hack CBS 3.0',
    organization: "DTU, India's largest student-run hackathon",
    result: 'Winner',
  },
  {
    year: '2021',
    title: 'HooHacks',
    organization: 'University of Virginia',
    result: 'Winner',
  },
  {
    year: '2021',
    title: 'Hack 2021',
    organization: 'HackerEarth',
    result: 'Winner',
  },
  {
    year: '2022',
    title: 'Hackmanthan',
    organization: 'Raipur, Chhattisgarh Police',
    result: 'Winner',
  },
];

export const education = [
  {
    school: 'Chandigarh University',
    location: 'Chandigarh, Punjab',
    degree: 'B.Tech, Computer Science',
    date: 'July 2018 - July 2022',
    detail: 'GPA: 8.06/10',
  },
];

export const experience = [
  {
    date: 'April 2022 - January 2025',
    company: 'MyGlamm | Good Glamm Group',
    location: 'Delhi, India',
    role: 'Software Developer Engineer I',
    bullets: [
      'Scaled a distributed notification microservice with async pipelines, retry queues, fallback schedulers, and idempotent message delivery for high-throughput event processing.',
      'Reduced payment order failures by about 25% by improving retry logic, timeout handling, and downstream dependency resilience in the checkout flow.',
      "Developed backend APIs for The Mom's Co campaign across India and the Middle East, supporting 10K+ user registrations and traffic surges from the associated YouTube series.",
      'Eliminated a production memory leak in backend services, reducing container memory usage by 70%+ and stabilizing services to 30+ day uptime.',
    ],
  },
];
