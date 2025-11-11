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
  const gradients = [
    "from-purple-500/20 via-purple-500/10 to-transparent",
    "from-cyan-500/20 via-cyan-500/10 to-transparent",
    "from-pink-500/20 via-pink-500/10 to-transparent",
    "from-blue-500/20 via-blue-500/10 to-transparent",
  ];
  const borderColors = [
    "border-purple-400/30",
    "border-cyan-400/30",
    "border-pink-400/30",
    "border-blue-400/30",
  ];
  const hoverGlow = [
    "0 0 40px rgba(168, 85, 247, 0.4)",
    "0 0 40px rgba(6, 182, 212, 0.4)",
    "0 0 40px rgba(236, 72, 153, 0.4)",
    "0 0 40px rgba(59, 130, 246, 0.4)",
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Latest Posts
        </motion.h2>
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
                className={`relative block w-full p-6 backdrop-blur-md bg-gradient-to-br ${gradients[i % 4]} border-2 ${borderColors[i % 4]} rounded-2xl shadow-2xl overflow-hidden group cursor-pointer`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: hoverGlow[i % 4],
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-cyan-600/0 to-pink-600/0 opacity-0 group-hover:opacity-10"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glow effect on left border */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold pb-3 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-cyan-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 pb-3">
                    <motion.span 
                      className="text-cyan-200 text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/30"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      📅 Published: {item.published_at}
                    </motion.span>
                    {item.edited_at && (
                      <motion.span 
                        className="text-pink-200 text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-pink-400/30"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        ✏️ Updated: {item.edited_at}
                      </motion.span>
                    )}
                  </div>
                  
                  <p className="py-2 text-white/80 leading-relaxed text-base drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Read more indicator */}
                  <motion.div 
                    className="flex items-center gap-2 mt-4 text-cyan-300 font-medium"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Read more</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
