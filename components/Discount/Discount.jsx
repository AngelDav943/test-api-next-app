import './Discount.css'

export default function(props)
{
    if (props.discount > 10) return (
        <span className='discount'>{props.discount}% OFF</span>
    )

    return <></>
}