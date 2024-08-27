import React from 'react'

function TeckStackItem({children}) {
  return (
    <li className='flex flex-col justify-center items-center text-center p-2 bg-blue-600 text-gray-100 rounded-md'>
        {children}
    </li>
  )
}

export default TeckStackItem