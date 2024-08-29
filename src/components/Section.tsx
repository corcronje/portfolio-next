import React from 'react'

function Section({title, children}) {
  return (
    <>
      <section className="container mx-auto py-[5rem]">
        <h2>
          {title}
        </h2>
        {children}
      </section>
    </>
  );
}

export default Section