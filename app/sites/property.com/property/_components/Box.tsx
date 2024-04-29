import React from 'react'

export default function Box({ label }: { label: string }) {
  return (
    <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
      <p className='text-gray-500'>{label}</p>
    </div>
  )
}
