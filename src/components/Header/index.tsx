"use client";
import React, { useEffect } from "react";
import data from "./menuData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const path = usePathname();
  return (
    <header className="relative">
      {/* Desktop Nav */}
      <nav className="max-w-[815px] mx-auto pt-10 px-5 md:px-0">
        <motion.div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="flex flex-wrap gap-2">
          {data.map((item, index) => {
            const isActive = (path.includes(item.link!) && item.link != "/") || (path === "/" && item.link == "/");
            return (
              <li key={item.name}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className="relative block"
                    href={item.link || "/"}
                    target="_self"
                  >
                    <motion.span
                      className={`relative px-4 py-2 rounded-lg font-medium text-base capitalize inline-block ${
                        isActive 
                          ? "text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/50" 
                          : "text-white/90"
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(255,255,255,0.8)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {!isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                </motion.div>
              </li>
            );
          })}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
