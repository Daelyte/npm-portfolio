"use client";
import React from "react";
import {
  Briefcase,
  Code,
  GraduationCap,
  Award,
  Rocket,
  Target,
  Zap,
  CheckCircle,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Globe,
  Download,
} from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Full Stack Developer & Product Creator",
      company: "Frame Economics Platform",
      period: "2024 - Present",
      status: "Current",
      description:
        "Leading development of comprehensive psychological resilience training platform combining behavioral economics with interactive learning",
      achievements: [
        "Built complete v4.0.0 with advanced psychology modules (Soul Sync, Empath, Blocking, Avoidant Attachment)",
        "Implemented real-time community features with story sharing and discussions",
        "Achieved 99.9% uptime with Netlify deployment and Supabase backend",
        "Created immersive UX with particle effects and mystical animations",
        "Optimized SEO with comprehensive sitemap and robots.txt",
      ],
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Netlify"],
    },
    {
      title: "AI-Assisted Development Specialist",
      company: "Personal Projects",
      period: "2023 - Present",
      status: "Ongoing",
      description:
        "Leveraging AI tools to maximize productivity and deliver high-quality projects rapidly",
      achievements: [
        "3x faster development speed using Claude, GPT-4, and specialized AI tools",
        "Automated terminal workflows with PowerShell optimization",
        "Streamlined database management and deployment pipelines",
        "Integrated code quality and security automation",
      ],
      tech: ["AI Tools", "PowerShell", "Git", "CI/CD", "Automation"],
    },
    {
      title: "Technical Sales & Client Success",
      company: "Career Transition",
      period: "2024 - Present",
      status: "In Progress",
      description:
        "Building expertise in enterprise software sales and technical solution positioning",
      achievements: [
        "Developing enterprise B2B sales methodology mastery",
        "Learning client success and post-sales account management",
        "Studying technical solution positioning for complex products",
        "CRM optimization with Salesforce and HubSpot",
      ],
      tech: ["Salesforce", "HubSpot", "Sales Methodologies", "Enterprise SaaS"],
    },
  ];

  const education = [
    {
      degree: "Self-Taught Full Stack Development",
      institution: "Various Online Platforms",
      period: "2023 - Present",
      focus: "React, TypeScript, PostgreSQL, Cloud Deployment",
    },
    {
      degree: "Psychology & Behavioral Economics",
      institution: "Independent Study",
      period: "2022 - Present",
      focus: "Jungian Psychology, Frame Control, Emotional Intelligence",
    },
  ];

  const skills = {
    "Frontend Development": [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    "Backend Development": [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
    ],
    "DevOps & Tools": [
      "Git",
      "GitHub",
      "Netlify",
      "PowerShell",
      "CI/CD",
    ],
    "AI & Productivity": [
      "Claude AI",
      "GPT-4",
      "Workflow Automation",
      "AI-Assisted Development",
    ],
    "Sales & Business": [
      "Enterprise B2B",
      "Technical Solutions",
      "CRM Systems",
      "Client Success",
    ],
    "Psychology & Design": [
      "Behavioral Economics",
      "UX/UI Design",
      "Psychology Principles",
      "Experience Architecture",
    ],
  };

  const certifications = [
    {
      title: "Advanced React & TypeScript",
      issuer: "Self-Directed Learning",
      date: "2024",
    },
    {
      title: "Enterprise Sales Methodology",
      issuer: "Professional Development",
      date: "2024",
    },
    {
      title: "Behavioral Economics Application",
      issuer: "Independent Study",
      date: "2023",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200";
      case "Ongoing":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-4 md:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50 dark:border-purple-700/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              James G.
            </h1>
          </div>

          <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
            Full Stack Developer | AI Workflow Specialist | Psychology-Driven Product Designer
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="mailto:daelytee@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              daelytee@gmail.com
            </a>
            <a
              href="https://github.com/Daelyte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://framearchitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
            >
              <Globe className="w-4 h-4" />
              Portfolio
            </a>
          </div>

          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Download className="w-5 h-5" />
              Download PDF Resume
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Professional Summary
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Innovative full-stack developer and product creator with expertise in building psychology-driven applications. 
            Specialized in AI-assisted development workflows that deliver high-quality products 3x faster. 
            Currently transitioning into technical sales, combining technical depth with client-focused solution design. 
            Proven track record of creating engaging user experiences that leverage behavioral economics and modern web technologies.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Professional journey and key accomplishments
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50/80 to-gray-100/80 dark:from-slate-800/40 dark:to-gray-900/40 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}
                    >
                      {job.status}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      {job.period}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Skills & Technologies
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Technical and professional competencies
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-slate-50/80 to-gray-100/80 dark:from-slate-800/40 dark:to-gray-900/40 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/60"
              >
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Continuous learning and development
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50/80 to-gray-100/80 dark:from-slate-800/40 dark:to-gray-900/40 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/60"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    {edu.period}
                  </span>
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  {edu.institution}
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Focus: {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certifications & Learning
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Professional development achievements
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50/80 to-gray-100/80 dark:from-slate-800/40 dark:to-gray-900/40 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/60"
              >
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
