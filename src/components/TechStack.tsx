import React from 'react'

function TechStack({children} : {children: React.ReactNode}) {
  return (
    <>
      <small className="w-full text-slate-400 text-xs font-bold">
        Tech Stack
      </small>
      <ul className="flex flex-row flex-wrap gap-2 text-sm">{children}</ul>
    </>
  );
}

export default TechStack