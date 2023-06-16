import React from 'react'

export default function Accordion({title, active, setActive}) {
  return (
    <div className='accordion'>
        <div className='accordionHeading'>
            <div className='container'>
                <p>{title}</p>
                <span onClick = {() => setActive(title)}>CLICK ME</span>
            </div>
        </div>
        <div className={(active === title ? "show" : "") + "accordionContent"}>
            <div className='container'>
                <p>MERHABA</p>
            </div>
        </div>
    </div>
  )
}
