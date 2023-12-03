import './Item.css'

import Stars from './Stars'

export default function(props) {
    return (
        <a className="product" href={props.id}>
            <img height="100" src={props.thumbnail}/>
            <div className="info">
                <p className="title">
                    {props.title}
                </p>
                <p className="price">
                    {props.discountPercentage > 10 && <span className='discount'>{props.discountPercentage}% OFF</span>}
                    {props.price}$
                </p>
            </div>
        </a>
    )
}