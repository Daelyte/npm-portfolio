# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website with a markdown-based blog system. It uses TypeScript, Tailwind CSS, and the App Router architecture.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

**Note:** Per user preference, the development server should be launched outside of Warp terminal using Windows PowerShell to maintain communication.

## Project Architecture

### Directory Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── blog/          # Blog routes
│   │   └── [slug]/    # Dynamic blog post pages
│   ├── contact/       # Contact page
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout with Header/Footer
│   ├── page.tsx       # Home page
│   ├── robots.ts      # Robots.txt generator
│   └── sitemap.ts     # Sitemap generator
├── components/        # React components organized by feature
│   ├── Blog/          # Blog listing component
│   ├── Contact/       # Contact form with EmailJS integration
│   ├── Footer/        # Footer component
│   ├── Header/        # Navigation header
│   ├── Hero/          # Hero section
│   └── Projects/      # Projects listing
├── context/           # React context providers
│   └── ToastContext.tsx  # Toast notification provider
├── libs/              # Utility libraries
│   ├── markdown.ts    # Markdown file reading and parsing
│   └── markdownToHtml.ts  # Markdown to HTML conversion
└── types/             # TypeScript type definitions
    ├── post.ts        # Blog post types
    ├── project.ts     # Project types
    └── socialLinks.ts # Social link types
data/
└── social-links.tsx   # Social media links configuration
markdown/
└── blogs/             # MDX blog posts with frontmatter
```

### Key Architecture Patterns

**1. Blog System**
- Blog posts are stored as `.mdx` files in `markdown/blogs/`
- Posts use gray-matter for frontmatter parsing
- Frontmatter fields: `title`, `author`, `description`, `published_at`, `edited_at`
- Markdown is converted to HTML using remark/remark-html
- Dynamic routes use `[slug]` pattern with `generateStaticParams()`

**2. Path Aliases**
- TypeScript path alias `@/*` maps to `./src/*`
- Always use the alias for imports: `import Component from "@/components/Component"`

**3. Styling**
- Tailwind CSS with custom color palette:
  - `primary: #0F172A`
  - `secondery: #1E293B` (note: typo in config)
  - `accent: #7477FF`
- Typography plugin for markdown rendering
- Dark mode enabled via media query

**4. Contact Form**
- Uses EmailJS for email sending
- Requires environment variables:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Toast notifications via react-hot-toast

**5. SEO & Metadata**
- Metadata defined per-route using Next.js metadata API
- Requires `SITE_URL` environment variable
- OpenGraph and Twitter card support
- Automatic sitemap and robots.txt generation

## Environment Variables

Create a `.env` file with:
```bash
SITE_URL=your-site-url
SITE_NAME=your-site-name
AUTHOR_NAME=your-name
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

## Adding Content

### Adding a Blog Post
1. Create a new `.mdx` file in `markdown/blogs/`
2. Include frontmatter:
   ```yaml
   ---
   title: "Post Title"
   author: "Author Name"
   description: "Post description"
   published_at: "YYYY-MM-DD"
   edited_at: "YYYY-MM-DD"
   ---
   ```
3. Write content in markdown below frontmatter
4. Posts are automatically discovered and sorted by published_at

### Adding a Project
1. Edit `src/components/Projects/projectsData.tsx`
2. Add a new object to the `data` array with `name`, `source`, `link`, and `desc`

### Modifying Social Links
1. Edit `data/social-links.tsx`
2. Add/remove social links with `name`, `url`, and `icon` (SVG)

## TypeScript Configuration

- Strict mode enabled
- ES5 target for broad compatibility
- Module resolution: bundler
- No type checking in build (noEmit: true)

## Image Configuration

External image domains allowed in `next.config.js`:
- lh3.googleusercontent.com
- media.dev.to
- dev-to-uploads.s3.amazonaws.com
