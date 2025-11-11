import type { MetadataRoute } from 'next'
import path from 'node:path'
import fs from 'node:fs/promises'

function isoSafe(date: Date | number | undefined): string | undefined {
  try {
    const d = typeof date === 'number' ? new Date(date) : (date ?? new Date())
    if (Number.isNaN(d.getTime())) return undefined
    return d.toISOString()
  } catch {
    return undefined
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://jmfg.ca').replace(/\/$/, '')

  const staticRoutes: MetadataRoute.Sitemap = [
    '', 'about', 'blog', 'contact', 'projects', 'resume',
  ].map((r) => ({
    url: `${base}${r ? '/' + r : ''}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.7,
  }))

  const posts: MetadataRoute.Sitemap = []
  try {
    const mdDir = path.join(process.cwd(), 'markdown')
    const files = await fs.readdir(mdDir).catch(() => [])
    for (const file of files) {
      if (!file.endsWith('.md')) continue
      const slug = file.replace(/\.md$/, '')
      const stat = await fs.stat(path.join(mdDir, file)).catch(() => undefined)
      posts.push({
        url: `${base}/blog/${slug}`,
        lastModified: isoSafe(stat?.mtime) ? new Date(stat!.mtime) : undefined,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  } catch {
    // ignore FS errors in serverless
  }

  return [...staticRoutes, ...posts]
}