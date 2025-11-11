export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "James M. F. Greer",
    "alternateName": "JMFG",
    "url": "https://framearchitech.com",
    "image": "https://framearchitech.com/images/og-image.png",
    "sameAs": [
      "https://linkedin.com/in/yourprofile",
      "https://github.com/yourusername",
      "https://twitter.com/jamesgreer"
    ],
    "jobTitle": "Creative Technologist",
    "worksFor": {
      "@type": "Organization",
      "name": "JMFG"
    },
    "description": "Creative technologist, developer, and storyteller specializing in interactive experiences and narrative works.",
    "knowsAbout": [
      "Web Development",
      "Interactive Design",
      "Creative Technology",
      "Storytelling",
      "Three.js",
      "Next.js",
      "React"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JMFG Portfolio",
    "alternateName": "James M. F. Greer Portfolio",
    "url": "https://framearchitech.com",
    "description": "Portfolio and creative works by James M. F. Greer",
    "author": {
      "@type": "Person",
      "name": "James M. F. Greer"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://framearchitech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  );
}
