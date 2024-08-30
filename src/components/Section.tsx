import React from 'react'
import { SectionType } from '@/types/types';

function Section({title, id, children} : SectionType) {
  return (
    <>
      <section id={id} className="container mx-auto py-[5rem]">
        <h2>
          {title}
        </h2>
        {children}
      </section>
    </>
  );
}

export default Section