"use client";

export default function About() {
  return (
    <main className="px-5 md:px-0 max-w-[815px] mx-auto flex-1 pt-48 md:pt-56 pb-10">
      <article className="space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed" role="doc-subtitle">
            AI-Powered Development Specialist & Technical Educator
          </p>
        </header>

        {/* Professional Summary */}
        <section 
          className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="professional-summary"
        >
          <h2 id="professional-summary" className="text-2xl font-semibold text-white">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Emerging full-stack developer transitioning into client-facing roles
            in AI solutions and education. I bring hands-on experience building
            applications using AI-assisted workflows (GitHub Copilot, Claude,
            GPT-4), giving me real-world insight into how teams can 3x their
            development velocity with proper AI integration.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I specialize in combining behavioral economics and psychology-driven
            design with modern web technologies (React, TypeScript, Next.js).
            My AI-assisted workflow isn't just a tool—it's a strategic approach
            that allows me to focus on architecture, user experience, and
            business outcomes while accelerating implementation.
          </p>
        </section>

        {/* What I Bring */}
        <section 
          className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="what-i-bring"
        >
          <h2 id="what-i-bring" className="text-2xl font-semibold text-white">
            What I Bring to Companies Selling AI Services
          </h2>
          <ul className="space-y-3 text-gray-300" role="list">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <div>
                <strong className="text-white">Credible technical depth:</strong> I
                actually build with AI tools daily—not theoretical knowledge
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <div>
                <strong className="text-white">Customer empathy:</strong> I
                understand the learning curve, concerns, and "aha moments"
                clients experience
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <div>
                <strong className="text-white">Translation skills:</strong> Bridge
                technical AI capabilities with business outcomes and ROI metrics
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <div>
                <strong className="text-white">Educational mindset:</strong> Proven
                ability to learn complex systems and teach others effectively
              </div>
            </li>
          </ul>
        </section>

        {/* Core Approach */}
        <section 
          className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="core-approach"
        >
          <h2 id="core-approach" className="text-2xl font-semibold text-white">Core Approach</h2>
          <p className="text-gray-300 leading-relaxed">
            Strategic problem-solving meets practical implementation. I focus on
            understanding <em>why</em> code works, not just making it run—building
            real comprehension alongside AI assistance to deliver user experiences
            grounded in behavioral psychology and economic principles.
          </p>
        </section>

        {/* Technical Competencies */}
        <section 
          className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="technical-competencies"
        >
          <h2 id="technical-competencies" className="text-2xl font-semibold text-white">
            Technical AI Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-4" role="list">
            <article className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all" role="listitem">
              <h3 className="font-semibold text-white mb-2">
                AI-Assisted Development
              </h3>
              <p className="text-gray-300 text-sm">
                Proficient in prompt engineering and AI pair-programming workflows
                across multiple LLM platforms (Claude, GPT-4, GitHub Copilot)
              </p>
            </article>
            <article className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all" role="listitem">
              <h3 className="font-semibold text-white mb-2">Modern Stack</h3>
              <p className="text-gray-300 text-sm">
                React, TypeScript, Next.js, Supabase, Tailwind CSS—all integrated
                with AI-enhanced workflows
              </p>
            </article>
            <article className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all" role="listitem">
              <h3 className="font-semibold text-white mb-2">
                Psychology-Driven Design
              </h3>
              <p className="text-gray-300 text-sm">
                Behavioral economics principles applied to user experience and
                product design
              </p>
            </article>
            <article className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg hover:bg-white/15 transition-all" role="listitem">
              <h3 className="font-semibold text-white mb-2">
                AI Tool Evaluation
              </h3>
              <p className="text-gray-300 text-sm">
                Experienced in assessing AI capabilities, limitations, and optimal
                use cases for development teams
              </p>
            </article>
          </div>
        </section>

        {/* Ideal Roles */}
        <section 
          className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="ideal-roles"
        >
          <h2 id="ideal-roles" className="text-2xl font-semibold text-white">
            Ideal Roles & Opportunities
          </h2>
          <div className="flex flex-wrap gap-3" role="list">
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              AI Solutions Consultant
            </span>
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              Technical Sales Engineer (AI Products)
            </span>
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              Developer Advocate
            </span>
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              AI Training & Enablement Specialist
            </span>
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              Customer Success Engineer
            </span>
          </div>
        </section>

        {/* Why This Matters */}
        <section 
          className="space-y-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md p-6 rounded-2xl border border-blue-500/30 shadow-xl"
          aria-labelledby="why-matters"
        >
          <h2 id="why-matters" className="text-2xl font-semibold text-white">
            Why This Positioning Matters
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I don't just sell AI tools—I live in them. My development workflow is
            a case study in AI-assisted productivity. I can walk clients through
            real implementation scenarios, common pitfalls, and measurable ROI
            because I've experienced it firsthand.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Most AI sales people haven't built anything with AI. Most developers
            won't admit they use AI. I'm the intersection—technical enough to be
            credible, transparent enough to be relatable, and experienced enough
            to guide others through their AI adoption journey.
          </p>
        </section>

        {/* Development Philosophy */}
        <section 
          className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="development-philosophy"
        >
          <h2 id="development-philosophy" className="text-2xl font-semibold text-white">
            Development Philosophy
          </h2>
          <ul className="space-y-3 text-gray-300" role="list">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <span>
                <strong className="text-white">AI as amplification:</strong> AI
                tools amplify human creativity and strategic thinking—they don't
                replace it
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <span>
                <strong className="text-white">Understand the why:</strong> Focus
                on understanding principles and patterns, not just syntax
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <span>
                <strong className="text-white">User-first design:</strong> Every
                technical decision should serve user needs and business outcomes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">▸</span>
              <span>
                <strong className="text-white">Continuous learning:</strong> The
                AI landscape evolves rapidly—staying current is part of the job
              </span>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section 
          className="space-y-4 text-center py-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
          aria-labelledby="cta"
        >
          <h2 id="cta" className="text-2xl font-semibold text-white">
            Let's Work Together
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            If you're looking for someone who can bridge the gap between AI
            capabilities and business value—someone who understands both the
            technical possibilities and the human challenges of AI adoption—let's
            connect.
          </p>
          <nav className="flex gap-4 justify-center pt-4" aria-label="About page actions">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Navigate to contact page"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Navigate to projects page"
            >
              View Projects
            </a>
          </nav>
        </section>
      </article>
    </main>
  );
}
