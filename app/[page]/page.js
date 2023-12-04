//'use client';

//https://dummyjson.com/products?limit=10&skip=10
import Image from 'next/image'

import Catalog from '../../components/Catalog/Catalog'

async function getData(link) {
    const res = await fetch(link)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ({ params, searchParams }) {
    const page = Math.max(0, params.page - 1) * 10
    const catalog = await getData('https://dummyjson.com/products?limit=10&skip=' + (page))

    return <Catalog
        catalog={catalog}
        currentPage={Math.max(1, params.page)}
    />
}