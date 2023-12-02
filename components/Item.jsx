import './Item.css'

export default function(props) {
    return (
        <a className="product" href={props.id}>
            <img height="100" src={props.thumbnail}/>
            <div className="info">
                <span className="title">{props.title}</span>
                <span className="price">{props.price}$</span>
            </div>
        </a>
    )
}