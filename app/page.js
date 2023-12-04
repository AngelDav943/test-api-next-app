//'use client';
import Image from 'next/image'

import Catalog from '../components/Catalog/Catalog'

async function getData(link) {
  const res = await fetch(link)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function () {
  const catalog = await getData('https://dummyjson.com/products?limit=10')

  return <Catalog
    catalog={catalog}
    currentPage={1}
  />
}