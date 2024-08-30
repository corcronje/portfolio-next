import React from 'react'
import { ProjectItemType } from '@/types/types';

function ProjectItem({title, children} : ProjectItemType) {
  return (
    <article className="mt-5 pt-5 border-t border-slate-300">
      <h3 className="mb-4">{title}</h3>
      {children}
    </article>
  );
}

export default ProjectItem