import './Catalog.css'

import Item from '../Item/Item'
import Paginator from '../Paginator/Paginator'

async function getData(link) {
    const res = await fetch(link)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function (props) {
    const categories = await getData('https://dummyjson.com/products/categories')
    var categoryPrefix = ""
    if (props.category) categoryPrefix = props.category + "?page="

    return (
        <main>
            <aside>
                <p>Categories</p>
                <a href='/'>All categories</a>
                {categories.map(category => (
                    <a href={'/category/' + category}>{category}</a>
                ))}
            </aside>
            <section>
                {props.catalog.products.map(product => (
                    <Item {...product} />
                ))}
                <Paginator current={props.currentPage} amount={10} prefix={categoryPrefix}/>
            </section>
        </main>
    )
}