import { getAllPosts, getPostBySlug } from "@/libs/markdown";
import markdownToHtml from "@/libs/markdownToHtml";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "description",
    "published_at",
    "edited_at",
  ]);

  const siteName = process.env.SITE_NAME || "Coderamrin Blog";
  const authorName = process.env.AUTHOR_NAME || "Coderamrin";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      description: post.description,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        type: "website",
        title: `${post.title || "Single Post Page"} | ${siteName}`,
        description: post.description,
        url: `${process.env.SITE_URL}/blog/${post.slug}`,
        siteName,
      },

      twitter: {
        card: "summary_large_image",
        title: `${post.title || "Single Post Page"} | ${siteName}`,
        description: post.description,
        url: `${process.env.SITE_URL}/blog/${post.slug}`,
        siteName: "@coderamrin",
        creator: "@coderamrin",
      },

      alternates: {
        canonical: `${process.env.SITE_URL}/blog/${post.slug}`,
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params }: Props) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "description",
    "published_at",
    "edited_at",
  ]);

  if (post?.success === false) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Styled container background */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border-2 border-slate-700/50 rounded-2xl shadow-2xl p-8 md:p-12">
          <article className="prose prose-lg md:prose-xl prose-invert max-w-none">
            {/* Header section */}
            <div className="mb-12 pb-8 border-b border-slate-700/50">
              <h1 className="!mb-4 !leading-tight text-white">{post.title}</h1>
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  Published: {post.published_at}
                </span>
                {post.edited_at && (
                  <span className="px-3 py-1.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">
                    Edited: {post.edited_at}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }}></div>
          </article>
        </div>
      </div>
    </div>
  );
}
