import React from 'react'

function TechStack({children}) {
  return (
    <ul className='flex flex-row gap-2 mt-2'>
        {children}
    </ul>
  )
}

export default TechStack