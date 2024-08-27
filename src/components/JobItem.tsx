import React from 'react'

function JobItem({title, company, location, startDate, endDate, children}) {
  return (
    <article className='mb-5'>
        <div>{startDate} - {endDate} ({location})</div>
        <h3 className='text-xl'>{title} at {company}</h3>
        <div>
            {children}
        </div>
    </article>
  )
}

export default JobItem