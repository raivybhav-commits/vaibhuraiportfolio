import type { Project, Experience, SkillCategory, Achievement, Certification, EducationInfo } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "VAIBHAV RAI A V",
  title: "AI & Machine Learning Engineer | Python Developer | AI Enthusiast",
  headline: "Building Intelligent Solutions Through Artificial Intelligence.",
  shortBio: "I'm an AI & ML undergraduate passionate about building intelligent applications, machine learning systems, and real-world AI-powered solutions. I enjoy transforming ideas into practical technology through innovation, experimentation, and development.",
  fullAbout: "I'm Vaibhav Rai A V, an Artificial Intelligence and Machine Learning engineering undergraduate at Yenepoya Institute of Technology, Karnataka. I specialize in developing intelligent applications, machine learning pipelines, computer vision systems, and Generative AI solutions.\n\nWith experience in AI engineering, software development, and technical leadership, I enjoy solving practical problems and building technology that creates meaningful impact.",
  email: "vaibhurai3@gmail.com",
  phone: "+91 9539755923",
  location: "Kerala, India",
  college: "Yenepoya Institute of Technology, Karnataka",
  degree: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
  cgpa: "9.36",
  githubPlaceholder: "https://github.com/vybhurai", // verified GitHub profile
  linkedinPlaceholder: "https://linkedin.com/in/vaibhav-rai-av", // placeholder link
  resumeFile: "/Vaibhav_Rai_Resume.pdf",
};

export const HIGHLIGHT_STATS = [
  {
    label: "CGPA",
    value: "9.36",
    subtext: "Academic Distinction",
    highlight: true,
  },
  {
    label: "VTU Branch Topper",
    value: "1st, 2nd & 3rd",
    subtext: "Consecutive Academic Years",
    highlight: true,
  },
  {
    label: "Featured AI Projects",
    value: "4+",
    subtext: "End-to-End AI/ML Systems",
    highlight: false,
  },
  {
    label: "Leadership Roles",
    value: "3+",
    subtext: "Symposiums & Communities",
    highlight: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    iconName: "Code",
    description: "Core algorithmic languages for machine learning, data structures, and production backends.",
    skills: [
      { name: "Python", level: "Expert", category: "Programming", popular: true },
      { name: "SQL", level: "Advanced", category: "Programming", popular: true },
      { name: "R", level: "Intermediate", category: "Programming" },
      { name: "Julia", level: "Working Knowledge", category: "Programming" },
    ],
  },
  {
    title: "AI & Machine Learning",
    iconName: "Brain",
    description: "Theoretical and applied machine learning, deep neural architectures, and generative modeling.",
    skills: [
      { name: "Artificial Intelligence", level: "Advanced", category: "AI & ML", popular: true },
      { name: "Machine Learning", level: "Advanced", category: "AI & ML", popular: true },
      { name: "Deep Learning", level: "Advanced", category: "AI & ML", popular: true },
      { name: "NLP", level: "Advanced", category: "AI & ML", popular: true },
      { name: "Generative AI", level: "Advanced", category: "AI & ML", popular: true },
    ],
  },
  {
    title: "Computer Vision",
    iconName: "Eye",
    description: "State-of-the-art visual detection, image preprocessing, and real-time spatial analysis.",
    skills: [
      { name: "YOLOv8", level: "Advanced", category: "Computer Vision", popular: true },
      { name: "OpenCV", level: "Advanced", category: "Computer Vision", popular: true },
      { name: "Image Preprocessing", level: "Advanced", category: "Computer Vision" },
      { name: "Image Augmentation", level: "Advanced", category: "Computer Vision" },
    ],
  },
  {
    title: "AI & LLM Technologies",
    iconName: "Cpu",
    description: "Modern Large Language Model orchestration, retrieval augmentation, and enterprise APIs.",
    skills: [
      { name: "Gemini", level: "Advanced", category: "AI & LLMs", popular: true },
      { name: "OpenAI API", level: "Advanced", category: "AI & LLMs", popular: true },
      { name: "Vertex AI", level: "Intermediate", category: "AI & LLMs" },
      { name: "RAG", level: "Advanced", category: "AI & LLMs", popular: true },
      { name: "Prompt Engineering", level: "Advanced", category: "AI & LLMs" },
    ],
  },
  {
    title: "Data Analytics",
    iconName: "BarChart3",
    description: "Data exploration, statistical analysis, feature engineering, and executive dashboards.",
    skills: [
      { name: "Pandas", level: "Advanced", category: "Analytics", popular: true },
      { name: "NumPy", level: "Advanced", category: "Analytics", popular: true },
      { name: "Matplotlib", level: "Advanced", category: "Analytics" },
      { name: "Tableau", level: "Intermediate", category: "Analytics" },
      { name: "Power BI", level: "Intermediate", category: "Analytics" },
      { name: "Plotly", level: "Advanced", category: "Analytics" },
      { name: "Excel", level: "Advanced", category: "Analytics" },
    ],
  },
  {
    title: "Development & Cloud",
    iconName: "Cloud",
    description: "Application prototyping, microservices, version control, and cloud-native experimentation.",
    skills: [
      { name: "Flask", level: "Intermediate", category: "Dev & Cloud" },
      { name: "Streamlit", level: "Advanced", category: "Dev & Cloud", popular: true },
      { name: "Google Cloud", level: "Intermediate", category: "Dev & Cloud" },
      { name: "Git", level: "Advanced", category: "Dev & Cloud", popular: true },
      { name: "GitHub", level: "Advanced", category: "Dev & Cloud", popular: true },
      { name: "VS Code", level: "Advanced", category: "Dev & Cloud" },
      { name: "Jupyter Notebook", level: "Advanced", category: "Dev & Cloud" },
      { name: "Google Colab", level: "Advanced", category: "Dev & Cloud" },
      { name: "Zapier", level: "Intermediate", category: "Dev & Cloud" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "autorickshaw-detection",
    title: "Autorickshaw Detection & Behavior Analysis",
    number: "01",
    category: "Computer Vision",
    technologies: ["YOLOv8", "Python", "Computer Vision", "OpenCV", "Object Tracking"],
    description: "Trained a custom YOLOv8 model to detect autorickshaws and analyze their movement behavior in traffic.",
    achievement: "95%+ detection accuracy through dataset refinement.",
    problem: "Urban traffic in India features high density, chaotic lane-switching, and diverse lighting conditions where generic vehicle detection models struggle to identify small three-wheeled vehicles reliably.",
    solution: "Engineered a domain-specific dataset with custom annotations, synthetic edge augmentations, and fine-tuned YOLOv8 backbone to track trajectory coordinates, stop-and-go frequency, and erratic lane deviations.",
    architecture: [
      "Custom Data Collection & Multi-Angle Video Frame Extraction",
      "Bounding Box Annotation with Albumentations pipeline",
      "YOLOv8 Darknet Backbone Transfer Learning & Fine-tuning",
      "Centroid Tracking & Movement Trajectory Vector Computation",
      "Inference Telemetry Dashboard with Real-Time Video Overlays"
    ],
    metrics: [
      { label: "Detection Accuracy", value: "95%+" },
      { label: "Inference Latency", value: "< 24ms/frame" },
      { label: "Dataset Scale", value: "3,500+ Annotated Frames" },
      { label: "Recall Rate", value: "94.2%" }
    ],
    visualType: "autorickshaw",
    githubPlaceholder: "https://github.com/vaibhav-rai-av/autorickshaw-behavior-yolo",
    demoPlaceholder: "https://autorickshaw-analysis-demo.placeholder.app",
  },
  {
    id: "low-latency-audio-rag",
    title: "Low-Latency Audio RAG System – Pace Wisdom",
    number: "02",
    category: "Generative AI & RAG",
    technologies: ["Python", "RAG", "Speech-to-Text", "Vector Retrieval", "Text-to-Speech", "Embeddings"],
    description: "Designed and deployed a real-time audio Retrieval-Augmented Generation pipeline for sub-second voice query processing.",
    achievement: "Achieved sub-second end-to-end voice query turnaround.",
    problem: "Traditional voice assistants suffer from noticeable latency stacks: speech recognition, text retrieval, LLM token streaming, and voice synthesis often exceed 3–5 seconds, breaking real-time conversational immersion.",
    solution: "Constructed an ultra-fast asynchronous streaming pipeline connecting fast neural Speech-to-Text, local cosine-vector retrieval over targeted embeddings, and chunked Text-to-Speech audio streaming.",
    architecture: [
      "Audio Stream Ingestion with Voice Activity Detection (VAD)",
      "Streaming Speech-to-Text Transcription Chunking",
      "High-Dimensional Vector Store Semantic Similarity Search",
      "Context-Augmented LLM Prompt Injection & Streaming Generation",
      "Low-Latency Neural TTS Audio Buffer Streaming to Client"
    ],
    metrics: [
      { label: "End-to-End Latency", value: "< 980ms" },
      { label: "STT Accuracy", value: "96.4% WER" },
      { label: "Vector Search Time", value: "< 45ms" },
      { label: "Streaming Protocol", value: "Full-Duplex Audio" }
    ],
    visualType: "rag-audio",
    githubPlaceholder: "https://github.com/vaibhav-rai-av/low-latency-audio-rag",
    demoPlaceholder: "https://audio-rag-system.placeholder.app",
  },
  {
    id: "lingoleap",
    title: "LingoLeap – AI-Based Multilingual Learning Platform",
    number: "03",
    category: "Generative AI & RAG",
    technologies: ["Vertex AI", "Gemini", "NLP", "RAG", "Python", "Streamlit"],
    description: "Built an AI-native language learning platform with real-time speaking assessment, grammar correction, gamified tasks, multilingual support, and LSRW-based progression.",
    achievement: "Comprehensive LSRW progression with real-time diagnostic evaluation.",
    problem: "Standard language apps rely on static multiple-choice drills that fail to evaluate authentic spoken fluency, context-aware grammar feedback, and personalized multilingual guidance across listening, speaking, reading, and writing (LSRW).",
    solution: "Engineered an intelligent conversational platform powered by Google Cloud Vertex AI and Gemini with adaptive prompt chains, dynamic RAG for cultural idioms, real-time phonetic scoring, and interactive gamified task feedback.",
    architecture: [
      "LSRW (Listening, Speaking, Reading, Writing) Modular Core",
      "Vertex AI & Gemini Pro Semantic Evaluation Pipeline",
      "Dynamic Cultural & Grammatical Knowledge Base (RAG)",
      "Acoustic Audio Prosody & Fluency Scoring Engine",
      "Gamified Adaptive Mastery Engine with Diagnostic Feedback"
    ],
    metrics: [
      { label: "LSRW Coverage", value: "100% Comprehensive" },
      { label: "Grammar Feedback", value: "Instant Semantic Fixes" },
      { label: "Supported Languages", value: "Multilingual Engine" },
      { label: "Gamified Tasks", value: "Adaptive Difficulty" }
    ],
    visualType: "lingoleap",
    githubPlaceholder: "https://github.com/vaibhav-rai-av/lingoleap-ai",
    demoPlaceholder: "https://lingoleap-ai.placeholder.app",
  },
  {
    id: "phishing-email-detection",
    title: "Phishing Email Detection System",
    number: "04",
    category: "Cybersecurity",
    technologies: ["Python", "Machine Learning", "Cybersecurity", "NLP", "Feature Engineering"],
    description: "Developed a phishing detection tool that evaluates email metadata, URLs, and urgency cues to generate clear risk scores.",
    achievement: "Multi-layered heuristic + ML risk scoring with granular threat signals.",
    problem: "Social engineering and spear-phishing attacks bypass traditional keyword filters by using obfuscated domains, psychological urgency triggers, and spoofed headers.",
    solution: "Implemented an end-to-end classifier integrating NLP semantic urgency scoring, structural header metadata audits, and URL entropy inspection into a weighted risk score engine with explainable threat indicators.",
    architecture: [
      "MIME & RFC Email Header Extraction & Authentication Check",
      "URL Lexical, Entropy & Domain Reputation Heuristics",
      "NLP Sentiment & Urgency Cue Vectorization (TF-IDF / Embeddings)",
      "Ensemble Machine Learning Classification (Random Forest / Gradient Boost)",
      "Explainable Threat Score Generation & Highlighted Risk Badges"
    ],
    metrics: [
      { label: "Classification F1", value: "97.8%" },
      { label: "False Positive Rate", value: "< 1.2%" },
      { label: "Analyzed Signals", value: "35+ Threat Vectors" },
      { label: "Inference Speed", value: "Real-time Scoring" }
    ],
    visualType: "phishing",
    githubPlaceholder: "https://github.com/vaibhav-rai-av/phishing-email-detection",
    demoPlaceholder: "https://phishing-detector.placeholder.app",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "President",
    organization: "Yen Artificia",
    period: "September 2026 – Present",
    location: "Yenepoya Institute of Technology",
    type: "Leadership",
    highlights: [
      "Leading the premier Artificial Intelligence and Machine Learning student community across technical initiatives, workshops, and student mentorship.",
      "Spearheaded and organized PINNACLE, the 3rd International-Level Technical Symposium featuring international delegates, technical papers, and industry keynotes.",
      "Directly coordinated the flagship Project Expo, Tech Fest, and the flagship QUORIA AI Summit.",
      "Designed and hosted hands-on workshops on Applied Machine Learning, Computer Vision, and Generative AI workflows."
    ],
    skills: ["Strategic Leadership", "Community Building", "Event Organization", "Technical Mentorship", "AI Roadmaps"],
  },
  {
    id: "exp-2",
    role: "AI & Software Development Intern",
    organization: "Kyeal Wellness",
    period: "September 2026 – Present",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Engineering AI-powered applications and scalable software modules for digital wellness solutions.",
      "Contributing to full-cycle technical development, REST API integrations, and algorithmic software workflows.",
      "Experimenting with intelligent user personalization and data processing pipelines."
    ],
    skills: ["Python", "AI Integration", "Software Architecture", "API Development", "Workflow Automation"],
  },
  {
    id: "exp-3",
    role: "AI Engineering & Operations Intern",
    organization: "MAC25AI",
    period: "October 2026 – Present",
    location: "Hybrid",
    type: "Internship",
    highlights: [
      "Gaining hands-on practical experience in AI engineering and production model operations.",
      "Contributing to AI operational workflows, performance benchmarking, and system reliability tests.",
      "Collaborating on data preparation, model deployment validations, and pipeline monitoring."
    ],
    skills: ["AI Operations", "ML Pipelines", "Performance Benchmarking", "Data Quality", "System Testing"],
  },
  {
    id: "exp-4",
    role: "Treasurer-cum-Secretary",
    organization: "YenFinity",
    period: "May 2026 – Present",
    location: "Yenepoya Institute of Technology",
    type: "Management",
    highlights: [
      "Managed organizational and financial governance, budgeting, and fund allocation for high-impact campus events.",
      "Organized and executed FusionVerse 1.0 Hackathon for Pre-University (PU) students to inspire upcoming developers.",
      "Coordinated cross-functional student initiatives, sponsor relations, and event logistics."
    ],
    skills: ["Financial Budgeting", "Executive Governance", "Hackathon Organization", "Cross-Team Coordination"],
  },
  {
    id: "exp-5",
    role: "Vice President",
    organization: "Yen Artificia",
    period: "September 2025 – September 2026",
    location: "Yenepoya Institute of Technology",
    type: "Leadership",
    highlights: [
      "Served as the Main Coordinator for Matrix Fusion 4.0, a premier 24-hour National-Level Hackathon with nationwide student participation.",
      "Coordinated competitive technical tracks, code evaluations, and 24-hour mentor sessions.",
      "Supported and facilitated AI technical workshops, coding bootcamps, and developer community sessions."
    ],
    skills: ["Hackathon Direction", "Technical Event Coordination", "Operations Management", "Team Leadership"],
  },
];

export const PINNACLE_DETAILS = {
  title: "PINNACLE – 3rd International-Level Technical Symposium",
  role: "President & Event Organizer – Yen Artificia",
  institution: "Yenepoya Institute of Technology",
  overview: "Led the end-to-end strategic planning, organization, and execution of a major international-level technical symposium uniting students, academics, and industry innovators.",
  components: [
    {
      title: "PROJECT EXPO",
      tagline: "Innovation & Solution Showcase",
      description: "A premier platform for students to showcase innovative projects, hardware/software prototypes, and research-backed technical solutions evaluated by industry experts.",
      icon: "Lightbulb",
      features: ["Hardware & AI Software Prototypes", "Industry Jury Evaluation", "Live Demo Stages", "Seed Grant & Innovation Awards"]
    },
    {
      title: "TECH FEST",
      tagline: "High-Octane Technical Arena",
      description: "Fast-paced technical competitions, algorithmic coding challenges, technical quizzes, and engaging technology activities designed to test problem-solving under pressure.",
      icon: "Code2",
      features: ["Algorithmic Speed Coding", "Web & App Design Sprints", "Debugging Battles", "Gamified Technical Challenges"]
    },
    {
      title: "QUORIA – AI SUMMIT",
      tagline: "Next-Gen Intelligence Conference",
      description: "An elite AI summit focused on next-generation artificial intelligence, enterprise machine learning innovation, research trends, and industry perspectives.",
      icon: "Sparkles",
      features: ["Keynotes on Foundation Models & GenAI", "Enterprise AI Architecture Talks", "Panel on Ethical AI & Systems", "Research Paper Tracks"]
    }
  ],
  stats: [
    { label: "Scale", value: "International Level" },
    { label: "Pillars", value: "3 Flagship Tracks" },
    { label: "Community", value: "Hundreds of Innovators" },
    { label: "Role", value: "President & Lead Organizer" }
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "VTU Branch Topper",
    subtitle: "1st, 2nd & 3rd Year (Consistent Academic Excellence)",
    type: "academic",
    badge: "Branch Rank #1",
    year: "Consecutive Years",
    description: "Achieved the #1 Branch Topper position across Visvesvaraya Technological University (VTU) affiliated curriculum across 1st, 2nd, and 3rd years with a cumulative CGPA of 9.36."
  },
  {
    id: "ach-2",
    title: "ISTE State-Level Hackathon",
    subtitle: "Top 4 College Mini-Hackathon Qualification",
    type: "hackathon",
    badge: "Top 4 Finalist",
    year: "State Level",
    description: "Qualified in the prestigious Top 4 colleges in the Indian Society for Technical Education (ISTE) State-Level Mini-Hackathon after rigorous technical evaluation."
  },
  {
    id: "ach-3",
    title: "ISTE 2025 – AI Learning Platform",
    subtitle: "Innovative Educational Engineering",
    type: "hackathon",
    badge: "Platform Developer",
    year: "2025",
    description: "Developed and showcased an intelligent AI learning platform engineered to enhance adaptive education methodologies and technical training."
  },
  {
    id: "ach-4",
    title: "Anveshan 2025 – IEEE Bangalore Section",
    subtitle: "Hackathon Participation & Engineering Innovation",
    type: "hackathon",
    badge: "IEEE Anveshan",
    year: "2025",
    description: "Selected and participated in Anveshan 2025 hosted by the IEEE Bangalore Section, developing competitive technical solutions for real-world engineering problems."
  },
  {
    id: "ach-5",
    title: "Community Leadership – President of Yen Artificia",
    subtitle: "Empowering AI/ML Student Community",
    type: "leadership",
    badge: "President",
    year: "2026 – Present",
    description: "Directing student initiatives, international symposiums, research study groups, and hackathons to foster artificial intelligence innovation."
  },
  {
    id: "ach-6",
    title: "Main Organizer – Matrix Fusion 4.0",
    subtitle: "24-Hour National-Level Hackathon",
    type: "leadership",
    badge: "Main Coordinator",
    year: "2025 – 2026",
    description: "Orchestrated logistics, technical problem statements, judging panels, and 24-hour continuous mentorship for a major national hackathon."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "AI Infrastructure & Operations Framework",
    issuer: "NVIDIA",
    year: "Certified",
    badge: "NVIDIA Deep Learning & Compute",
    skillsCovered: ["GPU Architecture", "AI Workloads", "Cluster Infrastructure", "Accelerated Computing"]
  },
  {
    id: "cert-2",
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    year: "Certified",
    badge: "Database & Document Modeling",
    skillsCovered: ["NoSQL Schemas", "Aggregation Pipelines", "Indexing", "Query Optimization"]
  },
  {
    id: "cert-3",
    title: "GenAI Buildathon",
    issuer: "Nextwave & OpenAI",
    year: "Certified",
    badge: "Generative AI Engineering",
    skillsCovered: ["OpenAI API", "Prompt Engineering", "LLM Workflows", "Vector Embeddings"]
  },
  {
    id: "cert-4",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    year: "Certified",
    badge: "Cloud AI Foundations",
    skillsCovered: ["Vertex AI", "Diffusion & Transformer Models", "Responsible AI", "Foundation Models"]
  }
];

export const EDUCATION_DATA: EducationInfo = {
  degree: "Bachelor of Engineering",
  major: "Artificial Intelligence and Machine Learning",
  institution: "Yenepoya Institute of Technology",
  location: "Moodbidri, Karnataka, India",
  cgpa: "9.36",
  honors: [
    "VTU Branch Topper – 1st Year",
    "VTU Branch Topper – 2nd Year",
    "VTU Branch Topper – 3rd Year"
  ],
  coursework: [
    "Design & Analysis of Algorithms",
    "Deep Learning & Neural Networks",
    "Computer Vision & Pattern Recognition",
    "Natural Language Processing",
    "Operating Systems & Distributed Systems",
    "Database Management Systems (SQL & NoSQL)",
    "Probability, Statistics & Linear Algebra",
    "Software Engineering & Agile Methodologies"
  ]
};
