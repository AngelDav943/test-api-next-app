import './Paginator.css'

export default function (props) { // currentPage, amount
    const pages = Array.from(Array(props.amount).keys())

    return (
        <div className='paginator'>
            {pages.map(index => {
                index = index + 1
                let linkclass = ''
                if (index == props.current) linkclass = "selected"

                return <a className={linkclass} href={'./'+props.prefix+index}>{index}</a>
            })}
        </div>
    )
}