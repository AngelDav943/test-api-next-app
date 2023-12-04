import './product.css'
import Image from 'next/image'

import Gallery from '../../../components/Gallery/Gallery'
import Stars from '../../../components/Stars/Stars'
import Discount from '../../../components/Discount/Discount'

async function getProductData(id) {
  const res = await fetch('https://dummyjson.com/products/' + id)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params, searchParams }) {
  const product = await getProductData(params.id)

  return <>
    <div className='top'>
      <span>
        <a href='/'>Home</a>
        {'>'}
        <a href={'/category/'+product.category}>{product.category}</a>
      </span>
    </div>
    <main>
      <article>
        <p className="title">{product.title}</p>
        <Gallery images={product.images} />
        <div className="info">
          <p className="title">{product.title}</p>
          <Discount discount={product.discountPercentage}/>
          
          <p className="price">$ {product.price}</p>
          <Stars rating={product.rating} />
          <span>{product.stock} left</span>
        </div>
      </article>
      <hr/>
      <p>{product.description}</p>
    </main>
  </>
}