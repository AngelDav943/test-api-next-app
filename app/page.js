//'use client';
import Image from 'next/image'
import './home.css'

import Item from '../components/Item'

async function getData() {
  const res = await fetch('https://dummyjson.com/products')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const catalog = await getData()

  return (
  <>
    <main>
      <aside>

      </aside>
      {catalog.products.map(product => (
        <Item {...product}/>
      ))}
    </main>
  </>
  )
}