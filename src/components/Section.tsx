import React from 'react'

function Section({title, children}) {
  return (
    <section className="mb-5">
      <h2 className="text-2xl mb-2">{title}</h2>
      <div className="bg-gray-400 dark:bg-gray-600 rounded-md p-4">
        {children}
      </div>
    </section>
  );
}

export default Section