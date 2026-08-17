export const links = [
  { name: "Home", hash: "#home" },
  { name: "Why Quant", hash: "#why-quant" },
  { name: "Stack", hash: "#stack" },
  { name: "Projects", hash: "#projects" },
  { name: "Research", hash: "#research" },
  { name: "Contact", hash: "#contact" },
] as const;

export const heroTerminalLines = [
  { prompt: "$ whoami", output: "vikas-pal" },
  {
    prompt: "$ focus",
    output: "quant-development\nlow-latency-systems\nbackend-engineering",
  },
  { prompt: "$ stack", output: "C++ · Python · Java · Linux · SQL" },
  { prompt: "$ status", output: "OPEN_TO_QUANT_OPPORTUNITIES", isStatus: true },
];

export const engineeringMetrics = [
  { value: "800+", label: "Problems Solved", sub: "LeetCode" },
  { value: "#3", label: "Institute Rank", sub: "GeeksforGeeks" },
  { value: "C++ / Python / Java", label: "Primary Stack", sub: "Languages" },
  { value: "Backend + Systems", label: "Focus Area", sub: "Engineering" },
  { value: "CP", label: "Competitive Programming", sub: "Algorithms" },
  { value: "Research", label: "Experience", sub: "IIT Hyderabad" },
];

export const techStack = {
  systems: {
    label: "Systems",
    items: ["C++", "C", "Linux", "Git", "Docker", "Kubernetes"],
  },
  backend: {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Apache Kafka",
      "WebSocket",
    ],
  },
  dataQuant: {
    label: "Data / Quant",
    items: [
      "Python",
      "NumPy",
      "Pandas",
      "Algorithms",
      "Data Structures",
      "Statistical Computing",
    ],
  },
  mlResearch: {
    label: "ML / Research",
    items: [
      "TensorFlow",
      "OpenCV",
      "YOLO",
      "Machine Learning",
    ],
  },
  devtools: {
    label: "DevOps & Tools",
    items: ["Jenkins", "GitHub", "Firebase", "Figma"],
  },
};

export const projectsData = [
  {
    title: "Order Book Simulator",
    tagline: "C++ limit order book with price-time priority matching",
    problem:
      "Understanding how electronic exchanges process orders requires building a working order book that handles insertions, cancellations, and matching with minimal overhead.",
    approach:
      "Built a C++ order book engine using std::map for price levels and FIFO queues per level. Implements price-time priority matching with O(log N) insertions and O(1) best bid/ask retrieval.",
    engineering:
      "Designed templated OrderBook class with separate bid/ask trees, implemented cancel-by-ID via unordered_map lookup, built a matching loop that walks the book and generates fills. Memory-mapped I/O for order ingestion.",
    result:
      "Functional order book simulator processing synthetic order streams with spread tracking, fill reporting, and book depth visualization.",
    technologies: ["C++", "STL", "Data Structures", "Linux", "CMake"],
    githubLink: "https://github.com/vikas83pal",
  },
  {
    title: "Low-Latency Trading Engine",
    tagline: "Event-driven architecture with lock-free queues and kernel bypass concepts",
    problem:
      "High-frequency trading infrastructure demands nanosecond-level latency, requiring careful system design with zero-copy data paths and minimal kernel interaction.",
    approach:
      "Designed an event-driven trading engine in C++ with lock-free SPSC ring buffers for inter-thread communication, epoll-based network I/O, and CPU pinning for deterministic performance.",
    engineering:
      "Implemented SPSC lock-free queue using atomic operations, built a FIX protocol parser for order entry, designed a hot-path with zero heap allocations. Explored DPDK/kernel bypass concepts for network I/O.",
    result:
      "Conceptual trading engine demonstrating low-latency design patterns — lock-free data structures, cache-line alignment, and latency measurement infrastructure.",
    technologies: ["C++", "Linux", "epoll", "Lock-Free", "SPSC Queue", "Systems Programming"],
    githubLink: "https://github.com/vikas83pal",
  },
  {
    title: "Automated Script Generation",
    tagline: "AI-powered code generation using fine-tuned GPT-2",
    problem:
      "Generating contextual, domain-specific scripts from natural language prompts requires deep understanding of both language semantics and code structure.",
    approach:
      "Fine-tuned GPT-2 transformer model on curated script datasets. Built an inference pipeline with Flask backend and React frontend.",
    engineering:
      "Implemented tokenization pipeline, model fine-tuning loop, inference API with batch processing. Deployed on Hugging Face Spaces for scalable inference.",
    result:
      "Produces contextually relevant scripts from prompts. Real-time generation via REST API.",
    technologies: ["Python", "Flask", "Hugging Face", "Transformers", "React", "GPT-2"],
    githubLink: "https://github.com/vikas83pal/Automated-Script-Generation-ML",
  },
  {
    title: "Real-Time Chat Application",
    tagline: "WebSocket-based messaging with Spring Boot backend",
    problem:
      "Building a real-time communication platform supporting concurrent users and multi-room chat requires efficient connection management.",
    approach:
      "Used Spring Boot with STOMP over WebSocket for bidirectional real-time messaging. React frontend with room-based routing.",
    engineering:
      "Implemented WebSocket session management, message broker configuration, STOMP protocol handling, and concurrent user state management.",
    result:
      "Supports multi-room chats with real-time message delivery. Low-latency message propagation via WebSocket.",
    technologies: ["Spring Boot", "React", "WebSocket", "STOMP", "Java"],
    githubLink: "https://github.com/vikas83pal/chat-application",
  },
  {
    title: "Brain Tumor Detection System",
    tagline: "Deep learning object detection for medical imaging",
    problem:
      "Detecting brain tumors in MRI scans requires high-accuracy object detection to assist medical professionals.",
    approach:
      "Applied YOLO object detection architecture trained on medical brain scan datasets. Built preprocessing pipeline for image normalization.",
    engineering:
      "Implemented data augmentation pipeline, trained YOLO model with transfer learning, optimized inference for real-time detection.",
    result:
      "Achieved over 90% detection accuracy on test dataset.",
    technologies: ["Python", "YOLO", "Deep Learning", "OpenCV", "TensorFlow"],
    githubLink: "https://github.com/vikas83pal/Brain-Tumor-Detection",
  },
  {
    title: "JNTU Result Analyzer",
    tagline: "Automated academic result analysis with visualization",
    problem:
      "Analyzing university examination results across departments and semesters manually is time-consuming and error-prone.",
    approach:
      "Built a React + Redux application with REST API integration for automated result fetching, parsing, and performance visualization.",
    engineering:
      "Implemented state management with Redux, built data processing pipeline for result aggregation, and created visualization components.",
    result:
      "Automated analysis of student performance data with interactive charts and comparative analytics.",
    technologies: ["React", "Redux", "REST API", "JavaScript"],
    githubLink: "https://github.com/vikas83pal/jntuhresults",
  },
  {
    title: "DevMatch",
    tagline: "Developer collaboration platform with skill-based matching",
    problem:
      "Connecting developers with suitable open-source projects based on their skill profiles and interests.",
    approach:
      "Building a full-stack platform with Spring Boot backend, MongoDB for flexible document storage, and React frontend with recommendation logic.",
    engineering:
      "Designing skill-matching algorithms, building RESTful API endpoints, implementing user authentication and real-time messaging.",
    result:
      "In progress — core matching engine and API endpoints under development.",
    technologies: ["Spring Boot", "React", "MongoDB", "Java"],
    githubLink: "https://github.com/vikas83pal/DevMatch",
    status: "In Progress" as const,
  },
  {
    title: "Women Safety Application",
    tagline: "Emergency alert system with real-time geolocation",
    problem:
      "Providing a rapid emergency response mechanism with live location tracking for safety-critical situations.",
    approach:
      "Built an Android application in Java with Firebase for real-time database and authentication. Integrated geolocation APIs.",
    engineering:
      "Implemented background location tracking, Firebase real-time data sync, SMS trigger system, and emergency contact management.",
    result:
      "Sends live location and emergency details to pre-configured contacts with one-tap activation.",
    technologies: ["Java", "Firebase", "Android", "Geolocation"],
    githubLink: "https://github.com/vikas83pal/Women_Saftey_Application",
  },
];

export const quantLabItems = [
  {
    id: "orderbook",
    title: "Limit Order Book Simulator",
    description:
      "Interactive visualization of a limit order book with bid/ask price levels and depth.",
  },
  {
    id: "feed",
    title: "Market Data Feed Simulator",
    description:
      "Simulated tick-by-tick market data feed with timestamps, symbols, and volume.",
  },
  {
    id: "matching",
    title: "Matching Engine",
    description:
      "Order lifecycle from receipt through validation, matching, and execution.",
  },
  {
    id: "latency",
    title: "Latency Monitor",
    description:
      "Component-level latency breakdown for a trading pipeline.",
  },
  {
    id: "vwap",
    title: "VWAP / Moving Average",
    description:
      "Volume-weighted average price visualization with moving average overlay.",
  },
];

export const pipelineNodes = [
  "Market Data",
  "Parser",
  "Order Book",
  "Signal",
  "Risk Check",
  "Order Router",
];

export const systemArchNodes = [
  "Market Data",
  "Network Layer",
  "Parser",
  "Order Book",
  "Strategy",
  "Risk Engine",
  "Order Gateway",
];

export const engineeringConcepts = [
  "Cache locality",
  "Memory allocation",
  "CPU cycles",
  "Lock contention",
  "Network latency",
  "Concurrency",
  "Data structures",
  "System calls",
];

export const latencyBudget = [
  { label: "Network", width: 70, value: "~ms" },
  { label: "Parser", width: 30, value: "~μs" },
  { label: "Order Book", width: 20, value: "~μs" },
  { label: "Strategy", width: 40, value: "~μs" },
  { label: "Router", width: 20, value: "~μs" },
];

export const backendArchNodes = [
  "Client",
  "API Gateway",
  "Service Layer",
  "Kafka",
  "Processing Workers",
  "PostgreSQL",
];

export const backendConcepts = [
  "REST APIs",
  "Kafka",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "Spring Boot",
  "Node.js",
  "Authentication",
  "Observability",
];

export const algoCategories = [
  { name: "Arrays", level: 90 },
  { name: "Graphs", level: 75 },
  { name: "Trees", level: 85 },
  { name: "DP", level: 80 },
  { name: "Greedy", level: 85 },
  { name: "Bit Manipulation", level: 70 },
  { name: "Binary Search", level: 90 },
  { name: "Backtracking", level: 75 },
  { name: "Adv. Data Structures", level: 70 },
];

export const algoPlatforms = [
  { name: "LeetCode", stat: "800+" },
  { name: "Codeforces", stat: "Active" },
  { name: "GeeksforGeeks", stat: "#3 Institute" },
];

export const researchTimeline = [
  {
    year: "2024",
    title: "Robotics Research",
    institution: "IIT Hyderabad",
    area: "Computer Vision & Robotics",
    contribution:
      "Worked on real-time object detection systems using YOLO and OpenCV for robotic navigation and perception.",
    technologies: ["Python", "YOLO", "OpenCV", "ROS"],
    concepts: ["Object Detection", "Real-time Processing", "Computer Vision"],
  },
  {
    year: "2025",
    title: "Systems & Backend Engineering",
    institution: "Independent Research",
    area: "Backend Infrastructure & Distributed Systems",
    contribution:
      "Building distributed backend systems with Spring Boot, exploring message queues, and studying low-latency system design patterns.",
    technologies: ["Java", "Spring Boot", "Kafka", "Docker"],
    concepts: ["Distributed Systems", "Message Queues", "System Design"],
  },
  {
    year: "2026",
    title: "Systems + Quant Development Focus",
    institution: "Self-directed Study",
    area: "Quantitative Systems & C++ Engineering",
    contribution:
      "Focusing on C++ systems programming, algorithm optimization, and quantitative trading infrastructure concepts.",
    technologies: ["C++", "Python", "Linux", "Algorithms"],
    concepts: ["Low-latency Systems", "Order Book Design", "Performance Engineering"],
  },
];

export const experienceData = [
  {
    id: "01",
    role: "Research Intern",
    org: "IIT Hyderabad",
    duration: "2024",
    focus: "Computer Vision & Robotics",
    contribution:
      "Developed real-time object detection systems for robotic applications using deep learning architectures.",
  },
];

export const mindsetPrinciples = [
  {
    id: "01",
    title: "Measure before optimizing",
    description: "Profile first, then optimize the bottleneck — not the code you think is slow.",
  },
  {
    id: "02",
    title: "Understand the data structure",
    description: "The right data structure often matters more than the right algorithm.",
  },
  {
    id: "03",
    title: "Reduce unnecessary work",
    description: "The fastest code is code that never runs. Eliminate redundant computation.",
  },
  {
    id: "04",
    title: "Prefer predictable systems",
    description: "Deterministic behavior over clever abstractions. Predictability enables debugging.",
  },
  {
    id: "05",
    title: "Optimize only where it matters",
    description: "Premature optimization is the root of all evil — but knowing when to optimize is engineering.",
  },
];

export const terminalCommands: Record<string, { command: string; output: string }> = {
  home: {
    command: "$ whoami",
    output: "vikas-pal // quant-dev · systems · backend",
  },
  "why-quant": {
    command: "$ cat motivation.md",
    output: "algorithms × performance × markets",
  },
  stack: {
    command: "$ cat stack.json",
    output: '{ "primary": ["C++", "Java", "Python"] }',
  },
  projects: {
    command: "$ ls ./projects",
    output: "order-book  low-latency  chat-app  ...",
  },
  research: {
    command: "$ git log --oneline --research",
    output: "2024: IIT-H  2025: Systems  2026: Quant",
  },
  contact: {
    command: "$ ./connect.sh --with vikas",
    output: "READY — send a message",
  },
};

export const educationsData = [
  {
    title: "B.Tech in Computer Science & Engineering (Lateral Entry)",
    location: "JNTUH University College of Engineering, Sultanpur",
    description:
      "Currently pursuing B.Tech in CS&E. Final year — focusing on algorithms, backend systems, and quantitative development.",
    date: "2023 - Expected 2026",
  },
  {
    title: "Diploma in Computer Science & Engineering",
    location: "Quli Qutub Shah Government Polytechnic College, Hyderabad",
    description:
      "Completed Diploma in CS&E with CGPA of 9.37. Built foundational knowledge in programming, networks, and OS.",
    date: "2020 - 2023",
  },
  {
    title: "Secondary School Certificate (SSC)",
    location: "St. Ann's Grammar High School, Hyderabad",
    description: "Completed SSC with GPA of 10.0 in mathematics and science.",
    date: "2020",
  },
];
