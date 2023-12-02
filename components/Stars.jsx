'use client'
import star from '../public/images/star.png'

import './Stars.css'

export default function(props) {
    const stars = Array.from(Array(5).keys())

    return <div className='stars'>
        {stars.map(index => {
            let check = ""
            if (index < Math.floor(props.rating)) check = "check"
            return <img className={'star '+ check} key={index} src={star.src} alt='star'/>
        })}
        <span>{props.rating}</span>
    </div>
}