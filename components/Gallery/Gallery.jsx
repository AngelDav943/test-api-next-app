'use client'

import { useState } from 'react'
import Image from 'next/image'

import left from '../public/images/left.svg'
import right from '../public/images/right.svg'

import './Gallery.css'

export default function Counter(props) {
  const [current, setCurrent] = useState(0)

  return (
    <div className='gallery'>
      <div className="preview">
        {props.images.map((image, index) => (
          <button key={index} className='image' onClick={() => setCurrent(index)}>
            <img src={image} alt={"preview_"+index}/>
          </button>
        ))}
      </div>
      <img className='main' src={props.images[current]} alt="Main preview" />
    </div>
  )
}