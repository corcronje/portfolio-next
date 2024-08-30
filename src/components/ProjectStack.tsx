import React from 'react'

function ProjectStack({children} : {children: React.ReactNode}) {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default ProjectStack