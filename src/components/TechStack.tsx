import React from 'react'

function TechStack({children}) {
  return (
    <ul className='flex flex-row flex-wrap gap-2'>
        {children}
    </ul>
  )
}

export default TechStack