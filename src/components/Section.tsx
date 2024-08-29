import React from 'react'

function Section({title, id, children}) {
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