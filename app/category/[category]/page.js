//'use client';
import Image from 'next/image'

import Catalog from '../../../components/Catalog/Catalog'

async function getData(link) {
  const res = await fetch(link)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function ({ params, searchParams }) {
  const page = Math.max(1, parseInt(searchParams.page) || 1)
  var link = 'https://dummyjson.com/products/category/' + params.category + '?limit=10&skip=' + (page-1) * 10
  const catalog = await getData(link)

  return <Catalog
    catalog={catalog}
    currentPage={page}
    category={params.category}
  />
}