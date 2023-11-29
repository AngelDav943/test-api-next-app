//'use client';
import Image from 'next/image'
import styles from './page.module.css'

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
    <aside>

    </aside>
    <main className={styles.main}>
      {catalog.products.map(product => (
        <a className={styles.product} href={product.id}>
          <img height="100" src={product.thumbnail}/>
          <div className={styles.info}>
            <span className={styles.title}>{product.title}</span>
            <span className={styles.price}>{product.price}$</span>
          </div>
        </a>
      ))}
    </main>
  </>
  )
}