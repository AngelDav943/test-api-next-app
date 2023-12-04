import './Item.css'

import Stars from '../Stars/Stars'
import Discount from '../Discount/Discount'

export default function(props) {
    return (
        <a className="product" href={"products/"+props.id}>
            <img height="100" src={props.thumbnail}/>
            <div className="info">
                <p className="title">
                    {props.title}
                </p>
                <p className="price">
                    <Discount discount={props.discountPercentage}/>
                    {props.price}$
                </p>
            </div>
        </a>
    )
}