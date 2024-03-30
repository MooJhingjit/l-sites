import React from 'react'


async function getData() {
  // Fetch data from external API and make 1000ms delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {}
  
}

export default async function OfficePage() {
  await getData()
  // throw new Error('Error')
  return (
    <div>OfficePage</div>
  )
}
