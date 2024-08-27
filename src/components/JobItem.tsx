import React from 'react'

function JobItem({title, company, location, startDate, endDate, children}) {
  return (
    <article className="mb-5">
      <div className='text-sm text-orange-500'>
        {startDate} - {endDate}
      </div>

      <h3 className="text-2xl">{title}</h3>

      <div className="flex flex-row justify-between items-center text-gray-500">
        <small>{location}</small>
        <small>{company}</small>
      </div>

      <div className="mt-2">{children}</div>
    </article>
  );
}

export default JobItem