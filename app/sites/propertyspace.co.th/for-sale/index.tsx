import React from 'react'
import PropertySearchPage from '../_components/PropertySearchPage'
import { Params, SearchParams } from '@/lib/definitions'

export default function PropertyForSale({ params, searchParams }: {
  params: Params
  searchParams: SearchParams
}) {
  // console.log('PropertyForSale params', params)
  // console.log('PropertyForSale searchParams', searchParams)
  return (
    <PropertySearchPage
      tenure='sale'
    />
  )
}