import './product.css'
import Image from 'next/image'

import Gallery from '../../components/Gallery'
import Stars from '../../components/Stars'

async function getProductData(id) {
    const res = await fetch('https://dummyjson.com/products/'+id)

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

export default async function Page({ params, searchParams }) {
    const product = await getProductData(params.id)

    return (
    <main>
        <section className="top">
            <p className="title">{product.title}</p>
            <Gallery images={product.images}/>
            <div className="info">
              <p className="title">{product.title}</p>
              <p className="price">$ {product.price}</p>
              <span>{product.stock} left</span>
              <Stars rating={product.rating}/>
            </div>
        </section>
        <p>{product.description}</p>
    </main>
    )
}