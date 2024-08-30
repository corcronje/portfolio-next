import React from 'react'

function TechStackItem({children} : {children: React.ReactNode}) {
  return (
    <li className='flex flex-col justify-center items-center text-center px-3 py-1 bg-indigo-400 dark:bg-indigo-500 text-gray-100 rounded-md'>
        {children}
    </li>
  )
}

export default TechStackItem