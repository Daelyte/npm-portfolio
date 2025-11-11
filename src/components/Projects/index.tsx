import SingleProject from "./SingleProject";
import data from "./projectsData";

const Projects = () => {
  return (
    <main className="px-5 max-w-[815px] mx-auto flex-1 pt-48 md:pt-56 pb-10">
      <article className="space-y-8">
        {/* Header */}
        <header className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Projects</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Here are some projects where I created my own content and explorations.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <SingleProject key={i} project={item} />
          ))}
        </div>
      </article>
    </main>
  );
};

export default Projects;
