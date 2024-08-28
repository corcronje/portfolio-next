import React from 'react'

function Section({title, children}) {
  return (
    <section className="bg-gray-400 rounded-md mb-4">
      <h3 className='bg-gray-500 rounded-t-md p-4 text-xl'>{title}</h3>
      <div className='p-4'>{children}</div>
    </section>
  );
}

export default Section