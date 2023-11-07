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
    console.log(params.id)
    console.log(product)

    /*
    return <div>
        <p>{params.id}</p>
        <p>{product}</p>
    </div>
    //*/

    return (
    <main>
        <div>
            <img height="100" src={product.thumbnail}/>
            <p>{product.title}</p>
        </div>
    </main>
    )
}