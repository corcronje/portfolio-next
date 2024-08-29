import React from 'react'

function ProjectItem({title, children}) {
  return (
    <article className="mt-5 pt-5 border-t border-slate-300">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default ProjectItem