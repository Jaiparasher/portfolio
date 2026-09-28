import { useState } from 'react';
import { myProjects } from '../constants/index.js';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="work" className="c-space my-20">
      <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5">
        <div>
          <p className="eyebrow">Selected projects</p>
          <h2 className="head-text mt-2">My Work</h2>
        </div>
        <span className="hidden text-sm text-neutral-500 sm:block">{String(selectedProjectIndex + 1).padStart(2, '0')} / {String(myProjects.length).padStart(2, '0')}</span>
      </div>

      <div className="mt-8 grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-2">
          {myProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedProjectIndex(index)}
              className={`project-list-item ${selectedProjectIndex === index ? 'project-list-item-active' : ''}`}
              aria-pressed={selectedProjectIndex === index}
            >
              <span className="text-xs text-neutral-500">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-left text-lg font-medium">{project.title}</span>
              <span className="ml-auto text-neutral-500 transition-transform group-hover:translate-x-1">↗</span>
            </button>
          ))}
        </div>

        <article className="project-feature-card">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-xl p-3" style={currentProject.logoStyle}>
              <img className="h-9 w-9 object-contain" src={currentProject.logo} alt={`${currentProject.title} logo`} />
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">{String(selectedProjectIndex + 1).padStart(2, '0')}</span>
          </div>
          <div className="mt-16 max-w-xl">
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{currentProject.title}</h3>
            <p className="mt-5 text-base leading-7 text-neutral-400">{currentProject.desc}</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {currentProject.tags.map((tag) => <span key={tag.id} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300">{tag.name}</span>)}
            {currentProject.href && <a className="ml-auto text-sm font-medium text-[#b8ff5a] transition-colors hover:text-white" href={currentProject.href} target="_blank" rel="noreferrer">View live site ↗</a>}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
