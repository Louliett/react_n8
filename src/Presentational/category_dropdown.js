import React from 'react'

export const Category_Dropdown=(props)=>{
    const items=props.i.map(item => <li className='category-list-item'><a className='list-item-link' href='#'>{item}</a></li>)

    return (
        <div className={`dropdown-holder`}>
            <div className='dropdown-inner'>
            <ul>
                {items}
            </ul>
            </div>
        </div>
    )
}