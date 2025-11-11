import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/libs/markdown";
import { Metadata } from "next";

const url = process.env.SITE_URL!;

export const metadata: Metadata = {
  title: "Technical Blog - James G.",
  description:
    "Real-world technical articles on React, TypeScript, performance optimization, and production debugging. No fluff, just code.",
  openGraph: {
    type: "website",
    title: "Technical Blog - James G.",
    description:
      "Real-world technical articles on React, TypeScript, performance optimization, and production debugging.",
    images: `${url}/images/og-image.jpg`,
    url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Blog - James G.",
    description:
      "Real-world technical articles on React, TypeScript, performance optimization, and production debugging.",
    images: `${url}/images/og-image.jpg`,
  },

  alternates: {
    canonical: `${url}/blog`,
  },
};

const BlogArchive = () => {
  const posts = getAllPosts([
    "title",
    "published_at",
    "edited_at",
    "description",
    "coverImage",
    "slug",
  ]);
  
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen pt-64 md:pt-72 pb-16 px-4 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Styled container background */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border-2 border-slate-700/50 rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-slate-700/50">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Technical Articles
            </h1>
            <p className="text-gray-300 text-lg">
              Real problems, real solutions, real code. Production debugging, performance optimization, and lessons learned building with AI assistance.
            </p>
          </div>
          
          {/* Blog posts list */}
          <div className="space-y-6">
            {posts.map((item: any, i) => {
              return (
                <Link
                  href={`/blog/${item.slug}`}
                  key={i}
                  className="block w-full p-6 bg-slate-800/40 border-2 border-slate-700/40 rounded-xl hover:border-slate-600/60 hover:bg-slate-800/60 transition-all duration-300 group"
                >
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs px-3 py-1.5 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50">
                        Published: {item.published_at}
                      </span>
                      {item.edited_at && (
                        <span className="text-xs px-3 py-1.5 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50">
                          Updated: {item.edited_at}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogArchive;
