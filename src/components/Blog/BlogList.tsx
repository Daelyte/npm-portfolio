"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  published_at: string;
  edited_at?: string;
  description: string;
  slug: string;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const cardStyles = [
    {
      bg: "bg-gradient-to-br from-purple-900/40 to-purple-800/20",
      border: "border-purple-400/40",
      accent: "text-purple-300",
      hover: "0 0 40px rgba(168, 85, 247, 0.5)"
    },
    {
      bg: "bg-gradient-to-br from-cyan-900/40 to-cyan-800/20",
      border: "border-cyan-400/40",
      accent: "text-cyan-300",
      hover: "0 0 40px rgba(6, 182, 212, 0.5)"
    },
    {
      bg: "bg-gradient-to-br from-pink-900/40 to-pink-800/20",
      border: "border-pink-400/40",
      accent: "text-pink-300",
      hover: "0 0 40px rgba(236, 72, 153, 0.5)"
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <motion.h2 
          className="text-4xl font-bold mb-3 text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical Articles
        </motion.h2>
        <p className="text-gray-400 text-lg">Real problems, real solutions, real code.</p>
      </motion.div>
      
      <div className="container space-y-6">
        {posts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/blog/${item.slug}`}>
              <motion.div
                className={`relative block w-full p-8 backdrop-blur-sm ${cardStyles[i % 3].bg} border-2 ${cardStyles[i % 3].border} rounded-xl shadow-xl overflow-hidden group cursor-pointer hover:border-opacity-60 transition-all`}
                whileHover={{ 
                  y: -4,
                  boxShadow: cardStyles[i % 3].hover,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Accent bar on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${cardStyles[i % 3].border.replace('border-', 'bg-')} group-hover:w-2 transition-all duration-300`} />
                
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white leading-tight group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Date badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-md bg-white/5 ${cardStyles[i % 3].accent} border ${cardStyles[i % 3].border}`}>
                      {item.published_at}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-base mb-4">
                    {item.description}
                  </p>
                  
                  {/* Read more */}
                  <div className={`flex items-center gap-2 font-medium ${cardStyles[i % 3].accent} group-hover:gap-3 transition-all`}>
                    <span className="text-sm">Read article</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
