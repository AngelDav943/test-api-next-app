import style from './page.module.css'
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
    //return <div>ID: {params.id}</div>
    const product = await getProductData(params.id)
    //console.log(product)

    return (
    <main>
        <section className={style.top}>
            <div>
              <p className={style.title}>{product.title}</p>
              <Gallery images={product.images}/>
            </div>
            <div className={style.info}>
              <p className={style.price}>$ {product.price}</p>
              <span>{product.stock} left</span>
              <Stars rating={product.rating}/>
            </div>
        </section>
        <p>{product.description}</p>
    </main>
    )
}