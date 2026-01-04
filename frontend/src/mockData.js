// Mock Data File
// This file contains all the placeholder data used in the portfolio
// Replace these with your actual information

export const personalInfo = {
  name: "Dheeraj",
  fullName: "Kannemadugu Dheeraj",
  title: "AI/ML Engineer • Full-Stack Developer • Startup Builder",
  tagline: "Building intelligent systems & future products",
  email: "hello@dheeraj.com",
  phone: "+1 (234) 567-890",
  location: "Available for remote work worldwide",
  
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  
  // Replace with your actual photo URL or path
  photo: null, // Currently using placeholder 'D' letter
  
  bio: "I'm a passionate technologist specializing in artificial intelligence and full-stack development. With a strong foundation in machine learning algorithms and modern web technologies, I create innovative solutions that bridge the gap between complex AI systems and user-friendly applications. My approach combines technical excellence with product thinking to build systems that make a real impact."
};

export const expertise = [
  {
    title: 'AI/ML',
    description: 'Building intelligent systems with deep learning, neural networks, and advanced algorithms'
  },
  {
    title: 'Full-Stack Development',
    description: 'Creating scalable web applications with modern frameworks and technologies'
  },
  {
    title: 'Startups',
    description: 'Transforming ideas into market-ready products with lean and agile methodologies'
  },
  {
    title: 'Research',
    description: 'Exploring cutting-edge technologies and innovative solutions to complex problems'
  }
];

export const projects = [
  {
    title: 'OxyWalls',
    description: 'AI-powered wallpaper generation platform using advanced neural networks for creating stunning, personalized backgrounds',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    github: '#',
    live: '#'
  },
  {
    title: 'GigNavi',
    description: 'Smart navigation system for gig workers optimizing routes and maximizing earnings through ML-based predictions',
    tech: ['React Native', 'Node.js', 'MongoDB', 'ML'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: '#',
    live: '#'
  },
  {
    title: 'SafeStep',
    description: 'Real-time safety monitoring application using computer vision and IoT sensors for workplace hazard detection',
    tech: ['OpenCV', 'PyTorch', 'Flask', 'IoT'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    github: '#',
    live: '#'
  },
  {
    title: 'Eco Packaging',
    description: 'Sustainable packaging solution platform connecting businesses with eco-friendly alternatives and carbon tracking',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    github: '#',
    live: '#'
  }
];

export const skills = [
  {
    category: 'AI/ML',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 88 },
      { name: 'Scikit-learn', level: 92 },
      { name: 'OpenCV', level: 85 }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 93 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind', level: 95 },
      { name: 'Framer Motion', level: 87 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'FastAPI', level: 92 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 90 },
      { name: 'Docker', level: 85 }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 93 },
      { name: 'AWS', level: 82 },
      { name: 'CI/CD', level: 85 },
      { name: 'Figma', level: 88 },
      { name: 'Linux', level: 90 }
    ]
  }
];

export const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    description: 'Leading AI initiatives and developing machine learning models for production systems. Focused on computer vision and NLP applications.',
    achievements: [
      'Developed ML models with 95% accuracy',
      'Reduced inference time by 60%',
      'Led team of 5 engineers'
    ]
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Built scalable web applications and RESTful APIs. Worked with React, Node.js, and cloud infrastructure.',
    achievements: [
      'Architected microservices platform',
      'Improved app performance by 45%',
      'Shipped 10+ features to production'
    ]
  },
  {
    role: 'Software Engineering Intern',
    company: 'Future Corp',
    location: 'New York, NY',
    period: '2021 - 2022',
    description: 'Contributed to frontend development and participated in agile development processes. Gained experience in modern web technologies.',
    achievements: [
      'Built responsive UI components',
      'Collaborated with design team',
      'Fixed 50+ bugs and issues'
    ]
  }
];

export const mindset = {
  lines: [
    "I don't just build projects.",
    "I build systems, brands, and future products.",
    "I think in products, not features.",
    "I focus on long-term impact, scalability, and user experience.",
    "My goal is not just to code —",
    "but to engineer real-world change."
  ],
  supporting: "This mindset drives every decision, every line of code, and every product I create."
};

// Note: This is mock data for demonstration purposes
// Replace all values with your actual information before deploying
